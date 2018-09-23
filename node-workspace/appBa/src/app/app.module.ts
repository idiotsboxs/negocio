import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RoutingModule} from './routing/routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,RoutingModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
