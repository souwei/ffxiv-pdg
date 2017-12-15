import { Component, ViewChild , NgZone } from '@angular/core';
import { Platform , NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from './../providers/settings/settings';
import 'moment-duration-format';
import * as moment from 'moment';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  settingsPage = SettingsPage;
  selectedTheme: String;
  remainingTime;
  countDownTimer: number;

  @ViewChild('rootNav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private settings: SettingsProvider,
    private menuCtrl: MenuController,
    private ngZone:   NgZone) {
       this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
    });

    this.initializeCountDown();
  }

  initializeCountDown(){
    let resetTime = moment({ hour:23 });

    if (this.todayResetNotReached()) {
      this.remainingTime = this.calculateRemainingTime(resetTime);
    }else {
      this.remainingTime = this.calculateRemainingTime(resetTime.add(1,'day'));
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
    this.initializeCountDown();
  }

  formatDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10);
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  startTicking(){
    this.countDownTimer = setInterval(()=> {
      this.ngZone.run(() => {
        this.remainingTime--;
      });
    },1000);
  }

  resetTicking(){
    clearInterval(this.countDownTimer);
    this.startTicking();
  }

}
