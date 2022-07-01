import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[valid]'
})
export class ValidDirective implements OnChanges {

  @Input("valid") name: string;
  @Input("validValue") value: number;
  @Input("validDescription") description: string;

  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) { 
    this.name = '';
    this.value = 0.0;
    this.description = ''
  }

  ngOnChanges(): void {
    if(this.name.trim() == '' || this.value <= 0 || this.description.trim() == '')
      this._renderer2.setAttribute(this._elementRef.nativeElement, 'disabled', 'true');
    else
      this._renderer2.removeAttribute(this._elementRef.nativeElement, 'disabled');
  }

}
