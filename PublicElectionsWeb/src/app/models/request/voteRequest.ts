export class voteRequest{
    electionId: number
    candidateId: number

    constructor(_electionId: number, _candidateId: number){
        this.electionId = _electionId;
        this.candidateId = _candidateId;
    }
}