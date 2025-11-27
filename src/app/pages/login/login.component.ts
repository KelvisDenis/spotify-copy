import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService:SpotifyService ) { }

  ngOnInit(): void {
    this.verifyTokenCallback();
  }

  verifyTokenCallback() {

    const token = this.spotifyService.getTokenUrlCallback();

    if(!!token){
      return this.spotifyService.defineAccessToken(token);
    }

  }

  clickLogin() {
    const getUri = this.spotifyService.getAuthUrl();

    window.location.href = getUri;

  }

}
