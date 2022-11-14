import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gworkers',
  templateUrl: './gworkers.component.html',
  styleUrls: ['./gworkers.component.css']
})
export class GworkersComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      apellido1: '',
      apellido2: '',
      cedula: '',
      fecha_ingreso: '',
      fecha_nacimiento: '',
      edad: '',
      password: '',
      rol: '',
      tipo_pago: ''
    });
  }
  //Variables
  EmpleadoList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshEmplList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se cambia el tipo de dato de rol y tipo de pago
    customerData.rol = parseInt(customerData.rol);
    customerData.tipo_pago = parseInt(customerData.tipo_pago);
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "apellido1": customerData.apellido1,
      "apellido2": customerData.apellido2,
      "cedula" : customerData.cedula,
      "fecha_ingreso": customerData.fecha_ingreso,
      "fecha_nacimiento": customerData.fecha_nacimiento,
      "edad": customerData.edad,
      "password": customerData.password,
      "rol": customerData.rol,
      "tipo_pago": customerData.tipo_pago
    };
    // se envian los datos a la Base de Datos
    console.log(data)
    this.service.addEmpleado(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshEmplList();
  }

  // Se actualiza la tabla de trabajadores
  refreshEmplList(){
    // se hace get de empleados
    this.service.getEmpleadoList().subscribe(data=>{
      // se recorre la lista de trabajadores
      for (let i = 0; i < data.length; i++) {
        // se identifica el rol del trabajador
        if (data[i].rol === 1) {
          // se cambia el id por el nombre del gerente
          data[i].rol = "Lavador"
        }
        else{
          data[i].rol = "Pulidor"
        }
        // se identifica el tipo de pago del trabajador
        if (data[i].rol === 1) {
          // se cambia el id por el nombre del gerente
          data[i].tipo_pago = "Semanal"
        }
        else{
          data[i].tipo_pago = "Bisemanal"
        }
      }
      this.EmpleadoList = data;
    });
  }
}