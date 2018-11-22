import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPageModule } from '../pages/login/login.module';
import { MusicalListPageModule } from '../pages/musical-list/musical-list.module';
import { MusicalListMessagePageModule } from '../pages/musical-list-message/musical-list-message.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicalListDetailPageModule } from '../pages/musical-list-detail/musical-list-detail.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    MusicalListDetailPageModule,
    MusicalListMessagePageModule,
    MusicalListPageModule,
    ProfilePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
