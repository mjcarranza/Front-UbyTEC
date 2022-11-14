import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gcleantypes',
  templateUrl: './gcleantypes.component.html',
  styleUrls: ['./gcleantypes.component.css']
})
export class GcleantypesComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      costo: '',
      precio: '',
      duracion: '',
      productos_usados: '',
      cantidad_personal: '',
      puntuacion: '',
      puntuacion_redime: ''
    });
  }

  //Variables
  ClenTypesList : any = []; 
  productList:any = [];
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshCleanTypesList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    customerData.productos_usados = parseInt(customerData.productos_usados);
    // se ordena la informacion para enviarla
    let data = {
      "nombre_de_lavado": customerData.nombre,
      "costo": customerData.costo,
      "precio": customerData.precio,
      "duracion_estimada" : customerData.duracion,
      "productos_utilizados": customerData.productos_usados,
      "personal_requerido": customerData.cantidad_personal,
      "pOtorgados": customerData.puntuacion,
      "pRedimidos": customerData.puntuacion_redime
    };
    // se envian los datos a la Base de Datos
    this.service.addCleanType(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshCleanTypesList();
  }

  // Se actualiza la tabla de trabajadores
  refreshCleanTypesList(){
    // se hace get de sucursales
    this.service.getCleanTypesList().subscribe(data=>{
      // se hace get de trabajadores
      this.service.getProductosList().subscribe(dataProd=>{
        var cont = 1;
        // se recorre lista de sucursales una por una
        for (let i = 0; i < data.length; i++) {
          // se recorre la lista de trabajadores 
          for (let j = 0; j < dataProd.length; j++) {
            // buscando un id que coincida con el del gerente de la sucursal
            if (dataProd[j].insumos_id === data[i].productos_utilizados) {
              // se cambia el id por el nombre del gerente
              data[i].productos_utilizados = dataProd[j].nombre
            }
            // se obtiene la lista de trabajadores
            let already = false
            for (let index = 0; index < this.productList.length; index++) {
              if (this.productList[index].nombre == dataProd[j].nombre) {
                already = true;
              }
            }
            if (already === false) {
              this.productList.push({id:cont,nombre:dataProd[j].nombre});
              cont += 1;
            }
          }
        }
        
        this.ClenTypesList = data;
      });

    });
  }

}
