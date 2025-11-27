import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi : Spotify.SpotifyWebApiJs;

  constructor() { 
    this.spotifyApi = new Spotify();
  }

  getAuthUrl(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUri = `redirect_uri=${encodeURIComponent(SpotifyConfiguration.redirectUrl)}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=code&show_dialog=true`;

    return authEndpoint + clientId + redirectUri + scopes + responseType;

  }

  getTokenUrlCallback() {

    if (!window.location.hash) {
      return "";
    }

    const hash = window.location.hash.substring(1).split("&");

    const params = hash[0].split("=")[1];

    return params;

  }

  defineAccessToken(token: string){
    
    this.spotifyApi.setAccessToken(token);

    localStorage.setItem("token", token);

  }

}
