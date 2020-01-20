import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {AuthData} from "./auth-data.model";
import { Router} from "@angular/router";

@Injectable({ providedIn: "root"})

export class AuthService {
	constructor(private http: HttpClient,public router: Router) {

	}

	createUser(email: string, password: string) {
		console.log("eee");
		const authData: AuthData = {email: email, password: password};
		this.http.post("http://localhost:3000/api/user/sign-up",authData)
		.subscribe(response => {
			console.log(response);
		});
	}

	login(email: string, password: string) {
		console.log("sssws");
		const authData: AuthData = {email: email, password: password};
		this.http.post("http://localhost:3000/api/user/login",authData)
		.subscribe(response => {
			//console.log(response.token);
			// if(response.token) this.router.navigateByUrl('/');
			// else this.router.navigateByUrl('/login');
		});
	}
}