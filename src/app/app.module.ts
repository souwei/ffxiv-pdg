import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { DungeonInfoPage } from '../pages/dungeon-info/dungeon-info';
import { DungeonService } from './services/dungeon-service';
import { ViewService } from './services/view-service';
import { DungeonsListingPage } from '../pages/dungeons-listing/dungeons-listing';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DungeonInfoPage,
    DungeonsListingPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DungeonInfoPage,
    DungeonsListingPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DungeonService,
    ViewService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider
  ]
})
export class AppModule {}
