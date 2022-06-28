import { AgregarUserComponent } from './user/agregar-user/agregar-user.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { ListarCatalogoComponent } from './catalogo/listar-catalogo/listar-catalogo.component';
import { ListarUserComponent } from './user/listar-user/listar-user.component';
import { MostrarCatalogoComponent } from './catalogo/mostrar-catalogo/mostrar-catalogo.component';

//route
const routes:Routes=[
    {path:'', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'agregar-user',component:AgregarUserComponent},
    {path:'listar-user',component:ListarUserComponent},
    {path:'listar-catalogo',component:ListarCatalogoComponent},
    {path:'mostrar-catalogo',component:MostrarCatalogoComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}