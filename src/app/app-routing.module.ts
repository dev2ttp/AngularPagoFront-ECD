import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './guards/auth.guard';
import { PagoComponent } from './components/pago/pago.component';
import { PagoEfectivoComponent } from './components/pago-efectivo/pago-efectivo.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {RecargaTelefonoComponent} from './components/recarga-telefono/recarga-telefono.component';
import {DatosTelefonoComponent} from './components/datos-telefono/datos-telefono.component';
import {PagoTelefonoComponent} from './components/pago-telefono/pago-telefono.component';
import { FinpagoTelefonoComponent } from './components/finpago-telefono/finpago-telefono.component';
import { DatosEnvioComponent } from './components/datos-envio/datos-envio.component'
import { PagoEnvioComponent } from './components/pago-envio/pago-envio.component';
import { FinpagoEnvioComponent } from './components/finpago-envio/finpago-envio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent }, // canActivate: [AuthGuard]ç
  { path: 'pago', component: PagoComponent},
  { path: 'efectivo', component: PagoEfectivoComponent},
  { path: '', component: InicioComponent},
  { path: 'recargaTelefono', component:RecargaTelefonoComponent},
  { path: 'datosTelefono', component:DatosTelefonoComponent},
  { path: 'pagoTelefono', component:PagoTelefonoComponent},
  { path: 'finPagoTelefono', component:FinpagoTelefonoComponent},
  { path: 'datosEnvio', component:DatosEnvioComponent},
  { path: 'pagoEnvio', component:PagoEnvioComponent},
  { path: 'finPagoEnvio', component:FinpagoEnvioComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
