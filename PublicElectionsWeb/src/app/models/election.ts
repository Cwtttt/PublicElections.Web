export class Election{
    id:number
    name:string
    startDate:string
    endDate:string

    constructor(_id: number, _name: string, _startDate: Date, _endDate: Date){
        this.id = _id;
        this.name = _name;
        this.startDate = _startDate.toLocaleDateString();
        this.endDate = _endDate.toLocaleDateString();
    }
}