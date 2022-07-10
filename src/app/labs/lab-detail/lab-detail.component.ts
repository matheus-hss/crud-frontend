import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Lab } from 'src/app/model/lab';
import { LabService } from './../labs.service';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.css']
})
export class LabDetailComponent implements OnInit {
  lab: Lab = new Lab()

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _labService: LabService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (param:any) => {
        this._labService.findAll().subscribe({
          next: (data:any) => {
            let list: Array<Lab> = data['content']
            for(let lab of list)
              if(lab.id == param['id']) 
                this.lab = lab
          },
          error: (msg:any) => console.log(msg)
        })
      },
      error: (msg:any) => console.log(msg)
    })
  }

  edit() { this._router.navigate(['labs', this.lab.id, 'edit']) }

  remove() {
    this._labService.delete(this.lab).subscribe({
      next: (data:any) => window.alert('Deleted'),
      error: (msg:any) => window.alert('This lab has binding products to it. First, delete the products before removing it.')
    })
  }

}
