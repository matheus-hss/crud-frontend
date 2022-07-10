import { FormGuardService } from './../guards/form-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabsComponent } from './labs.component';
import { LabFormComponent } from './lab-form/lab-form.component';
import { LabDetailComponent } from './lab-detail/lab-detail.component';

const routes: Routes = [
  { path: '', component: LabsComponent, children: 
    [
      { path: 'register', component: LabFormComponent, canDeactivate: [FormGuardService] },
      { path: ':id', component: LabDetailComponent},
      { path: ':id/edit', component: LabFormComponent, canDeactivate: [FormGuardService] }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LabRoutingModule { }
