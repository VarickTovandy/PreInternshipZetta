export interface Player {
    id: number,
    name: string,
    age: number,
    gender: string,
    email: string,
    nationality: string,
    playerImg?: string,
    chessTitle: string,
    chessElo: number,
    playerAddresses: {
        address: string,
        zipCode: number,
        city: string,
        country: string
    }[],
    contactPerson: {
        name: string,
        phoneNumber: string
    }[]
}
