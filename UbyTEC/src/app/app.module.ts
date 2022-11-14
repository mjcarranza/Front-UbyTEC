import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { SharedService } from './shared.service';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { AdminComercioAfiliadoComponent } from './admin-comercio-afiliado/admin-comercio-afiliado.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AsignacionComponent } from './pedidos/asignacion/asignacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaComponent } from './carrito/lista/lista.component';
import { DeleteEditComponent } from './carrito/delete-edit/delete-edit.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { TiposComercioComponent } from './tipos-comercio/tipos-comercio.component';
import { CreaComComponent } from './tipos-comercio/crea-com/crea-com.component';
import { EliminaComComponent } from './tipos-comercio/elimina-com/elimina-com.component';
import { ActualizaComComponent } from './tipos-comercio/actualiza-com/actualiza-com.component';
import { TablaComComponent } from './tipos-comercio/tabla-com/tabla-com.component';
import { CreaRepComponent } from './repartidores/crea-rep/crea-rep.component';
import { EliminaRepComponent } from './repartidores/elimina-rep/elimina-rep.component';
import { UpdateRepComponent } from './repartidores/update-rep/update-rep.component';
import { TablaRepComponent } from './repartidores/tabla-rep/tabla-rep.component';
import { CreaProdComponent } from './productos/crea-prod/crea-prod.component';
import { EliminaProdComponent } from './productos/elimina-prod/elimina-prod.component';
import { UpdateProdComponent } from './productos/update-prod/update-prod.component';
import { TablaProdComponent } from './productos/tabla-prod/tabla-prod.component';
import { TablaPedidosComponent } from './pedidos/tabla-pedidos/tabla-pedidos.component';
import { CreaEmplComponent } from './empleados/crea-empl/crea-empl.component';
import { EliminaEmplComponent } from './empleados/elimina-empl/elimina-empl.component';
import { UpdateEmplComponent } from './empleados/update-empl/update-empl.component';
import { TablaEmplComponent } from './empleados/tabla-empl/tabla-empl.component';
import { CreaClienteComponent } from './clientes/crea-cliente/crea-cliente.component';
import { EliminaClienteComponent } from './clientes/elimina-cliente/elimina-cliente.component';
import { UpdateClienteComponent } from './clientes/update-cliente/update-cliente.component';
import { TablaClienteComponent } from './clientes/tabla-cliente/tabla-cliente.component';
import { CreaAfiliadoComponent } from './afiliados/crea-afiliado/crea-afiliado.component';
import { EliminaAfiliadoComponent } from './afiliados/elimina-afiliado/elimina-afiliado.component';
import { ActualizaAfiliadoComponent } from './afiliados/actualiza-afiliado/actualiza-afiliado.component';
import { UpdateAfiliadoComponent } from './afiliados/update-afiliado/update-afiliado.component';
import { TablaAfiliadoComponent } from './afiliados/tabla-afiliado/tabla-afiliado.component';
import { CreaAdmcoComponent } from './admin-comercio-afiliado/crea-admco/crea-admco.component';
import { EliminaAdmcoComponent } from './admin-comercio-afiliado/elimina-admco/elimina-admco.component';
import { UpdateAdmcoComponent } from './admin-comercio-afiliado/update-admco/update-admco.component';
import { TablaAdmcoComponent } from './admin-comercio-afiliado/tabla-admco/tabla-admco.component';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent,InicioSesionComponent,EmpleadosComponent,AfiliadosComponent,
    AdminComercioAfiliadoComponent,RepartidoresComponent,ProductosComponent,PedidosComponent,
    AsignacionComponent,ClientesComponent,CarritoComponent,ListaComponent,DeleteEditComponent,
    MisPedidosComponent,TiposComercioComponent,CreaComComponent,EliminaComComponent,ActualizaComComponent,
    TablaComComponent,CreaRepComponent,EliminaRepComponent,UpdateRepComponent,TablaRepComponent,
    CreaProdComponent,EliminaProdComponent,UpdateProdComponent,TablaProdComponent,TablaPedidosComponent,
    CreaEmplComponent,EliminaEmplComponent,UpdateEmplComponent,TablaEmplComponent,CreaClienteComponent,
    EliminaClienteComponent,UpdateClienteComponent,TablaClienteComponent,CreaAfiliadoComponent,
    EliminaAfiliadoComponent,ActualizaAfiliadoComponent,UpdateAfiliadoComponent,TablaAfiliadoComponent,
    CreaAdmcoComponent,EliminaAdmcoComponent,UpdateAdmcoComponent,TablaAdmcoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      /**rutas para mostrar los diferentes componentes de la aplicacion */
      {path: 'addEmpleado', component: CreaEmplComponent},
      {path: 'elimEmpleado', component: EliminaEmplComponent},/////
      {path: 'actEmpleado', component: UpdateEmplComponent},
      {path: 'tablaEmpleado', component: TablaEmplComponent},

      {path: 'addAdministrador', component: CreaAdmcoComponent},
      {path: 'elimAdministrador', component: EliminaAdmcoComponent},/////
      {path: 'actAdministrador', component: UpdateAdmcoComponent},
      {path: 'tablaAdministrador', component: TablaAdmcoComponent},

      {path: 'addAfi', component: CreaAfiliadoComponent},
      {path: 'elimAfi', component: EliminaAfiliadoComponent},/////
      {path: 'actAfi', component: UpdateAfiliadoComponent},
      {path: 'tablaAfi', component: TablaAfiliadoComponent},

      {path: 'addCliente', component: CreaClienteComponent},
      {path: 'elimCliente', component: EliminaClienteComponent},///////////
      {path: 'actCliente', component: UpdateClienteComponent},
      {path: 'tablaCliente', component: TablaClienteComponent},

      {path: 'addProd', component: CreaProdComponent},
      {path: 'elimProd', component: EliminaProdComponent},//////
      {path: 'actProd', component: UpdateProdComponent},
      {path: 'tablaProd', component: TablaProdComponent},

      {path: 'addRep', component: CreaRepComponent},
      {path: 'elimRep', component: EliminaRepComponent},////////
      {path: 'actRep', component: UpdateRepComponent},
      {path: 'tablaRep', component: TablaRepComponent},

      {path: 'addCom', component: CreaComComponent},
      {path: 'elimCom', component: EliminaComComponent},///////
      {path: 'actCom', component: ActualizaComComponent},
      {path: 'tablaCom', component: TablaComComponent},

      {path: 'pedidos', component: PedidosComponent},
      {path: 'misPedidos', component: MisPedidosComponent},
      {path: 'carrito', component: CarritoComponent},
      {path: 'inicio', component: InicioSesionComponent},

      /**rutas para redireccion a la pagina principal o a la pagina 404 de error */
      {path: '', redirectTo: '/empleados', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [SharedService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
