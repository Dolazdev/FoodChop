import { fresh, delivery, fast, order, wallet  } from "../assets/icons";
// import { avatar1, avatar2, avatar3 } from "../assets/images";

// NAVIGATION 
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#training", label: "Offer" },
    { href: "#training", label: "Service" },
    { href: "#conference", label: "Order" },
    { href: "#courses", label: "Menu" },
];

//PROFESSIONAL TEACHERS FEATURES
export const features = [
    {
        icon: fast,
        name: "Fast Delivery",
        about: 'The Food  will be delievred to your home within 1-2 Hours of your ordering.'

    },
    {
        icon: fresh,
        name: "Fresh Food",
        about: "Your Food will be Delivered 100% fresh to your home we don't deliver stale food."
    },
    {
        icon: delivery,
        name: "Free Delivery",
        about: "Your food delivery is absolutely free, just order and enjoy"
    }
    ];


export const howItWorks = [
    {
        id: '1',
        icon: wallet,
        header: `Connect Your Wallet`,
        content: `Sign up for an account and experience better offers.`
    },

    {
        id: '2',
        icon: order,
        header: `Order`,
        content: `Discover the best food and drinks through the platform.`
    },
   
    {
        id: '3',
        icon: delivery,
        header: ` Wait for delivery`,
        content: `Your food will be delivered to you as soon as possible.`
    },

];


