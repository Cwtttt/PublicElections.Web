export class NewCandidateRequest{
    name: string
    electionId: number
    
    constructor(_name: string, _electionId: number){
        this.name = _name;
        this.electionId = _electionId;
    }
}