export class electionResultResponse{
    votesAmount: number
    votesAuthorized: number
    attendance:number
    candidatesResults: candidateResult[]
}

export class candidateResult{
    candidateName:string
    percentages: number
    votesCount: number
}