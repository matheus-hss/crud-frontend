import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Lab } from 'src/app/model/lab';
import { LabService } from './../labs.service';
import { IForm } from './../../model/iform';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit, IForm {
  lab = new Lab()
  formChanged: boolean = false

  constructor(
    private _activatedRoute: ActivatedRoute,
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
          }
        })
      },
      error: (msg: any) => console.log(msg)
    })
  }

  onSubmit(form: any) {
    if(this.lab.id == ''){ console.log('entrou no if post')
      this._labService.save(this.lab).subscribe({
        next: (data:any) => {
          window.alert('Added')
          form.form.reset()
          this.formChanged = false
        },
        error: (msg:any) => console.log(msg)
      })
    }
    else { console.log('entrou no else put')
      this._labService.update(this.lab).subscribe({
        next: (data:any) => {
          window.alert('Updated')
          this.formChanged = false
        },
        error: (msg:any) => console.log(msg)
      })
    }
  }

  clear(labForm: any) { labForm.form.reset() }

  searchByZipCode(event: any, form: any) {
    var cep = event.value.replace(/\D/g, '')

    if (cep != '') {
      var validacep = /^[0-9]{8}$/

      if (validacep.test(cep)) {
        this._labService.searchByZipCode(cep).subscribe({
          next: (data:any) => {
            form.form.patchValue({
              address: {
                street: data['logradouro'] ? data['logradouro'] : 'Principal',
                neighborhood: data['bairro'] ? data['bairro'] : 'Centro',
                city: data['localidade'],
                state: data['uf']
              }
            })
          },
          error: (msg:any) => console.log(msg)
        })
      }
    }
  }

  onInput() { this.formChanged = true }

  changeRoute(): boolean {
    if(this.formChanged) return window.confirm("Are you sure? Data won't be saved.")

    return true
  }

}
