import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movies.service";
import { Subscription, delay } from 'rxjs';
import { MovieDetails } from "./movie-details.model";
import { PageEvent } from "@angular/material/paginator";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MovieVideo } from "./movieVideo.model";
import { MovieImage } from "./movieImages.model";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit{
    public id!: number;
    movie!: MovieDetails;
    public video : any;
    relatedvideo: any;
    baseUrl = 'https://www.youtube.com/embed/';
    autoplay = '?rel=0;&autoplay=1&mute=0';
    backdrops: any;
    //router!: ActivatedRoute;

    constructor (private movieService: MovieService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {}


    ngOnInit() {
        this.route.params.subscribe((params : Params) => {
            this.id = params['id'];
            this.getMovieDetails(this.id);
            this.getMovieVideos(this.id);
            this.getBackropsImages(this.id);
        })
    }
    
    getMovieDetails(id: number){
        this.movieService.getMovieDetails(id).subscribe((result: MovieDetails) => {
            this.movie = result;
        })
    }

    getMovieVideos(id: number){
        this.movieService.getMovieVideos(id).subscribe((res: MovieVideo) => {
            if (res.results.length) {
                this.video = res.results[0];
                this.relatedvideo = res.results;
            }
        })
    }

    getBackropsImages(id: number) {
        this.movieService.getBackdropsImages(id).subscribe((res: MovieImage) => {
          this.backdrops = res.backdrops;
        });
    }

    // openDialogMovie(video): void {
    //     this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay); 
    //     this.dialog.open(AppMovieDialogComponent, {
    //       height: '600px',
    //       width: '900px',
    //       data: { video: this.video}
    //     });
    //   }

    getYouTubeEmbedUrl(videoId: string): SafeResourceUrl {
        console.log("video id:" + videoId)
        var url = `https://www.youtube.com/embed/${videoId}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    
      openYouTube(videoId: string): void {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
      }

      getVideoThumbnailUrl(videoId: string): string {
        return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      }

      playVideo(thumbnail: HTMLImageElement, videoIframe: HTMLIFrameElement): void {
        thumbnail.style.display = 'none'; // Hide the thumbnail
        videoIframe.style.display = 'block'; // Show the video iframe
      }
}