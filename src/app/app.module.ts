import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { GradePage } from '../pages/grade/grade';
import { CadastroPage } from '../pages/cadastro/cadastro'
import { ListPage } from '../pages/list/list'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HorariosPage } from '../pages/horarios/horarios';
import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';

var config = {
    apiKey: "AIzaSyB7HYm7wvmj5Xf5bCV7pE5sxyaEpnNPexc",
    authDomain: "hibridos-a43dd.firebaseapp.com",
    databaseURL: "https://hibridos-a43dd.firebaseio.com",
    projectId: "hibridos-a43dd",
    storageBucket: "",
    messagingSenderId: "130268102722"
  };

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HomePage,
    GradePage,
    LoginPage,
    HorariosPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    GradePage,
    HomePage,
    HorariosPage,
    LoginPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
