import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class MovieService {

    apiKey: string;
    baseUrl: string;
    region: string;
    language: string;
    bearerToken: string;

    constructor(private http: HttpClient) {
     this.apiKey ="84433f795a1b0c059c957ae34ac486ed";
     this.baseUrl = 'https://api.themoviedb.org/3/';
     this.bearerToken = ""
     this.region = "US";
     this.language = "en-US";
    }    

    getListOfNowPlayingMovies(page: number): Observable<any> {
        const headers = new HttpHeaders ({
            'Authorization': `Bearer ${this.bearerToken}`,
            'X-API-Key': this.apiKey,
            'Content-Type': 'application/json', 
        });   
        const options = {headers: headers};
        //return this.http.get(`${this.baseUrl}movie/now_playing?language=${this.language}&page=${page}`, options);
        return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
}