import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-regcitas',
  templateUrl: './regcitas.component.html',
  styleUrls: ['./regcitas.component.css']
})
export class RegcitasComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      cliente_cedula: '',
      placa: '',
      sucursal: '',
      tipo_lavado: '',
      hora: ''
    });
  }

  //Variables
  CitaList : any = []; 
  sucList : any = [];
  lavList : any = [];
  clientList : any = [];
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshCitaList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se cambia el tipo de dato
    customerData.sucursal = parseInt(customerData.sucursal);
    customerData.tipo_lavado = parseInt(customerData.tipo_lavado);
    // se ordena la informacion para enviarla
    let data = {
      "cliente_cedula": customerData.cliente_cedula,
      "placa": customerData.placa,
      "sucursal": customerData.sucursal,
      "lavado_solicitado" : customerData.tipo_lavado,
      //"hora" : customerData.hora
    };
    // se envian los datos a la Base de Datos
    this.service.addCita(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshCitaList();
  }

  // Se actualiza la tabla de trabajadores
  refreshCitaList(){
    // se hace get de listas
    this.service.getCitaList().subscribe(data=>{
      // se hace get de clientes
      this.service.getClientesList().subscribe(dataCli=>{
        var cont = 1;
        for (let index = 0; index < dataCli.length; index++) {
          this.clientList.push({id:cont,nombre:dataCli[index].nombre+" "+dataCli[index].apellido1+" "+dataCli[index].apellido2});
          cont += 1;
        }
      });
      // se hace get de sucursales
      this.service.getSucList().subscribe(dataSuc=>{
        var cont = 1;
        for (let index = 0; index < dataSuc.length; index++) {
          this.sucList.push({id:cont,nombre:dataSuc[index].nombre});
          cont += 1;
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
      this.CitaList = data;
    });



  }
  
}
