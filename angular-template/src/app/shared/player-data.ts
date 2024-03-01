import { Player } from "./interface/player-interface";

export const players: Player[] = [
    {
        id: 1,
        name: "John Doe",
        age: 25,
        gender: "male",
        email: "john.doe@example.com",
        nationality: "American",
        chessTitle: "Grandmaster",
        chessElo: 2700,
        playerAddress: {
            address: "123 Main St",
            zipCode: 12345,
            city: "Example City",
            country: "Example Country"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 30,
        gender: "female",
        email: "jane.smith@example.com",
        nationality: "British",
        chessTitle: "International Master",
        chessElo: 2500,
        playerAddress: {
            address: "456 Elm St",
            zipCode: 67890,
            city: "Another City",
            country: "Another Country"
        }
    },
];