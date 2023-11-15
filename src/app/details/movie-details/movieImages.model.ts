export class MovieImage{
    public backdrops: Image[];

    constructor(backdrops: Image[]) {
        this.backdrops = backdrops;
    }
}

class Image{
    public aspect_ratio: number;
    public height: number;
    public iso_639_1: number;
    public file_path: string;
    public vote_average: number;
    public vote_count: number;
    public width: number;

    constructor(aspect_ratio: number, height: number, iso_639_1: number, file_path: string, vote_average: number,
        vote_count: number, width: number) {
            this.aspect_ratio = aspect_ratio;
            this.height = height;
            this.iso_639_1 = iso_639_1;
            this.file_path = file_path;
            this.vote_average = vote_average;
            this.width = width;
            this.vote_count = vote_count;
        }
}