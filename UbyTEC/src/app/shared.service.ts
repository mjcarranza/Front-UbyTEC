import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // VARIABLES
  private shared = false;
  private userData = null;
  readonly APIUrl ="https://localhost:7065";

  constructor(private http: HttpClient) { }

  // PARA LA TABLA DE EMPLEADOS
  // metodo get
  getSucList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GSucursales/Obtener');
  }
  // metodo post
  async addSucursal(val:any){
    await fetch(this.APIUrl+'/GSucursales/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE EMPLEADOS
  // metodo get
  getEmpleadoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTrabajadores/Obtener');
  }
  // metodo post
  async addEmpleado(val:any){
    await fetch(this.APIUrl+'/GTrabajadores/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE CLIENTES
  // metodo get
  getClientesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener');
  }
  // metodo get por id
  getClienteId():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GClientes/Obtener-por-id');
  }
  // metodo post
  async addCliente(val:any){
    await fetch(this.APIUrl+'/GClientes/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE CITAS
  // metodo get
  getCitaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/RCitas/Obtener');
  }
  // metodo post
  async addCita(val:any){
    await fetch(this.APIUrl+'/RCitas/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE PROVEEDORES
  // metodo get
  getProviderList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GProveedores/Obtener');
  }
  // metodo post
  async addProvider(val:any){
    await fetch(this.APIUrl+'/GProveedores/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE INSUMOS/PRODUCTOS
  // metodo get
  getProductosList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GInsumos/Obtener');
  }
  // metodo post
  async addProducto(val:any){
    await fetch(this.APIUrl+'/GInsumos/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

  // PARA LA TABALA DE TIPOS DE LAVADO
  // metodo get
  getCleanTypesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GTipos_de_lavado/Obtener');
  }
  // metodo post
  async addCleanType(val:any){
    await fetch(this.APIUrl+'/GTipos_de_lavado/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }

    // PARA LA TABALA DE TIPOS DE LAVADO
  // metodo get
  getAsignaciones():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/GPersonal_lavados/Obtener');
  }
  // metodo post
  async addAsignacion(val:any){
    await fetch(this.APIUrl+'/api/GPersonal_lavados/Guardar',{
      method: 'POST',
      body: val,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
  }
}
