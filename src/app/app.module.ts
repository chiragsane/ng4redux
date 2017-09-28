import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { campaigns } from './reducers/campaign.reducer';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';

import { AuthGuard } from 'app/shared/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignCountComponent } from './campaign/count.component';

import { CampaignService } from './services/campaign.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CampaignComponent,
    CampaignCountComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({
      campaigns
    }),
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    CampaignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
