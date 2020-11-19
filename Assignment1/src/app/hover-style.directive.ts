import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() changingStyle: string;

  constructor(private elm: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter(): void{
    if (this.changingStyle){
      if (this.changingStyle === 'textDecoration') {
        this.elm.nativeElement.style.textDecoration = 'underline';
    } else if (this.changingStyle === 'fontWeight') {
        this.elm.nativeElement.style.fontWeight = 'bold';
    }
  }
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    if (this.changingStyle) {
      if (this.changingStyle === 'textDecoration') {
        this.elm.nativeElement.style.textDecoration = 'none';
      }
      else if (this.changingStyle === 'fontWeight') {
        this.elm.nativeElement.style.fontWeight = 'initial';
      }
  }
  }







}
