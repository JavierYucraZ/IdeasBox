import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/auth.component';
import { AllByCategoryComponent } from './Content/Pages/all-by-category/all-by-category.component';
import { CreateProyectComponent } from './Content/Pages/create-proyect/create-proyect.component';
import { DetailComponent } from './Content/Pages/detail/detail.component';
import { MainComponent } from './Content/Pages/main.component';
import { PrincipalComponent } from './Content/Pages/main/main.component';
import { MyProyectsComponent } from './Content/Pages/my-proyects/my-proyects.component';
import { AuthGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'Inicio', component: PrincipalComponent },
      { path: 'Detalle-Proyecto/:id', component: DetailComponent },
      { path: 'Crear-Proyecto', component: CreateProyectComponent },
      { path: 'Categoria/:category', component: AllByCategoryComponent },
      { path: 'Mis-Proyectos', component: MyProyectsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'Inicio' },
    ],
  },
  { path: 'Login', component: AuthComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
