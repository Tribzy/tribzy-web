export type ButtonType = 'primary' | 'text'

export type IconColorType = 'primary' | 'primary-bg' | 'primary-2' | 'red' | 'green' | 'dark-grey' | 'grey' | 'grey-2' | 'light-grey' | 'black' | 'black-2' | 'white';

// export interface Community {
//     id: number;
//     name: string;
//     address: string;
//     image_url: string;
//     rating: number;
//     away_from_uni: number;
//     university_name: string;
// }

// export const communititesData: Community[] = [
//     {
//         id: 1,
//         name: "BLVD Gainesville",
//         address: "4000 SW 37th Blvd, Gainesville, FL 32608",
//         image_url: "https://lh3.googleusercontent.com/p/AF1QipNs6Do7Tnxo6S30VEotvJ6dHgr9dtg2R8BvpoA=s1360-w1360-h1020",
//         rating: 4.5,
//         away_from_uni: 2,
//         university_name: "UF",
//     },
//     {
//         id: 2,
//         name: "Stoneridge",
//         address: "3800 SW 34th St, Gainesville, FL 32608",
//         image_url: "https://lh3.googleusercontent.com/p/AF1QipNeZs2kfYj5o7Ks2YbrZe82-dw6YwcV7eWqMZU=s1360-w1360-h1020",
//         rating: 3.5,
//         away_from_uni: 3.6,
//         university_name: "UF",
//     },
// ]

export interface NavbarItem {
    name: string,
    route: string,

}

export const navbarItems: NavbarItem[] = [
    {
        name: 'Home',
        route: '',
    },
    {
        name: 'How it Works',
        route: '#how-it-works',
    },
    {
        name: 'Features',
        route: '#features',
    },
    {
        name: 'Join Us',
        route: '#join-us',
    },
];

export const howItWorks = [
    {
        id: 1,
        name: "Create Your Profile",
        url: "create",
    },
    {
        name: "dots",
    },
    {
        id: 2,
        name: "Explore Communities",
        url: "explore",
    },
    {
        name: "dots-180-y",
    },
    {
        id: 3,
        name: "Connect and Engage",
        url: "connect",
    },
]

export const features = [
    {
        id: 1,
        img_url_path: "community",
        title: "Community Discovery",
        description: "Explore nearby communities with profiles that include photos, reviews, and amenities. Filter by your preferences to find the ideal match for your university lifestyle.",
        points: [
            "Explore various communities near your university.",
            "Detailed profiles of communities including photos, reviews, and amenities.",
            "Filter communities based on your preferences for an ideal match.",
        ]
    },
    {
        id: 2,
        img_url_path: "roommate",
        title: "Roommate Matching",
        description: "Our algorithms match you with potential roommates based on lifestyle, budget, and habits. Explore profiles to find your best fit and connect easily.",
        points: [
            "Advanced algorithms to match you with potential roommates.",
            "Preferences based on lifestyle, budget, and habits.",
            "View detailed profiles and connect with your matches.",
        ]
    },
    {
        id: 3,
        img_url_path: "events",
        title: "Events",
        description: "Stay updated on community events to engage in gatherings, cultural activities, and meet-ups. Connect with residents and enhance your experience.",
        points: [
            "Stay updated with community events and activities.",
            "Attend social gatherings, cultural events, and meet-ups.",
            "Enhance your experience by engaging with fellow Residents.",
        ]
    }
]

export const enum IndexSectionIds {
    HowItWorks = "how-it-works",
    Features = "features",
    JoinUs = "join-us",
}
