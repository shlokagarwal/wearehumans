import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {AngularFireModule} from '@angular/fire';
import {AuthenticationService} from './services/authentication.service';
import { ContributeComponent, LoginDialogComponent } from './contribute/contribute.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
// import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    ContributeComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAPuk6BpFQW3Z8WAgBSduC66kyO6nZ6B9A',
      authDomain: 'wearehumans-dev.firebaseapp.com',
      databaseURL: 'https://wearehumans-dev.firebaseio.com',
      projectId: 'wearehumans-dev',
      storageBucket: 'wearehumans-dev.appspot.com',
      messagingSenderId: '561043587346',
      appId: '1:561043587346:web:abeb9c0ca79500ed4173cb',
      measurementId: 'G-2H2TBYRYHQ'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
