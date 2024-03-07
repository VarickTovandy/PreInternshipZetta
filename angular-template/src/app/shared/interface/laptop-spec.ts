export interface LaptopSpec {
    id: string,
    name: string,
    brand: string,
    processor: string,
    gpu: string,
    storage: string,
    ram: string,
    price: number,
    laptopImg: string,
    warranty: {
        type: string,
        duration: string
    }[]
}
