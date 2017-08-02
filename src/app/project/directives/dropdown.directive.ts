import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass = false;

  constructor() { }

  @HostListener('click') onClick(event) {
    this.openClass = !this.openClass;
  }
}
