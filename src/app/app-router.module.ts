import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

//route
const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'header',component:HeaderComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}