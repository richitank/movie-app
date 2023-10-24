import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movies.service";
import { Subscription, delay } from 'rxjs';
import { MovieDetails } from "./movie-details.model";
import { PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit{
    public id!: number;
    movie!: MovieDetails;
    //router!: ActivatedRoute;

    constructor (private movieService: MovieService, private route: ActivatedRoute, private router: Router) {}


    ngOnInit(): void {
        this.route.params.subscribe((params : Params) => {
            this.id = params['id'];
            console.log("We are here")
            this.getMovieDetails(this.id);
        })
    }
      
    getMovieDetails(id: number){
        this.movieService.getMovieDetails(id).subscribe((result: MovieDetails) => {
            this.movie = result;
            console.log("This is called for movie datils id: "+ id);
        })
    }

}