import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { InsertarComponent } from './paginas/insertar/insertar.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { ModificarComponent } from './paginas/modificar/modificar.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InsertarComponent,
    EliminarComponent,
    ListarComponent,
    ModificarComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
