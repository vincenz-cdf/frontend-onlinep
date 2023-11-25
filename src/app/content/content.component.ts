import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';
import { ProfileService } from '../service/profile.service';
import { AuthService } from '../service/auth.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow: string = "welcome";
  isAuth = false;
  constructor(private axiosService: AxiosService, private profileService: ProfileService, private authService: AuthService, private notificationService: NotificationService) { }

  showComponent(componentToShow: string): void {
    this.componentToShow = componentToShow;
  }

  ngOnInit(): void {
		this.handleRedirect();
	}

	handleRedirect(): void {
		if (this.axiosService.getAuthToken() !== null) {
			this.componentToShow = "messages";
			this.isAuth = true;
		} else {
			this.logout();
		}
	}

	onLogin(input: any) {
		this.authService.login(input).then((response) => {
			this.axiosService.setAuthToken(response.data.token);
			this.profileService.setUserId(response.data);
			this.isAuth = true;
			this.componentToShow = "messages";
		}, (error) => {
			this.axiosService.setAuthToken(null);
			this.profileService.setUserId(null);
			this.isAuth = false;
			this.componentToShow = "welcome";
			this.notificationService.notifyError(error);
		});
		
	}

	onLoginEvent() {
		this.showComponent('login');
	}

	onRegister(input: any): void {

		this.authService.register(input).then((response) => {
			this.axiosService.setAuthToken(response.data.token);
			this.profileService.setUserId(response.data);
			this.isAuth = true;
			this.componentToShow = "messages";
		}, (error) => {
			this.axiosService.setAuthToken(null);
			this.profileService.setUserId(null);
			this.isAuth = false;
			this.componentToShow = "welcome";
			this.notificationService.notifyError(error);
		});

	}


  logout() {
		this.axiosService.setAuthToken(null);
		this.profileService.setUserId(null);
		this.isAuth = false;
		this.showComponent('welcome');
	}

}