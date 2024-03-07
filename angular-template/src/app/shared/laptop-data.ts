import { LaptopSpec } from "./interface/laptop-spec";

export const laptops: LaptopSpec[] = [
    {
        id: "1",
        name: "Dell XPS 13",
        brand: "Dell",
        processor: "Intel Core i7-1165G7",
        gpu: "Intel Iris Xe Graphics",
        storage: "512GB SSD",
        ram: "16GB DDR4",
        price: 100,
        laptopImg: "https://laptopmedia.com/wp-content/uploads/2021/01/02_Scar_15-1-scaled-e1610551468305.jpg",
        warranty: [
            {
                type: "Manufacturer",
                duration: "1 year"
            }
        ]
    },
    {
        id: "2",
        name: "MacBook Pro 16-inch",
        brand: "Apple",
        processor: "Apple M1 Pro",
        gpu: "AMD Radeon Pro 6600M",
        storage: "1TB SSD",
        ram: "16GB DDR4",
        price: 100,
        laptopImg: "https://laptopmedia.com/wp-content/uploads/2021/01/02_Scar_15-1-scaled-e1610551468305.jpg",
        warranty: [
            {
                type: "Manufacturer",
                duration: "1 year"
            }
        ]
    },
    {
        id: "3",
        name: "HP Spectre x360",
        brand: "HP",
        processor: "Intel Core i7-1165G7",
        gpu: "Intel Iris Xe Graphics",
        storage: "1TB SSD",
        ram: "16GB DDR4",
        price: 100,
        laptopImg: "https://laptopmedia.com/wp-content/uploads/2021/01/02_Scar_15-1-scaled-e1610551468305.jpg",
        warranty: [
            {
                type: "Manufacturer",
                duration: "2 years"
            }
        ]
    },
];
