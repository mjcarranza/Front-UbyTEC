import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import { PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface PlanillaResponse{
  nombre: string;
  apellido1: string;
  apellido2: string;
  tipo_pago: string;
  tipo_lavado: string;
  cantidad_lavados: number;
  costo: number;
  monto_total: number;
}
type TableRowp = [string, string, string, string, string, number, number, number];

interface LavClienteResponse{
  nombre: string;
  apellido1: string;
  apellido2: string;
  lavado_realizado: string;
  cantidad: number;
}
type TableRowl = [string, string, string, string, number];

interface PuntosResponse{
  nombre: string;
  apellido1: string;
  apellido2: string;
  puntos: number;
}
type TableRowpts = [string, string, string, number];


@Component({
  selector: 'app-pdfreports',
  templateUrl: './pdfreports.component.html',
  styleUrls: ['./pdfreports.component.css'] 
})
export class PdfreportsComponent implements OnInit {

  constructor(private service:SharedService,private formBuilder:FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      id_cliente: '',
    });
  }
  clientList : any = []; 
  EmpleadoList : any = [];
  checkoutForm: any;

  ngOnInit(): void {
  }

  // Generacion de reporte de planilla
  reportePlanillaPDF(){
    this.service.getEmpleadoList().subscribe(data=>{
      //
      const pdf = new PdfMakeWrapper();
      pdf.add(this.crearTablaPlanilla(data));
      pdf.create().open();
    });
  }

  // Generacion de tipos de lavado por cliente
  tiposDeLavadoPDF(customerData:any){
    let wDatos = JSON.stringify(customerData);
    this.checkoutForm.reset();
    console.log(wDatos);
  }

  // Generacion de reporte de puntos
  puntosPDF(){
    this.service.getClientesList().subscribe(data=>{
      let datosTabla=[];
      // se recorre la lista de clientes para hacer un top 5 
      for (let j = 0; j < 5; j++) {
        datosTabla.push({nombre:data[j].nombre, apellido1:data[j].apellido1, apellido2:data[j].apellido2,puntos:Math.floor(Math.random() * 10000)}); 
      }
      const pdf = new PdfMakeWrapper();
      pdf.add(this.crearTablaPuntos(datosTabla));
      pdf.create().open();
    });
  }

  getInfoCliente(){
    this.service.getClientesList().subscribe(data=>{
      this.clientList = data;
      console.log(data);
    });
  }


  
  // crear la tabla de planilla
  crearTablaPlanilla(data : PlanillaResponse[]): ITable {
    return new Table([
      ['NOMBRE','APELLIDO','APELLIDO','TIPO DE PAGO','TIPO DE LAVADO','CANTIDAD DE LAVADOS','COSTO','MONTO TOTAL'],//cabecera de la tabla
      ['mario','carranza','castillo','semanal','premium', 3,12000,45000]
      //...this.extraerDataPlanilla(data)
    ])
    .layout({
      fillColor:(rowIndex:number,node:any, column:number)=>{
        return rowIndex === 0 ? '#CCCCCC' : '';
      }
    })
    .end;
  }
  // se obtienen los datos de cada una de la filas de la tabla a crear
  extraerDataPlanilla(data: PlanillaResponse[]): TableRowp[]{
    return data.map(row => [row.nombre, row.apellido1, row.apellido2, row.tipo_pago, row.tipo_lavado, row.cantidad_lavados, row.costo, row.monto_total]);
  }
  //-----------------------------------------------------------------------------------------------------------------






  // crear la tabla de lavados por cliente
  crearTablaLavCliente(data : LavClienteResponse[]): ITable {
    return new Table([
      ['NOMBRE','APELLIDO','APELLIDO','LAVADO REALIZADO','CANTIDAD'],//cabecera de la tabla
      ['mario','carranza','castillo','premium', 3]
      //...this.extraerDataPlanilla(data)
    ])
    .layout({
      fillColor:(rowIndex:number,node:any, column:number)=>{
        return rowIndex === 0 ? '#CCCCCC' : '';
      }
    })
    .end;
  }
  // se obtienen los datos de cada una de la filas de la tabla a crear
  extraerDataLavCliente(data: LavClienteResponse[]): TableRowl[]{
    return data.map(row => [row.nombre, row.apellido1, row.apellido2, row.lavado_realizado, row.cantidad]);
  }
  //-----------------------------------------------------------------------------------------------------------------






  // crear la tabla de puntos
  crearTablaPuntos(data : PuntosResponse[]): ITable {
    return new Table([
      ['NOMBRE','APELLIDO','APELLIDO','PUNTOS REDIMIDOS'],//cabecera de la tabla
      ...this.extraerDataPuntos(data)
    ])
    .layout({
      fillColor:(rowIndex:number,node:any, column:number)=>{
        return rowIndex === 0 ? '#CCCCCC' : '';
      }
    })
    .end;
  }
  // se obtienen los datos de cada una de la filas de la tabla a crear
  extraerDataPuntos(data: PuntosResponse[]): TableRowpts[]{
    return data.map(row => [row.nombre, row.apellido1, row.apellido2, row.puntos]);
  }


}
