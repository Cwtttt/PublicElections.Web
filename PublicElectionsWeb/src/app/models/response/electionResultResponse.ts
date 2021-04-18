export class electionResultResponse{
    votesAmount: number
    candidatesResults: candidateResult[]
}

export class candidateResult{
    candidateName:string
    Percentages: number
}