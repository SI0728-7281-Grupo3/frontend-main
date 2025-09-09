export class Portfolio{
    public name: string;
    public description: string;
    public businessId: number;
    public contractorId: number;
    public startDate: any;
    public finishDate: any;
    public image: string;

    //autocomplete constructor
    constructor(name:string, description:string, businessId: number, contractorId: number, startDate: any, finishDate: any, image: string){
        this.name = name;
        this.description = description;
        this.businessId = businessId;
        this.contractorId = contractorId;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.image = image;
    }

}
