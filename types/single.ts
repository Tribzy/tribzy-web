export interface SingleCommunity {
    name: string;
    image_url: string;
    amenities: string[];
    lease_start: string;
    lease_end: string;
    area: string;
    description: string;
    floor_plans: FloorPlan[];
    community_surroundings: { [key: string]: string };
    bus_numbers: BusNumber[];
}

export interface FloorPlan {
    id: number;
    price: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    sq_ft: number;
}

export interface BusNumber {
    id: number;
    route: string;
    destination: string;
}

export const community: SingleCommunity = {
    name: "BLVD",
    image_url: "https://www.swamprentals.com/uploads/images/IMG_4254.jpg",
    amenities: [
        "4 bedrooms",
        "Private Bed, Bath",
        "Fully Furnished",
        "Free Wifi",
        "Parking",
        "Kitchen",
        "Washer",
        "Pet Friendly"
    ],
    lease_start: "16 Aug 2024",
    lease_end: "31 July 2025",
    area: "1250 SqFt",
    description: "Located just 2 miles from the University of Florida on Archer Road 5 minutes from Butler Town Center with popular retail and restaurants like Publix, Target, Trader Joes, and more - BLVD sets the stage for your ideal student lifestyle. After a quick 10-minute bus ride home, hit the books in your fully furnished and private bedroom at your study desk, or grab a free cup of coffee and settle in a private or group study room.",
    floor_plans: [
        {
            id: 1,
            price: "$510 Per room",
            type: "4 BR/3 BA - Platinum - Shared",
            bedrooms: 4,
            bathrooms: 3,
            sq_ft: 0,
        },
        {
            id: 2,
            price: "$575 Per room",
            type: "4 BR/3 BA - Gold - Shared",
            bedrooms: 4,
            bathrooms: 3,
            sq_ft: 0,
        }
    ],
    community_surroundings: {
        "University of Florida": "2.5 Miles",
        "Gainesville Airport": "4.6 Miles",
        "India Bazar": "0.9 Miles",
        "Walmart": "1.2 Miles",
        "Best Buy": "0.8 Miles",
    },
    bus_numbers: [
        {
            id: 1,
            route: "12",
            destination: "to the campus",
        },
        {
            id: 2,
            route: "37",
            destination: "to the campus",
        },
    ]
};
