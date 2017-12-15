import { Component, ViewChild , NgZone } from '@angular/core';
import { Platform , NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from './../providers/settings/settings';
import 'moment-duration-format';
import * as moment from 'moment';
import { ViewService } from './services/view-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  settingsPage = SettingsPage;
  selectedTheme: String;
  dailyRemainingTime;
  weeklyRemainingTime;
  countDownTimer: number;

  @ViewChild('rootNav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private settings: SettingsProvider,
    private menuCtrl: MenuController,
    private viewService: ViewService,
    private ngZone:   NgZone) {
       this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
    });

    this.startCountDowns();
  }

  startCountDowns(){
    this.initializeDailyCountDown();
    this.initializeWeeklyCountDown();
  }

  initializeDailyCountDown(){
    let resetTime = moment({ hour:23 });

    if (this.todayResetNotReached()) {
      this.dailyRemainingTime = this.calculateRemainingTime(resetTime);
    }else {
      this.dailyRemainingTime = this.calculateRemainingTime(resetTime.add(1,'day'));
    }

    this.countDownTimer ?  this.resetTicking() : this.startTicking();
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  todayResetNotReached(){
    return moment().isBefore(moment({ hour:23 }))
  }

  calculateRemainingTime(endTime){
    return moment.duration(endTime.diff(moment())).asSeconds();
  }

  menuOpened(){
    this.startCountDowns();
  }

  startTicking(){
    this.countDownTimer = setInterval(()=> {
      this.ngZone.run(() => {
        this.dailyRemainingTime--;
        this.weeklyRemainingTime--;
      });
    },1000);
  }

  resetTicking(){
    clearInterval(this.countDownTimer);
    this.startTicking();
  }

  formatClock(seconds: number): string{
    return this.viewService.formatClock(seconds);
  }

  initializeWeeklyCountDown(){
    let weekly = moment({ hour: 16}).day(2);

    if (moment().isBefore(weekly)){
      this.weeklyRemainingTime = this.calculateRemainingTime(weekly);
    }else{
      this.weeklyRemainingTime = this.calculateRemainingTime(weekly.add(1,'week'));
    }
  }

}
