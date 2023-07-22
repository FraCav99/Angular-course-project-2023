import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  selector: 'app-header'
})
export class HeaderComponent {

  @Output() selectedMenuItem = new EventEmitter<string>();
}
