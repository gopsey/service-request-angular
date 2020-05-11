import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from "../../services/login/login.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn: Observable<boolean>;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn;
  }

  navigateRequest(id: any) {
    if (id === 'viewRequest') {
      this.router.navigate(['/requestList']);
    } else if (id === 'logoutUser') {
      this.loginService.isLoggedIn.next(false);
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/createRequest']);
    }
  }

}
