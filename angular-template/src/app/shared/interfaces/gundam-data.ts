export interface Gundam {
    id: number;
    name: string;
    price: number;
    description: string;
    brand: string;
    gundamSeries: string;
    grade: string;
    image: string;
}
export interface CartGundam {
    id: number;
    name: string;
    price: number;
    quantity: number;
}