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
        //There is something going on with now_playing movies today
        return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }

    searchMovies(searchStr: string): Observable<any> {
        return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
    }

    getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
    }
}