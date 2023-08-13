import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdDownDirective {

  private wasInside: boolean = false;

  @HostBinding('class.show')
  isOpen: boolean = false;

  @HostListener('click')
  onClick(): void {
    this.isOpen = !this.isOpen;
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout(): void {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
