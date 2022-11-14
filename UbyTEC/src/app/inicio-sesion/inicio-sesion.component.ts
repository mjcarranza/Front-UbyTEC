import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder, private auth:AuthenticationService, private app:AppComponent) {
    this.checkoutForm = this.formBuilder.group({
      usuario: '',
      password: ''
    });
   }
   checkoutForm: any;
   isLogued = false;
   isAdmin = false;
   isClient = false;
   public arrAuth:any = [];

  ngOnInit(): void {
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) { // llega lo del formulario
    // se ordena la informacion para enviarla
    
    let datos = {
      "usuario": customerData.usuario,
      "password": customerData.password
    };
    // se obtienen las tablas de clientes y trabajadores para comaprar con el usuario y contrasena
    this.service.getClientesList().subscribe(datac=>{
      this.service.getEmpleadoList().subscribe(datae=>{
        for (let j = 0; j < datac.length; j++) {
          // buscando un id que coincida con el del gerente de la sucursal
          if (datac[j].usuario === datos.usuario && datac[j].password === datos.password) {
            this.isClient = true;
            console.log("cliente");
            break;
          }
        }
        for (let j = 0; j < datae.length; j++) {
          // buscando un id que coincida con el del gerente de la sucursal
          if (datae[j].nombre === datos.usuario && datae[j].password === datos.password) {
            this.isAdmin = true;
            console.log("admin");
            break;
          }
        }
        this.validar();
      });
      
    });
    
    this.checkoutForm.reset();
  }
  validar(){
    if (this.isAdmin === true) {
      console.log("administra");
      this.arrAuth.push(this.isAdmin);
      this.arrAuth.push(this.isClient);
      this.auth.dispAuth.emit({ data : this.arrAuth });
      this.app.activarBotonesAdmin();
      this.isAdmin =false; // hacerlos falsos cuando se cierre sesion
      // habilitar todo lo de admin
      // redireccionar a sucursal
    }
    else if (this.isClient === true ) {
      console.log("clienteeee");
      this.arrAuth.push(this.isAdmin);
      this.arrAuth.push(this.isClient);
      this.auth.dispAuth.emit({ data : this.arrAuth });
      this.app.activarBotonesCliente();
      this.isClient = false; // hacerlos falsos cuando se cierre sesion
      // habilitr todo lo de client
      // redireccionar a gestion de clientes
    }
    else{
      alert("Usuario y/o contraseña incorrectos");
    }
  }
}
