import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShowService } from "src/app/services/show.service";
import { ShowDetails } from "./show-details.model";
@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.component.html',
    styleUrls: ['./show-details.component.scss']
})

export class ShowDetailsComponent implements OnInit {
    
    public id!: number;
    public show!: any;
    public video : any;
    relatedvideo: any;
    baseUrl = 'https://www.youtube.com/embed/';
    autoplay = '?rel=0;&autoplay=1&mute=0';
    backdrops: any;
    
    constructor ( private showService: ShowService, private route: ActivatedRoute, private router: Router  ) { }
    
    ngOnInit() {
        this.route.params.subscribe((params : Params) => {
            this.id = params['id'];
            this.getShowDetails(this.id);
            this.getShowVideos(this.id);
            this.getBackDropImages(this.id);
        })
    }

    getShowDetails(id: number){
        this.showService.getShowDetails(id).subscribe((res: any) => {
            this.show = res;
            console.log("this is show" + this.show)
        })
    }

    getShowVideos(id: number){
        this.showService.getShowVideos(id).subscribe((res: any) => {
            if(res.results.length) {
                this.video = res.results[0];
                this.relatedvideo = res.results;
                console.log(this.relatedvideo)
            }
        })
    }

    getBackDropImages(id: number){
        this.showService.getBackdropsImages(id).subscribe((res) => {
            this.backdrops = res.backdrops;
        })
    }
}
