export class Candidate{
    id:number
    name:string
    electionId:number   
    selected:boolean

    constructor(id: number, name: string, electionId: number){
        this.id = id;
        this.name = name;
        this.electionId = electionId;
        this.selected = false;
    }
}
