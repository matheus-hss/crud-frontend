import { Component, OnInit } from '@angular/core';

import { Lab } from '../model/lab';
import { LabService } from './labs.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {
  list = new Array<Lab>()

  constructor(private _labService: LabService) { }

  ngOnInit(): void {
    this._labService.findAll().subscribe({
      next: (data:any) => this.list = data['content'],
      error: (msg:any) => console.log(msg)
    })
  }

  findByName(event: any) {
    this._labService.findAll().subscribe({
      next: (data:any) => {
        this.list = data['content'].filter((l: Lab) => l.labName.trim().toUpperCase()
          .startsWith(event.value.trim().toUpperCase()))
      },
      error: (msg:any) => console.log(msg)
    })
  }

}
