import { Component, OnInit, OnDestroy } from '@angular/core';
import { Show } from './show.model';
import { ShowService } from '../services/show.service';
import { Subscription } from 'rxjs';
import { ShowList } from './showList.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit, OnDestroy {
  shows: Show [] = [];
  totalResults: any;
  searchRes: any;
  pageNumber: number = 1;
  subscription: Subscription | any;
  searchTerm: string = '';
  loader = true;

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.getListOfTopRatedTvShows(this.pageNumber);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPageChange(event: PageEvent){
    this.loader = true,
    this.getListOfTopRatedTvShows(event.pageIndex+1);
  }

  getListOfTopRatedTvShows(page: number) {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.showService.getListOfTopRatedTvShows(page).subscribe((res: ShowList) => {
      this.shows = res.results;
      this.totalResults = res.total_results;
      this.pageNumber = page;
      this.loader = false;
    })
  }

  searchTvShows(searchStr: string) {
    this.showService.searchTvShows(searchStr).subscribe((res: ShowList) => {
      this.searchRes = res.results;
    })
  }

}
