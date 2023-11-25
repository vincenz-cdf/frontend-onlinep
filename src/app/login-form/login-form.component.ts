import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

	active: string = "login";
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  password: string = "";

	onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void {
    this.onSubmitLoginEvent.emit({"email": this.email, "password": this.password});
  }

  onSubmitRegister(): void {
    this.onSubmitRegisterEvent.emit({"email": this.email, "firstName": this.firstName, "lastName": this.lastName, "password": this.password});
  }

}
