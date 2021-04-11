export class Election{
    id:number
    name:string
    startDate:Date
    endDate:Date

    constructor(_id: number, _name: string, _startDate: Date, _endDate: Date){
        this.id = _id;
        this.name = _name;
        this.startDate = _startDate;
        this.endDate = _endDate;
    }
}