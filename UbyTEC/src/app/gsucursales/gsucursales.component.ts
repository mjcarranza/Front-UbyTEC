import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gsucursales',
  templateUrl: './gsucursales.component.html',
  styleUrls: ['./gsucursales.component.css']
})
export class GsucursalesComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      prov: '',
      cant: '',
      dist: '',
      tel: '',
      idGer: '',
      fAbre: '',
      fInicio: ''
    });
  }
  //Variables
  SucursalList : any = []; 
  GerenteList : any = [];
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshSucList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "provincia": customerData.prov, // string
      "canton": customerData.cant, // string
      "distrito" : customerData.dist, //string
      "telefono": customerData.tel, // entero
      "fecha_apertura": customerData.fAbre, // date
      "gerente_sucursal": customerData.idGer, // entero 
      "fecha_inicio_gerente": customerData.fInicio // date
    };
    // se envian los datos a la Base de Datos
    this.service.addSucursal(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshSucList();
  }

  // Se actualiza la tabla de trabajadores
  refreshSucList(){
    // se hace get de sucursales
    this.service.getSucList().subscribe(data=>{
      // se hace get de trabajadores
      this.service.getEmpleadoList().subscribe(dataE=>{
        var cont = 1;
        // se recorre lista de sucursales una por una
        for (let i = 0; i < data.length; i++) {
          // se recorre la lista de trabajadores 
          for (let j = 0; j < dataE.length; j++) {
            // buscando un id que coincida con el del gerente de la sucursal
            if (dataE[j].trabajadores_id === data[i].gerente_Sucursal) {
              // se cambia el id por el nombre del gerente
              data[i].gerente_Sucursal = dataE[j].nombre;
            }
            // se obtiene la lista de trabajadores
            let already = false
            for (let index = 0; index < this.GerenteList.length; index++) {
              if (this.GerenteList[index].nombre == dataE[j].nombre+" "+dataE[j].apellido1+" "+dataE[j].apellido2) {
                already = true;
              }
            }
            if (already === false) {
              this.GerenteList.push({id:cont,nombre:dataE[j].nombre+" "+dataE[j].apellido1+" "+dataE[j].apellido2});
              cont += 1;
            }
          }
        }
      });
      this.SucursalList = data;
    });
  }

}
