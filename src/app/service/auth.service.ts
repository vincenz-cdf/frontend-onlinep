import { Injectable } from '@angular/core';
import { AxiosService } from '../axios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private axiosService: AxiosService) {

  }

  login(input: any) {
    return this.axiosService.request(
      "POST",
      "/login",
      {
        email: input.email,
        password: input.password
      });
  }

  register(input: any) {
    return 		this.axiosService.request(
			"POST",
			"/register",
			{
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
        password: input.password
			});
  }
}
