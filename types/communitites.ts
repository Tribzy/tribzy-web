export interface CommunitiesData {
    communities: Community[];
}

export interface Community {
    id: number;
    name: string;
    distance_from_UF: string;
    type: string;
    furnishing: string;
    rating: number;
    image_url: string;
}

export const communitiesData: CommunitiesData = {
    communities: [
        {
            id: 1,
            name: "BLVD",
            distance_from_UF: "4 miles",
            type: "Private",
            furnishing: "Furnished",
            rating: 4.5,
            image_url: "https://www.blvdgnv.com/wp-content/uploads/2022/08/BLVD_Amenities_0000_BLVD_Hero_PoolandTrees-768x512.jpg"
        },
        {
            id: 2,
            name: "Stoneridge",
            distance_from_UF: "4 miles",
            type: "Shared",
            furnishing: "Unfurnished",
            rating: 3.5,
            image_url: "https://resource.rentcafe.com/image/upload/q_auto,f_auto/s3/2/129655/emmer%20management-stoneridge-pns%204.jpg"
        },
        {
            id: 3,
            name: "Centric",
            distance_from_UF: "4 miles",
            type: "Private",
            furnishing: "Furnished",
            rating: 3.5,
            image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/zweRv7p9Y52fUN2pt6VD0g/348s.jpg"
        },
        {
            id: 4,
            name: "Lexington",
            distance_from_UF: "4 miles",
            type: "Private",
            furnishing: "Furnished",
            rating: 4,
            image_url: "https://www.swamprentals.com/uploads/images/Lexington-Crossing-Apartments_120281.jpg"
        },
        {
            id: 5,
            name: "Greenwich",
            distance_from_UF: "4 miles",
            type: "Shared",
            furnishing: "Unfurnished",
            rating: 4,
            image_url: "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_xl/t_unpaid/d16b7eee2e817d519d9e3e3a81b67bc0"
        }
    ]
};
