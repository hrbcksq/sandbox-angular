import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReactiveHighlight]'
})
export class ReactiveHighlightDirective implements OnInit {
  @HostBinding('style.background-color') backgroundColor;

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'lightgreen';
  // tslint:disable-next-line:no-input-rename
  @Input('appReactiveHighlight') alertColor = 'red';
  constructor(
    // private readonly ElementRef: ElementRef,
    // private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    // this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.renderer.setStyle(this.ElementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
