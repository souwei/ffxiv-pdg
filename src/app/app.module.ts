import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ExpertDungeonsPage } from '../pages/expert-dungeons/expert-dungeons';
import { LevelDungeonsPage } from '../pages/level-dungeons/level-dungeons';
import { DungeonInfoPage } from '../pages/dungeon-info/dungeon-info';
import { DungeonService } from './services/dungeon-service';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ExpertDungeonsPage,
    LevelDungeonsPage,
    DungeonInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ExpertDungeonsPage,
    LevelDungeonsPage,
    DungeonInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DungeonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
