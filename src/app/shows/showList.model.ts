import { Show } from "./show.model";

export class ShowList {
    results : Show []=[];
    page: number;
    total_pages: number;
    total_results: number;

    constructor (page: number, results: Show[], total_pages: number, total_results: number) {
        this.results = results;
        this.page = page;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }
}