import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LeftBarComponent } from './left-bar/left-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PrimaryHeaderComponent } from './primary-header/primary-header.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    PrimaryHeaderComponent,
    NavbarHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
