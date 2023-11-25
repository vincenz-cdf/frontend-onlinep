import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
	@Output() loginEvent = new EventEmitter();
	@Output() logoutEvent = new EventEmitter();

  @Input() isAuth: any;
}
