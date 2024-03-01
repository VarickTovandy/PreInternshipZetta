export interface Player {
    id: number,
    name: string,
    age: number,
    gender: string,
    email: string,
    nationality: string,
    chessTitle: string,
    chessElo: number,
    playerAddress: {
        address: string,
        zipCode: number,
        city: string,
        country: string
    }
}
