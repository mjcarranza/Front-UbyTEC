import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-asignpersonal',
  templateUrl: './asignpersonal.component.html',
  styleUrls: ['./asignpersonal.component.css']
})
export class AsignpersonalComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      tipo_lavado: ''
    });
  }

  //Variables
  AssignationList : any = []; 
  LavadoList : any = []; 
  lavList: any =[];
  checkoutForm: any;


  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshAssignationList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se cambia el tipo de dato de rol y tipo de pago
    customerData.nombre = parseInt(customerData.nombre);
    customerData.tipo_lavado = parseInt(customerData.tipo_lavado);
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "tipo_lavado": customerData.tipo_lavado
    };
    // se envian los datos a la Base de Datos
    this.service.addAsignacion(JSON.stringify(data)); // cambiar esta ///////********* */
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshAssignationList();
  }

  // Se actualiza la tabla de trabajadores
  //// obtener con un query los nombres de los trabajadoress
  refreshAssignationList(){
    this.service.getAsignaciones().subscribe(data=>{ 
      // se hace get de tipos de lavado
      this.service.getEmpleadoList().subscribe(dataEmp=>{
        var cont = 1;
        // se recorre lista de sucursales una por una
        for (let i = 0; i < data.length; i++) {
          // se recorre la lista de trabajadores 
          for (let j = 0; j < dataEmp.length; j++) {
            // buscando un id que coincida con el del gerente de la sucursal
            if (dataEmp[j].trabajadores_id === data[i].trabajador) {
              // se cambia el id por el nombre del gerente
              data[i].trabajador = dataEmp[j].nombre +" "+dataEmp[j].apellido1+" "+dataEmp[j].apellido2;
            }
            // se obtiene la lista de trabajadores
            let already = false
            for (let index = 0; index < this.LavadoList.length; index++) {
              if (this.LavadoList[index].nombre == dataEmp[j].nombre+" "+dataEmp[j].apellido1+" "+dataEmp[j].apellido2) {
                already = true;
              }
            }
            if (already === false) {
              this.LavadoList.push({id:cont,nombre:dataEmp[j].nombre+" "+dataEmp[j].apellido1+" "+dataEmp[j].apellido2});
              cont += 1;
            }
          }
        }
      });
      // se hace get de sucursales
      this.service.getCleanTypesList().subscribe(dataClean=>{
        var cont = 1;
        // se recorre lista de sucursales una por una
        for (let i = 0; i < data.length; i++) {
          // se recorre la lista de trabajadores 
          for (let j = 0; j < dataClean.length; j++) {
            // buscando un id que coincida con el del gerente de la sucursal
            if (dataClean[j].lavados_id === data[i].lavado_solicitado) {
              // se cambia el id por el nombre del gerente
              data[i].lavado_solicitado = dataClean[j].nombre_de_lavado;
              //console.log(dataSuc[j].nombre);
            }
            // se obtiene la lista de trabajadores
            let already = false
            for (let index = 0; index < this.lavList.length; index++) {
              if (this.lavList[index].nombre == dataClean[j].nombre_de_lavado) {
                already = true;
              }
            }
            if (already === false) {
              this.lavList.push({id:cont,nombre:dataClean[j].nombre_de_lavado});
              cont += 1;
            }
          }
        }
      });
      this.AssignationList = data;
    });
  }
}
