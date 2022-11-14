import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gproducts',
  templateUrl: './gproducts.component.html',
  styleUrls: ['./gproducts.component.css']
})
export class GproductsComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      marca: '',
      costo: '',
      proveedor: ''
    });
  }

  //Variables
  ProductsList : any = []; 
  proveedorList : any = [];
  checkoutForm: any;

  ngOnInit(): void {
    // Se hace un get de la tabla de sucursales para mostrarlas una vez que se carga la pagina
    this.refreshProductsList();
  }

  // funcion para hacer post a la base de datos
  onSubmit(customerData:any) {
    // se ordena la informacion para enviarla
    let data = {
      "nombre": customerData.nombre,
      "marca": customerData.marca,
      "costo": customerData.costo,
      "proveedor" : customerData.proveedor
    };
    // se envian los datos a la Base de Datos   
    this.service.addProducto(JSON.stringify(data));
    this.checkoutForm.reset();
    // se actualiza la tabla
    this.refreshProductsList();
  }

  // Se actualiza la tabla de trabajadores
  refreshProductsList(){
    // se hace get de sucursales
    this.service.getProductosList().subscribe(data=>{
      // se hace get de trabajadores
      this.service.getProviderList().subscribe(dataProv=>{
        var cont = 1;
        // se recorre lista de sucursales una por una
        for (let i = 0; i < data.length; i++) {
          // se recorre la lista de trabajadores 
          for (let j = 0; j < dataProv.length; j++) {
            // buscando un id que coincida con el del gerente de la sucursal
            if (dataProv[j].proveedores_id === data[i].proveedor) {
              // se cambia el id por el nombre del gerente
              data[i].proveedor = dataProv[j].nombre
            }
            // se obtiene la lista de trabajadores
            let already = false
            for (let index = 0; index < this.proveedorList.length; index++) {
              if (this.proveedorList[index].nombre == dataProv[j].nombre) {
                already = true;
              }
            }
            if (already === false) {
              this.proveedorList.push({id:cont,nombre:dataProv[j].nombre});
              cont += 1;
            }
          }
        }
        
        this.ProductsList = data;
      });

    });
  }
}
