import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from '../../../auth/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public navLinks: any[];
  activeLinkIndex = -1;

  constructor(private location: Location, private tokenService:TokenService, private router: Router) {
    this.navLinks = [
        {
            label: 'Rooms',
            link: './home/rooms',
            index: 0
        }, {
            label: 'Teams',
            link: './home/teams',
            index: 1
        }
    ];
    if(!this.location.path().split('=')[1] && !localStorage.getItem('JWT_TOKEN')) {
      this.router.navigate(['login']);
    }
    else {
      // Store the responce token after authentication
      this.tokenService.doLoginUser(this.location.path().split('=')[1]);
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      if(!this.activeLinkIndex) {
        this.activeLinkIndex = 0;
      }
  });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
