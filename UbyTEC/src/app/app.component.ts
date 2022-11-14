import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private auth:AuthenticationService, private render2:Renderer2){ }
  title = 'DetailTEC';
  isClient = false;
  public arrAuth:any = [];
  hidden = false;

  ngOnInit(): void {
    // ver si puedo hacer que se esconda el divisor donde estan lo botones al momento de iniciar sesion
    /*const sucBtn = document.getElementById('suc');
    sucBtn.style.visibility = 'hidden';

    const workBtn = document.getElementById('work');
    workBtn.style.visibility = 'hidden';

    const provBtn = document.getElementById('prov');
    provBtn.style.visibility = 'hidden';

    const prodBtn = document.getElementById('prod');
    prodBtn.style.visibility = 'hidden';

    const cleanBtn = document.getElementById('clean');
    cleanBtn.style.visibility = 'hidden';

    const clientBtn = document.getElementById('client');
    clientBtn.style.visibility = 'hidden';

    const citaBtn = document.getElementById('cita');
    citaBtn.style.visibility = 'hidden';

    const apersBtn = document.getElementById('apers');
    apersBtn.style.visibility = 'hidden';

    const billBtn = document.getElementById('bill');
    billBtn.style.visibility = 'hidden';

    const repBtn = document.getElementById('rep');
    repBtn.style.visibility = 'hidden';

    const inicioBtn = document.getElementById('inicio');
    inicioBtn.style.visibility = 'hidden';*/
  }
  activarBotonesCliente(): void{
    // activar los botones del cliente
    const sucBtn = document.getElementById('client');
    sucBtn.style.visibility = 'visible';
    sucBtn.removeAttribute('disabled');

    const citaBtn = document.getElementById('cita');
    citaBtn.style.visibility = 'visible';
    citaBtn.removeAttribute('disabled');

    const inicioBtn = document.getElementById('inicio');
    inicioBtn.style.visibility = 'visible';
    inicioBtn.removeAttribute('disabled');
  }
  activarBotonesAdmin(): void{
    // activar los botones del administrador
    const sucBtn = document.getElementById('suc');
    sucBtn.style.visibility = 'visible';
    sucBtn.removeAttribute('disabled');

    const workBtn = document.getElementById('work');
    workBtn.style.visibility = 'visible';
    workBtn.removeAttribute('disabled');

    const provBtn = document.getElementById('prov');
    provBtn.style.visibility = 'visible';
    provBtn.removeAttribute('disabled');

    const prodBtn = document.getElementById('prod');
    prodBtn.style.visibility = 'visible';
    prodBtn.removeAttribute('disabled');

    const cleanBtn = document.getElementById('clean');
    cleanBtn.style.visibility = 'visible';
    cleanBtn.removeAttribute('disabled');

    const clientBtn = document.getElementById('client');
    clientBtn.style.visibility = 'visible';
    clientBtn.removeAttribute('disabled');

    const citaBtn = document.getElementById('cita');
    citaBtn.style.visibility = 'visible';
    citaBtn.removeAttribute('disabled');

    const apersBtn = document.getElementById('apers');
    apersBtn.style.visibility = 'visible';
    apersBtn.removeAttribute('disabled');

    const billBtn = document.getElementById('bill');
    billBtn.style.visibility = 'visible';
    billBtn.removeAttribute('disabled');

    const repBtn = document.getElementById('rep');
    repBtn.style.visibility = 'visible';
    repBtn.removeAttribute('disabled');

    const inicioBtn = document.getElementById('inicio');
    inicioBtn.style.visibility = 'visible';
    inicioBtn.removeAttribute('disabled');
  }
}
