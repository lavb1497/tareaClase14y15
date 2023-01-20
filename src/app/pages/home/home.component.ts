import { Component } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // constructor(private dataServices:DataService){}

  textoPadre = "COMPONENTE PADRE";
  textoRecibido!:string

  // cambiarTextoDelPadre(){
  //   this.textoPadre = "Cambie el texto desde el Padre";

  //   // this.dataServices.textoNabvar = this.textoPadre;


  // }
}
