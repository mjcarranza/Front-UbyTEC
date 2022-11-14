import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import { PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface FacturaResponse{
  nombre: string;
  tipo_lavado: string;
  precio_lavado: number;
  snacks: number;
  bebidas: number;
  iva: number;
  tipo_pago: string;
  monto_total: number;
}
type TableRow = [string, string, number, number, number, number, string, number];

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      id_cliente: '',
      cantidad_bebidas: '',
      cantidad_snacks: '',
      metodo_pago: ''
    });
  }

  //Variables
  BillingList : any = []; 
  checkoutForm: any;

  ngOnInit(): void {
  }

  onSubmit(customerData:any) {
    // HACER QUERYS CORRESPONDIENTES
    let datosTabla=[];
    this.service.getClientesList().subscribe(datoscliente=>{
      this.service.getCitaList().subscribe(datoscita=>{
        this.service.getCleanTypesList().subscribe(datoslav=>{
          var data = {
            "nombre":'',//
            "tipo_lavado": 'No hay lavados para este cliente',
            "precio_lavado": 0,
            "iva": 0.13,//
            "monto_total": 0,//
            "id_cliente": customerData.id_cliente,
            "cantidad_bebidas": customerData.cantidad_bebidas,//
            "cantidad_snacks": customerData.cantidad_snacks,//
            "metodo_pago" : customerData.metodo_pago
          };
          // para el nombre
          for (let i = 0; i < datoscliente.length; i++) {
            const element = datoscliente[i].cedula;
            if(element === customerData.id_cliente){
              data.nombre = datoscliente[i].nombre+" "+datoscliente[i].apellido1+" "+datoscliente[i].apellido2;
              // para la cita
              for (let j = 0; j < datoscita.length; j++) {
                const element2 = datoscita[j].cliente_cedula;
                if(element2 === datoscliente[i].cliente_id){
                  // para el tipo de lavado
                  for (let k = 0; k < datoslav.length; k++) {
                    const element3 = datoslav[k].lavados_id;
                    if(element3 === datoscita[j].lavado_solicitado){
                      data.tipo_lavado = datoslav[k].nombre_de_lavado;
                      data.precio_lavado = datoslav[k].precio;
                    }
                  }
                }
              }
            }
          }
          
          if (data.cantidad_bebidas > 1) {
            data.monto_total = data.monto_total + 1000; 
          }
          if (data.cantidad_snacks > 1) {
            data.monto_total = data.monto_total + 500; 
          }
          data.monto_total = data.monto_total + data.precio_lavado; 
          data.monto_total = Math.round(data.monto_total * data.iva);
          //
          datosTabla.push({nombre:data.nombre, tipo_lavado:data.tipo_lavado, precio_lavado:data.precio_lavado, iva:data.iva, monto_total:data.monto_total, bebidas:customerData.cantidad_bebidas, snacks:customerData.cantidad_snacks, tipo_pago:customerData.metodo_pago}); 
          console.log(datosTabla);
          const pdf = new PdfMakeWrapper();
          pdf.add(this.crearTabla(datosTabla));
          pdf.create().open();
        });
      });
    });
    
    //let datos = JSON.stringify(data);
    //this.service.addProvider(datos); // generar factura
    this.checkoutForm.reset();
  }

  // crear la tabla de planilla
  crearTabla(data : FacturaResponse[]): ITable {
    return new Table([
      ['NOMBRE','TIPO DE LAVADO','PRECIO DEL LAVADO','SNACKS','BEBIDAS','IVA','METODO PAGO','PRECIO TOTAL'],//cabecera de la tabla
      ...this.extraerDatos(data)
    ])
    .layout({
      fillColor:(rowIndex:number,node:any, column:number)=>{
        return rowIndex === 0 ? '#CCCCCC' : '';
      }
    })
    .end;
  }
  // se obtienen los datos de cada una de la filas de la tabla a crear
  extraerDatos(data: FacturaResponse[]): TableRow[]{
    return data.map(row => [row.nombre, row.tipo_lavado, row.precio_lavado, row.snacks, row.bebidas, row.iva, row.tipo_pago, row.monto_total]);
  }

}
