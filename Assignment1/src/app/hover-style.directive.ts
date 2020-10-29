import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() tags?: string [];

  constructor(private elm: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.rend.setStyle(this.elm.nativeElement, 'text-decoration', 'underline');
    // this.tags.boldTags(this.tags);
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    this.rend.setStyle(this.elm.nativeElement, 'text-decoration', 'none');
    // this.tags.boldTags(null);
  }
  private boldTags(textFontWeight): void{
    this.elm.nativeElement.style.fontWeight = textFontWeight || 'bold';
  }





}
