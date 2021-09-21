import { Component, OnInit } from '@angular/core';
import { config } from '../../../config';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  constructURL() {
    return config.apiUrl+"?client_id="+config.OAUTH_CLIENT+"&response_type=code&redirect_uri="+config.redirecturl+"&scope="+config.scope+"&scope="+config.state;
  }
}
