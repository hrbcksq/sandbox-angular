import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReactiveHighlight]'
})
export class ReactiveHighlightDirective implements OnInit {
  @HostBinding('style.background-color') backgroundColor = 'transparent';

  constructor(
    // private readonly ElementRef: ElementRef,
    // private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
