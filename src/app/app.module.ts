import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToastrModule } from 'ngx-toastr';
import { TimerComponent } from './timer/timer.component';
import { PortraitComponent } from './portrait/portrait.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContentComponent,
    ContentComponent,
    HeaderComponent,
    LoginFormComponent,
    WelcomeContentComponent,
    ButtonsComponent,
    TimerComponent,
    PortraitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
