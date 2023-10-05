import { Movie } from "./movie.model";

export class MoviesList {
    results : Movie []=[];
    dates: any;
    page: number;
    total_pages: number;
    total_results: number;

    constructor (dates: any, page: number, results: Movie[], total_pages: number, total_results: number) {
        this.dates = dates;
        this.results = results;
        this.page = page;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }



}