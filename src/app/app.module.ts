import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { user } from './reducers/user.reducer';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';

import { AuthGuard } from 'app/shared/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({
      user
    }),
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
