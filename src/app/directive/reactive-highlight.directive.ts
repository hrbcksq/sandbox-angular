import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReactiveHighlight]'
})
export class ReactiveHighlightDirective implements OnInit {

  constructor(
    private readonly ElementRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'transparent');
  }
}
