import { Component, ViewChild } from '@angular/core';
import { Platform , NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from './../providers/settings/settings';
import 'moment-duration-format';
import * as moment from 'moment';
import * as separator from 'string-remove-thousand-separators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  settingsPage = SettingsPage;
  selectedTheme: String;
  remainingTime;

  @ViewChild('rootNav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private settings: SettingsProvider,
    private menuCtrl: MenuController) {
       this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
    });

    if (moment().isBefore(moment({ hour:23 }))) {
      this.remainingTime = moment.duration(moment({ hour:23 }).diff(moment())).format("s");
    }else {
      this.remainingTime = moment.duration(moment({ hour:23 }).add(1,'day').diff(moment())).format("s");
    }
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  menuOpened(){
  }

  getRemainingSeconds() : number{
    return separator(this.remainingTime);
  }


}
