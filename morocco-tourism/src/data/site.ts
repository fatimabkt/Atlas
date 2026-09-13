// Centralized content for the Morocco Tourism site.
// Swap image URLs for your own photography whenever you're ready —
// every image is referenced from this single file.

export const WHATSAPP_NUMBER = "212700199691"; 
export const CONTACT_EMAIL = "fatimabkt267@gmail.com";
export const CONTACT_PHONE = "+212 700-199691";
export const OFFICE_ADDRESS = "12 Rue des Oliviers, Gueliz, Marrakech 40000, Morocco";

export type Trip = {
  slug: string;
  title: string;
  destination: string;
  image: string;
  shortDescription: string;
  duration: string;
  price: number; // in MAD
  groupSize: string;
};

export type Tour = {
  slug: string;
  title: string;
  destination: string;
  image: string;
  category: "Desert" | "Imperial Cities" | "Coastal" | "Mountains";
  duration: string;
  price: number;
  rating: number;
  description: string;
  highlights: string[];
  itinerary: { day: string; detail: string }[];
};

export type Destination = {
  name: string;
  image: string;
  tagline: string;
};

export type Testimonial = {
  name: string;
  origin: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const destinations: Destination[] = [
  {
    name: "Marrakech",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c2b87c?q=80&w=1200&auto=format&fit=crop",
    tagline: "The Red City's souks & gardens",
  },
  {
    name: "Sahara Desert",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    tagline: "Golden dunes of Merzouga",
  },
  {
    name: "Chefchaouen",
    image:
      "https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=1200&auto=format&fit=crop",
    tagline: "The blue pearl of the Rif",
  },
  {
    name: "Fes",
    image:
      "https://images.unsplash.com/photo-1597212720128-6e7888a17372?q=80&w=1200&auto=format&fit=crop",
    tagline: "Medina, leather & legacy",
  },
  {
    name: "Essaouira",
    image:
      "https://images.unsplash.com/photo-1572877625047-2c0d2f5e0dfe?q=80&w=1200&auto=format&fit=crop",
    tagline: "Windswept Atlantic ramparts",
  },
  {
    name: "Atlas Mountains",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1200&auto=format&fit=crop",
    tagline: "Berber villages & high passes",
  },
];

export const trips: Trip[] = [
  {
    slug: "marrakech-discovery",
    title: "Marrakech Discovery Escape",
    destination: "Marrakech",
    image:
      "https://images.unsplash.com/photo-1597212720128-6e7888a17372?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Wander the Medina's souks, sip mint tea in hidden riads, and watch the sun set over Jemaa el-Fna.",
    duration: "4 Days / 3 Nights",
    price: 4200,
    groupSize: "2–10 people",
  },
  {
    slug: "sahara-desert-trek",
    title: "Sahara Desert Trek",
    destination: "Merzouga",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Camel trek into the Erg Chebbi dunes, sleep under the stars, and wake to a desert sunrise.",
    duration: "3 Days / 2 Nights",
    price: 3800,
    groupSize: "2–8 people",
  },
  {
    slug: "imperial-cities-grand-tour",
    title: "Imperial Cities Grand Tour",
    destination: "Fes, Meknes & Rabat",
    image:
      "https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "A journey through Morocco's four historic capitals — palaces, medinas, and centuries of history.",
    duration: "7 Days / 6 Nights",
    price: 8900,
    groupSize: "2–12 people",
  },
  {
    slug: "atlas-mountains-retreat",
    title: "Atlas Mountains Retreat",
    destination: "Imlil & Toubkal",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Hike Berber villages, breathe mountain air, and stay in a cedar-beamed kasbah lodge.",
    duration: "3 Days / 2 Nights",
    price: 3300,
    groupSize: "2–8 people",
  },
  {
    slug: "essaouira-coastal-escape",
    title: "Essaouira Coastal Escape",
    destination: "Essaouira",
    image:
      "https://images.unsplash.com/photo-1572877625047-2c0d2f5e0dfe?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Atlantic breeze, fresh seafood, and the blue-and-white ramparts of a historic port town.",
    duration: "2 Days / 1 Night",
    price: 2400,
    groupSize: "2–10 people",
  },
  {
    slug: "chefchaouen-blue-city",
    title: "Chefchaouen Blue City Tour",
    destination: "Chefchaouen",
    image:
      "https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=1200&auto=format&fit=crop",
    shortDescription:
      "Lose yourself in the indigo lanes of Morocco's most photogenic mountain town.",
    duration: "2 Days / 1 Night",
    price: 2200,
    groupSize: "2–10 people",
  },
];

export const tours: Tour[] = [
  {
    slug: "merzouga-3day-camel-trek",
    title: "Merzouga 3-Day Camel Trek",
    destination: "Merzouga",
    category: "Desert",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    duration: "3 Days",
    price: 3800,
    rating: 4.9,
    description:
      "Cross the Atlas via the Todra Gorge, ride camels into the Erg Chebbi dunes at sunset, and spend the night in a traditional desert camp under a blanket of stars.",
    highlights: [
      "Camel trek into Erg Chebbi dunes",
      "Overnight desert camp with live Gnawa music",
      "Sunrise over the Sahara",
      "Todra Gorge & Dades Valley stop",
    ],
    itinerary: [
      { day: "Day 1", detail: "Marrakech to Dades Valley via the High Atlas and Todra Gorge." },
      { day: "Day 2", detail: "Drive to Merzouga, camel trek into the dunes, desert camp overnight." },
      { day: "Day 3", detail: "Sunrise over the dunes, return journey to Marrakech or Fes." },
    ],
  },
  {
    slug: "marrakech-medina-walking-tour",
    title: "Marrakech Medina Walking Tour",
    destination: "Marrakech",
    category: "Imperial Cities",
    image:
      "https://images.unsplash.com/photo-1597212720128-6e7888a17372?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Day",
    price: 600,
    rating: 4.8,
    description:
      "An expert local guide leads you through the Medina's hidden corners: the Bahia Palace, the spice souks, the tanneries, and the best-kept secrets of the Red City.",
    highlights: [
      "Bahia Palace & Saadian Tombs",
      "Spice & textile souks",
      "Traditional mint tea stop",
      "Jemaa el-Fna at golden hour",
    ],
    itinerary: [
      { day: "Morning", detail: "Bahia Palace, Saadian Tombs, and the Mellah quarter." },
      { day: "Afternoon", detail: "Souk wander, artisan workshops, mint tea with a local family." },
      { day: "Evening", detail: "Jemaa el-Fna square at sunset, street food tasting." },
    ],
  },
  {
    slug: "fes-medina-and-tanneries",
    title: "Fes Medina & Tanneries",
    destination: "Fes",
    category: "Imperial Cities",
    image:
      "https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Day",
    price: 650,
    rating: 4.7,
    description:
      "Explore the world's largest car-free urban area: the Fes el-Bali medina, the Chouara Tanneries, and centuries-old madrasas tucked into narrow alleys.",
    highlights: [
      "Chouara Tanneries viewpoint",
      "Al-Attarine Madrasa",
      "Souk of the artisans",
      "Panoramic views from the Merenid Tombs",
    ],
    itinerary: [
      { day: "Morning", detail: "Bab Boujloud, Al-Attarine Madrasa, and the artisan souks." },
      { day: "Afternoon", detail: "Chouara Tanneries, leather workshops, traditional lunch." },
      { day: "Evening", detail: "Sunset views from the Merenid Tombs over the medina." },
    ],
  },
  {
    slug: "atlas-imlil-day-hike",
    title: "Imlil Valley Day Hike",
    destination: "Imlil",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Day",
    price: 750,
    rating: 4.9,
    description:
      "A guided hike through Berber villages at the foot of Mount Toubkal, North Africa's highest peak, with a home-cooked lunch in a mountain family's home.",
    highlights: [
      "Berber village walk",
      "Mount Toubkal base views",
      "Home-cooked Berber lunch",
      "Local guide & mule support",
    ],
    itinerary: [
      { day: "Morning", detail: "Drive from Marrakech to Imlil, begin the valley trail." },
      { day: "Midday", detail: "Visit a Berber village, home-cooked lunch with a local family." },
      { day: "Afternoon", detail: "Continue to waterfall viewpoint, return to Marrakech." },
    ],
  },
  {
    slug: "essaouira-day-trip",
    title: "Essaouira Coastal Day Trip",
    destination: "Essaouira",
    category: "Coastal",
    image:
      "https://images.unsplash.com/photo-1572877625047-2c0d2f5e0dfe?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Day",
    price: 550,
    rating: 4.6,
    description:
      "Trade the desert heat for Atlantic breeze in this fortified port city, famous for its blue fishing boats, art galleries, and fresh grilled seafood.",
    highlights: [
      "Skala de la Ville ramparts",
      "Fishing port & seafood lunch",
      "Medina art galleries",
      "Beach time on the Atlantic",
    ],
    itinerary: [
      { day: "Morning", detail: "Drive from Marrakech through argan tree country." },
      { day: "Midday", detail: "Ramparts walk, fishing port, fresh seafood lunch." },
      { day: "Afternoon", detail: "Medina galleries and free time on the beach." },
    ],
  },
  {
    slug: "chefchaouen-2day-tour",
    title: "Chefchaouen 2-Day Tour",
    destination: "Chefchaouen",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1553102407-187b48da7d2c?q=80&w=1200&auto=format&fit=crop",
    duration: "2 Days",
    price: 2200,
    rating: 4.9,
    description:
      "Get lost in the indigo-washed alleys of the Blue Pearl, hike to the Spanish Mosque viewpoint, and shop for handwoven Rif wool.",
    highlights: [
      "Blue medina photo walk",
      "Spanish Mosque sunset viewpoint",
      "Rif wool & craft souks",
      "Overnight in a riad",
    ],
    itinerary: [
      { day: "Day 1", detail: "Arrive Chefchaouen, blue medina walk, sunset at the Spanish Mosque." },
      { day: "Day 2", detail: "Souk shopping, waterfall walk, return journey." },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Laurent",
    origin: "Paris, France",
    quote:
      "From the desert camp to the riad breakfasts, every detail felt thought through. Our guide knew Marrakech like an old friend showing us around.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "James Whitfield",
    origin: "London, UK",
    quote:
      "The Sahara trek was the highlight of our year. Watching the sunrise over the dunes after a night under the stars — unforgettable.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    origin: "Lagos, Nigeria",
    quote:
      "Booking was effortless and the itinerary was paced perfectly — never rushed, never idle. I'm already planning my next trip back.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export function whatsappBookingLink(tripOrTourTitle: string) {
  const message = `Hello, I'm interested in booking the ${tripOrTourTitle}. Please send me more information.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
