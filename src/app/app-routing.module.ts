import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products.module')
    .then(m => m.ProductsModule), canActivate: [AuthGuardService], canLoad: [AuthGuardService] },
  { path: 'labs', loadChildren: () => import('./labs/labs.module')
    .then(m => m.LabModule), canActivate: [AuthGuardService], canLoad: [AuthGuardService] },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
