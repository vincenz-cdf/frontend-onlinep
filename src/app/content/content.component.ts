import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "welcome";
  isAuth = false;
  goToLoginPage = false;
  constructor(private axiosService: AxiosService, private profileService: ProfileService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  ngOnInit(): void {
		this.handleRedirect();
		if(this.isAuth) {
			this.goToLoginPage = false;
		}
	}

	handleRedirect(): void {
		if (this.axiosService.getAuthToken() !== null) {
			this.componentToShow = "messages";
			this.isAuth = true;
		} else {
			this.logout();
		}
	}

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        email: input.email,
        password: input.password
      }).then(
        response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "messages";
        }).catch(
          error => {
            this.axiosService.setAuthToken(null);
            this.componentToShow = "welcome";
          }
        );

  }

  onRegister(input: any): void {
    this.axiosService.request(
      "POST",
      "/register",
      {
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        password: input.password
      }).then(
        response => {
          this.axiosService.setAuthToken(response.data.token);
          this.componentToShow = "messages";
        }).catch(
          error => {
            this.axiosService.setAuthToken(null);
            this.componentToShow = "welcome";
          }
        );
  }

  logout() {
		this.axiosService.setAuthToken(null);
		this.profileService.setUserId(null);
		this.isAuth = false;
		this.showComponent('welcome');
	}

}