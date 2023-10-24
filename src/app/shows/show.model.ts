export class Show {
    public name: string;
    public title: string;
    public id: number;
    public poster_path: string;
    public vote_average: number;
    public release_date: string;

    constructor(name: string, title: string, id: number, poster_path: string, vote_average: number,release_date: string) {
        this.name = name;
        this.title = title;
        this.id = id;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
        this.release_date = release_date;
    }
}