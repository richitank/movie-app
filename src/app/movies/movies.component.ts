import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { Subscription, delay } from 'rxjs';
import { Movie } from './movie.model';
import { MoviesList } from './moviesList.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  movies: Movie [] = []
  subscription: Subscription | undefined;
  data: any;
  topRated: any;
  responsiveOptions: any;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: any;

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
    // this.subscription = this.movieService.getListOfNowPlayingMovies(1).
    // subscribe(
    //   (res: any) => {
    //     this.movies = res.Results;
    //   }
    //   )
    this.getListOfNowPlayingMovies(1);
  }

  getListOfNowPlayingMovies(page: number) {
    //Call the service
      //this.movieService.getListOfNowPlayingMovies(page).pipe(delay(2000)).subscribe((movies: Movie[]) => {
      this.movieService.getListOfNowPlayingMovies(page).subscribe((res: MoviesList) => {
      this.movies = res.results;
      console.log (this.movies)
      //this.topRated = res.results;
      //this.totalResults = res.total_results;
      this.loader = false;
  })
}}
