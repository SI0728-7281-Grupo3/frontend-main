export class Review{
    contractorId: number;
    projectId: number;
    comment: string;
    duration: string;
    image: string;
    rating: number;

    constructor(contractorId: number, projectId: number, comment: string, duration: string, image: string, rating: number) {
        this.contractorId = contractorId;
        this.projectId = projectId;
        this.comment = comment;
        this.duration = duration;
        this.image = image;
        this.rating = rating;
    }
}