import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { LabRoutingModule } from './labs-routing.module';
import { LabsComponent } from './labs.component';
import { LabDetailComponent } from './lab-detail/lab-detail.component';
import { LabFormComponent } from './lab-form/lab-form.component';
import { LabService } from './labs.service';

@NgModule({
  declarations: [
    LabsComponent,
    LabDetailComponent,
    LabFormComponent
  ],
  imports: [
    LabRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LabService]
})
export class LabModule { }
