import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { Subscription, delay } from 'rxjs';
import { Movie } from './movie.model';
import { MoviesList } from './moviesList.model';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  movies: Movie [] = []
  subscription: Subscription | any;
  data: any;
  topRated: any;
  responsiveOptions: any;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  pageNumber: number = 1;
  searchTerm: string = '';

  constructor(private movieService: MovieService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedOption.subscribe((selectedOption)=> {
      this.loadMovies(selectedOption);
    })
    //this.getListOfNowPlayingMovies(this.pageNumber);
  }

  loadMovies(selectedOption: string) {
    if(selectedOption === 'topRated'){
      this.getListOfTopRatedMovies(this.pageNumber);
    }
    else if(selectedOption === 'latest'){
      this.getListOfNowPlayingMovies(this.pageNumber);
    }
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    this.loader = true,
    this.getListOfNowPlayingMovies(event.pageIndex+1);
  }

  getListOfNowPlayingMovies(page: number) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    //Call the service
      this.subscription = this.movieService.getListOfNowPlayingMovies(page).subscribe((res: MoviesList) => {
        this.movies = res.results;
        this.totalResults = res.total_results;
        this.pageNumber = page;
        console.log('current page number: ' + (this.pageNumber));
        this.loader = false;
      }) 
  }

  getListOfTopRatedMovies(page: number){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    //Call the service
      this.subscription = this.movieService.getListOfTopRatedMovies(page).subscribe((res: MoviesList) => {
        this.movies = res.results;
        this.totalResults = res.total_results;
        this.pageNumber = page;
        console.log('current page number: ' + (this.pageNumber));
        this.loader = false;
      }) 
  }

  searchMovies(searchStr: string) {
    this.movieService.searchMovies(searchStr).subscribe((res: MoviesList) => {
      this.searchRes = res.results;
      console.log(this.searchRes)
    })
  }

}
