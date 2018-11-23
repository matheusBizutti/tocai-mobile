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
import { HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './baseurl/baseurl.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { LoginPage } from '../pages/login/login';
import { ToasterService } from './toaster/toaster.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    InterceptorModule,
    RouterModule.forRoot(
      [
        { path: "", component: LoginPage}
      ]
    ),
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
    BaseUrl,
    AuthService,
    CookieService,
    ToasterService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
