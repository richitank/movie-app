import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  data: any;
  constructor(private movieServie: MovieService) { }

  ngOnInit(): void {
    //Call the service
    this.movieServie.getListOfNowPlayingMovies(1).subscribe(
      (response) => {
        //handle the response
        this.data = response;
      },
      (error) => {
        console.error("API request error: ", error);
      }
    );
  }
}
