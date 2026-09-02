// Centralized Wedding Data Configuration (Pure JavaScript)

export const weddingData = {
  couple: {
    groom: {
      name: "Sahil Mehta",
      shortName: "Sahil",
      role: "The Groom",
      bio: "An architect who designs grand spaces with soul, Sahil fell in love with Riya's infectious laugh and radiant warmth.",
      parents: "Son of Mrs. Sunita & Mr. Rajesh Mehta",
      image: "/groom.webp",
    },
    bride: {
      name: "Riya Kapoor",
      shortName: "Riya",
      role: "The Bride",
      bio: "A classical dancer and creative storyteller, Riya found her steady anchor and eternal dance partner in Sahil.",
      parents: "Daughter of Mrs. Vandana & Mr. Vikram Kapoor",
      image: "/bride.webp",
    },
    togetherHero: "/open animation.webp",
    monogram: "R & S",
    weddingDateString: "December 18, 2026",
    weddingDateISO: "2026-12-18T18:30:00",
    hashtag: "#RiyaFoundHerSahil",
    tagline: "A story of their own.",
  },

  storyMilestones: [
    {
      id: 1,
      year: "Autumn 2021",
      title: "The First Coffee in Old Town",
      location: "Roastery & Co., Colaba",
      description: "What was intended to be a brief thirty-minute coffee turned into five hours of endless laughter, debating art, and discovering an effortless bond.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      tag: "Serendipity"
    },
    {
      id: 2,
      year: "Summer 2022",
      title: "The Road Trip to the Hills",
      location: "Shimla & Spiti Valley",
      description: "Stuck in a mountain downpour with a flat tire and hot chai, we realized that with each other, every unexpected roadblock turns into an unforgettable adventure.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      tag: "Adventure"
    },
    {
      id: 3,
      year: "Winter 2024",
      title: "The Sunset Proposal",
      location: "Lake Pichola, Udaipur",
      description: "Under a sky painted in shades of gold and amber, with the gentle lapping of palace waters, Aarav got down on one knee. Through tears of joy, Meera said YES!",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
      tag: "The Yes Moment"
    },
    {
      id: 4,
      year: "Today & Forever",
      title: "The Sacred Vows",
      location: "The Grand Royal Palace",
      description: "Surrounded by our dearest family and friends, we prepare to take the seven sacred steps and weave our lives into one beautiful destiny.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      tag: "Forever"
    }
  ],

  events: [
    {
      id: "haldi",
      title: "Haldi & Floral Phoolon Ki Holi",
      date: "Friday, Dec 18, 2026",
      time: "10:00 AM – 1:30 PM",
      venue: "The Courtyard Gardens, Royal Palace",
      dressCode: "Sunshine Yellow & Floral Pastels",
      palette: ["#F9D342", "#FFF275", "#FF8E72"],
      description: "A joyous morning of turmeric blessings, marigold showers, traditional folk rhythms, and pure laughter.",
      icon: "lotus",
      calendar: {
        title: "Aarav & Meera - Haldi Ceremony",
        start: "20261218T043000Z",
        end: "20261218T080000Z",
        location: "The Courtyard Gardens, Royal Palace, Jaipur",
        details: "Join us for Haldi & Floral Holi. Dress Code: Sunshine Yellow & Pastels."
      }
    },
    {
      id: "sangeet",
      title: "Sangeet & Cocktail Soirée",
      date: "Friday, Dec 18, 2026",
      time: "7:00 PM Onwards",
      venue: "The Crystal Ballroom & Poolside Lawn",
      dressCode: "Indo-Western Glamour & Shimmer",
      palette: ["#1B3B2B", "#D4AF37", "#2C050C"],
      description: "An electrifying evening of high-energy dance performances, soulful music, gourmet cocktails, and endless celebration.",
      icon: "drum",
      calendar: {
        title: "Aarav & Meera - Sangeet & Cocktail Soirée",
        start: "20261218T133000Z",
        end: "20261218T183000Z",
        location: "The Crystal Ballroom, Royal Palace, Jaipur",
        details: "An evening of dance and music. Dress Code: Indo-Western Glamour."
      }
    },
    {
      id: "wedding",
      title: "The Holy Muhurtham & Vows",
      date: "Saturday, Dec 19, 2026",
      time: "4:30 PM – 7:30 PM",
      venue: "The Heritage Mandap by the Lake",
      dressCode: "Traditional Royal Silk & Sherwanis",
      palette: ["#831227", "#D4AF37", "#FAF6EE"],
      description: "The sacred Vedic rituals, varmala exchange under the twilight sky, and seven pheras around the holy fire.",
      icon: "mandap",
      calendar: {
        title: "Aarav & Meera - The Wedding Ceremony",
        start: "20261219T110000Z",
        end: "20261219T143000Z",
        location: "The Heritage Mandap, Royal Palace, Jaipur",
        details: "The sacred wedding ceremony and pheras. Dress Code: Traditional Royal Attire."
      }
    },
    {
      id: "reception",
      title: "The Grand Royal Reception",
      date: "Saturday, Dec 19, 2026",
      time: "8:00 PM – Midnight",
      venue: "The Grand Regal Pavilion",
      dressCode: "Black Tie & Elegant Ethnic Formals",
      palette: ["#0E1626", "#D4AF37", "#FFFFFF"],
      description: "A majestic feast under chandeliers with live symphony orchestra, champagne toasts, and our first royal dance.",
      icon: "rings",
      calendar: {
        title: "Aarav & Meera - Grand Reception",
        start: "20261219T143000Z",
        end: "20261219T183000Z",
        location: "The Grand Regal Pavilion, Royal Palace, Jaipur",
        details: "The Grand Wedding Reception dinner and celebrations."
      }
    }
  ],

  moments: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
      quote: "Every love story is beautiful, but ours is our absolute favorite.",
      caption: "Twilight in the Royal Gardens"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
      quote: "In your smile, I see something more beautiful than the stars.",
      caption: "Laughter caught between glances"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
      quote: "Together is a wonderful place to be.",
      caption: "Hand in hand towards our tomorrow"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=80",
      quote: "Whatever our souls are made of, his and mine are the same.",
      caption: "Sunset promises by the water"
    }
  ],

  gallery: [
    {
      id: 1,
      category: "pre-wedding",
      title: "Royal Archways",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-96",
      caption: "Moments framed by heritage stone and golden sunlight."
    },
    {
      id: 2,
      category: "candid",
      title: "Pure Joy",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-72",
      caption: "Unfiltered laughter as the golden hour set over the courtyard."
    },
    {
      id: 3,
      category: "proposal",
      title: "The Sunset Proposal",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-80",
      caption: "The exact second she said forever by the lake."
    },
    {
      id: 4,
      category: "pre-wedding",
      title: "The Palace Promenade",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-96",
      caption: "Grace and regal elegance in traditional silk embroidery."
    },
    {
      id: 5,
      category: "moments",
      title: "Whispered Promises",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-72",
      caption: "Quiet conversations amidst the grand celebrations."
    },
    {
      id: 6,
      category: "candid",
      title: "Sacred Florals",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      heightClass: "h-88",
      caption: "Fresh jasmine and marigolds blessed for the auspicious day."
    }
  ],

  venue: {
    name: "The Rambagh Heritage Palace & Resort",
    address: "Bhawani Singh Road, Jaipur, Rajasthan 302005, India",
    directionsUrl: "https://maps.google.com/?q=The+Rambagh+Palace+Jaipur",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1287950346386!2d75.80373247597148!3d26.899403476657923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db421d3f0a0bb%3A0xe55d0458df43e945!2sRambagh%20Palace%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1709462800000!5m2!1sen!2sin",
    airportDistance: "11 km from Jaipur International Airport (JAI) — ~25 mins drive",
    trainDistance: "6 km from Jaipur Railway Junction — ~15 mins drive",
    valet: "Complimentary 24/7 Valet Parking available at Palace Main Portico.",
    hotelInfo: "Special wedding accommodation rates reserved for guests using code: MEERAARAV2026."
  },

  initialWishes: [
    {
      id: 1,
      name: "Rohan & Ananya Verma",
      relation: "Friends of the Groom",
      message: "Wishing you both a lifetime of adventures, laughter, and endless happiness! Counting down the days to celebrate with you!",
      date: "Just now",
      likes: 12
    },
    {
      id: 2,
      name: "Pooja Kapoor",
      relation: "Cousin of the Bride",
      message: "My dearest Meera, seeing you with Aarav fills our hearts with so much joy. You both are made for each other! Can't wait for Sangeet night!",
      date: "2 hours ago",
      likes: 18
    },
    {
      id: 3,
      name: "Vikram Uncle & Priya Aunty",
      relation: "Family Friends",
      message: "Heartiest congratulations and divine blessings for a glorious married life ahead. May God shower prosperity on the new couple!",
      date: "Yesterday",
      likes: 9
    }
  ]
};
