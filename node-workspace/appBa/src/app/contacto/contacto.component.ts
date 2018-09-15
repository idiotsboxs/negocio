import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare const google: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  formContacto: FormGroup;


  initMap(){
    
  }

  ngOnInit() {
    
    let map;
    let marker;
    const BARBER = {lat: 19.3073223, lng: -99.6437940};

      map = new google.maps.Map(document.getElementById('map'), {
          center: BARBER,
          zoom: 19
      });

      marker = new google.maps.Marker({
          position: BARBER,
          map: map,
          title: 'Pancho Reatas Barberria de Barrio'
      });

   this.formContacto = this.formBuilder.group({firstName:['',Validators.required],lastName:['',Validators.required],
    mail:['',Validators.required],message:['',Validators.required]});
     
  }

}
