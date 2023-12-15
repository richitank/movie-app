import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieDetails } from '../details/movie-details/movie-details.model';
import { MovieService } from '../services/movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieVideo } from '../details/movie-details/movieVideo.model';
import { MovieImage } from '../details/movie-details/movieImages.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { delay } from 'rxjs';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  movies_data: any;
  shows_data: any;
  current_count = 0;

  nowPlaying: any;
  tvShows: any;
  responsiveOptions : any;
  loader = true;

  constructor ( private movieService: MovieService, private route: ActivatedRoute, private router: Router, private showService: ShowService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  
  
    ngOnInit() {
      this.getListOfNowPlayingMovies(1);
      this.getListOfNowPlayingShows(1);
      this.sliderTimer();
    }

    getListOfNowPlayingMovies(page: number) {
      this.movieService.getListOfNowPlayingMovies(page).pipe(delay(2000)).subscribe((res: any) => {
        this.movies_data = res.results;
        this.nowPlaying = res.results;
      });
    }

    getListOfNowPlayingShows(page: number) {
      this.showService.getListOfNowPlayingTvShows(page).pipe(delay(2000)).subscribe((res: any) => {
        this.shows_data = res.results;
        this.loader = false;
      });
    }
    sliderTimer(){
      setInterval(() => {
        this.current_count = ++this.current_count%this.movies_data.length;
      }, 5000)
    }

}
