import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-14y15';
  titulo = "Data Binding Interpolation"

  mensaje = "Event binding, es el mecanismo de data binding mediante el cual trabaja con los eventos que se encuentran en el DOM."
  condicionMensaje:boolean = false;
  boton = "mostrar"

  mostrarMensaje(){
    if (this.condicionMensaje){
      this.condicionMensaje = false
      this.boton = "mostrar"
    } else {
        this.boton = "ocultar"
        this.condicionMensaje = true
    }

  }
  textTwoWay!:string
}
