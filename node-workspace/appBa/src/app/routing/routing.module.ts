import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import {ContactoComponent} from '../contacto/contacto.component';
import {ServiciosComponent} from '../servicios/servicios.component';

const appRoutes: Routes = [{path:'welcome',component:WelcomeComponent},{path:'servicios',component:ServiciosComponent},{path:'contacto',component:ContactoComponent},{path:'',redirectTo:'/welcome',pathMatch:'full'}]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
