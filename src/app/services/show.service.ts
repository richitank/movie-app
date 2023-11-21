import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class ShowService {
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

    getListOfTopRatedTvShows(page: number): Observable<any> {
        return this.http.get(`${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }

    getListOfNowPlayingTvShows(page: number): Observable<any> {
        return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
    searchTvShows(searchStr: string): Observable<any> {
        return this.http.get(`${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`);
    }

    getShowDetails(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}`);
    }

    getShowVideos(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}`);
    }

    getBackdropsImages(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
    }
}