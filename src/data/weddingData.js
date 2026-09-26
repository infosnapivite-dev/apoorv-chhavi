// Centralized Wedding Data Configuration (Pure JavaScript)

export const weddingData = {
  couple: {
    groom: {
      name: "Apoorv Goel",
      shortName: "Apoorv",
      role: "The Groom",
      bio: "A story of their own.",
      parents: "Vikash Goel & Sushma Goel",
      grandparents: "Shri Khem Goel & Smt. Kalpana Goel",
      image: "/images/apoorv.webp",
    },
    bride: {
      name: "Chhavi Falod",
      shortName: "Chhavi",
      role: "The Bride",
      bio: "A story of their own.",
      parents: "Salil Falod & Radhika Falod",
      grandparents: "Shri Kunjbihari Falod & Smt. Beena Falod",
      image: "/images/chhavi.webp",
    },
    togetherHero: "/images/event page top image.webp",
    monogram: "A & C",
    weddingDateString: "9 • 10 • 11 December 2026",
    weddingDateISO: "2026-12-09T19:00:00",
    hashtag: "#ApoorvedByChhavi",
    tagline: "A STORY OF THEIR OWN",
  },

  storyMilestones: [
    {
      id: 1,
      title: "The first hello",
      subtitle: "Somewhere in time",
      image: "/images/first hello.webp",
    },
    {
      id: 2,
      title: "First Movie",
      image: "/images/first movie.webp",
    },
    {
      id: 3,
      title: "The first trip",
      subtitle: "Exploring new horizons",
      image: "/images/first trip.webp",
    },
    {
      id: 4,
      title: "She said yes!",
      subtitle: "A new chapter begins",
      image: "/images/she said yes.webp",
    },
  ],

  events: [
    {
      id: "bollywood_social",
      tag: "A NIGHT FULL OF STORIES",
      subtitle: "“Picture abhi shuru hui hai\nmere dost...”",
      scriptSubtitle: "“Picture abhi shuru hui hai mere dost...”",
      quoteLines: ["“Picture abhi shuru hui hai", "mere dost...”"],
      isQuoteSubtitle: true,
      title: "BOLLYWOOD SOCIAL",
      titleLines: ["BOLLYWOOD", "SOCIAL"],
      isTwoLineTitle: true,
      hideTopDivider: true,
      date: "09 DECEMBER",
      time: "7:00 PM",
      displayDate: "Wednesday, 9 Dec • 7:00 PM",
      fullFormattedDate: "WEDNESDAY, 9TH DECEMBER 2026",
      formattedTime: "7:00 PM",
      locationShort: "NORTH CENTRAL LAWN",
      taglineLines: ["SAME PEOPLE", "A BRIGHTER STORY"],
      symbolType: "clapperboard",
      bannerImage: "/images/bollywood social banner.webp",
      modalImage: "/images/bollywood social banner.webp",
      venue: "North Central Lawn, Goa Marriott Resort & Spa",
      dressCode: "Bollywood Glamour & Retro Chic",
      description: "Bollywood Social — Wednesday, 9th December 2026 at 7:00 PM on the North Central Lawn. Kickstarting the wedding festivities with high-energy Bollywood music, cocktails, and celebration by the sea.",
      calendar: {
        title: "Apoorv & Chhavi - Bollywood Social",
        start: "20261209T133000Z",
        end: "20261209T183000Z",
        location: "North Central Lawn, Goa Marriott Resort & Spa, Panaji, Goa",
        details: "Bollywood Social: “Picture abhi shuru hui hai mere dost...”. Wednesday, 9th December 2026 at 7:00 PM on the North Central Lawn."
      }
    },
    {
      id: "haldi",
      tag: "THE SUNSHINE SCENE",
      subtitle: "Yellow Paradise",
      scriptSubtitle: "Yellow Paradise",
      title: "HALDI",
      date: "10 DECEMBER",
      time: "11:00 AM",
      displayDate: "Thursday, 10 Dec • 11:00 AM",
      fullFormattedDate: "THURSDAY, 10TH DECEMBER 2026",
      formattedTime: "11:00 AM",
      locationShort: "POOLSIDE",
      taglineLines: ["SUNSHINE. LAUGHTER.", "A BRIGHTER TOMORROW."],
      symbolType: "sun",
      bannerImage: "/images/haldi banner.webp",
      modalImage: "/images/haldi banner.webp",
      venue: "Poolside, Goa Marriott Resort & Spa",
      dressCode: "Sunshine Yellow & Floral Pastels",
      description: "Yellow Paradise — Thursday, 10th December 2026 at 11:00 AM by the Poolside. A sun-kissed celebration of auspicious turmeric blessings, fragrant floral showers, and vibrant traditional rhythms.",
      calendar: {
        title: "Apoorv & Chhavi - Haldi (The Sunshine Scene)",
        start: "20261210T053000Z",
        end: "20261210T093000Z",
        location: "Poolside, Goa Marriott Resort & Spa, Panaji, Goa",
        details: "Haldi (The Sunshine Scene): Yellow Paradise. Thursday, 10th December 2026 at 11:00 AM by the Poolside."
      }
    },
    {
      id: "sangeet",
      tag: "THE MUSICAL",
      subtitle: "Aaja Nachle",
      scriptSubtitle: "Aaja Nachle",
      title: "SANGEET",
      date: "10 DECEMBER",
      time: "7:00 PM",
      displayDate: "Thursday, 10 Dec • 7:00 PM",
      fullFormattedDate: "THURSDAY, 10TH DECEMBER 2026",
      formattedTime: "7:00 PM",
      locationShort: "GRAND BALLROOM",
      taglineLines: ["DANCE. CELEBRATE.", "MAKE MEMORIES."],
      symbolType: "discoball",
      bannerImage: "/images/sangeet banner.webp",
      modalImage: "/images/sangeet banner.webp",
      venue: "Grand Ballroom, Goa Marriott Resort & Spa",
      dressCode: "Indo-Western Glamour & Shimmer",
      description: "Aaja Nachle — Thursday, 10th December 2026 at 7:00 PM in the Grand Ballroom. An electrifying musical night filled with dazzling stage performances, celebration toasts, and non-stop dancing under the Goan night sky.",
      calendar: {
        title: "Apoorv & Chhavi - Sangeet (The Musical)",
        start: "20261210T133000Z",
        end: "20261210T183000Z",
        location: "Grand Ballroom, Goa Marriott Resort & Spa, Panaji, Goa",
        details: "Sangeet (The Musical): Aaja Nachle. Thursday, 10th December 2026 at 7:00 PM in the Grand Ballroom."
      }
    },
    {
      id: "mayra",
      tag: "THE HOMECOMING",
      subtitle: "Padharo Mhare Des",
      scriptSubtitle: "Padharo Mhare Des",
      title: "MAYRA",
      date: "11 DECEMBER",
      time: "10:00 AM",
      displayDate: "Friday, 11 Dec • 10:00 AM",
      fullFormattedDate: "FRIDAY, 11TH DECEMBER 2026",
      formattedTime: "10:00 AM",
      locationShort: "GRAND BALLROOM",
      taglineLines: ["A LITTLE BIT OF HOME,", "ALL THE WAY IN GOA."],
      symbolType: "jharokha",
      bannerImage: "/images/mayra banner.webp",
      modalImage: "/images/mayra banner.webp",
      venue: "Grand Ballroom, Goa Marriott Resort & Spa",
      dressCode: "Traditional Rajasthani & Ethnic Festive",
      description: "Padharo Mhare Des — Friday, 11th December 2026 at 10:00 AM in the Grand Ballroom. A traditional maternal blessing ceremony rich with heartfelt rituals, folk melodies, and sweet moments of family bonding.",
      calendar: {
        title: "Apoorv & Chhavi - Mayra (The Homecoming)",
        start: "20261211T043000Z",
        end: "20261211T083000Z",
        location: "Grand Ballroom, Goa Marriott Resort & Spa, Panaji, Goa",
        details: "Mayra (The Homecoming): Padharo Mhare Des. Friday, 11th December 2026 at 10:00 AM in the Grand Ballroom."
      }
    },
    {
      id: "wedding",
      tag: "THE BIG DAY",
      subtitle: "Eternal Vows",
      scriptSubtitle: "Eternal Vows",
      title: "THE WEDDING",
      isWeddingSchedule: true,
      date: "11 DECEMBER",
      time: "2:00 PM & 5:00 PM",
      displayDate: "Friday, 11 Dec • 2 PM Baarat / 5 PM Pheras",
      fullFormattedDate: "FRIDAY, 11TH DECEMBER 2026",
      formattedTime: "2:00 PM BAARAT • 5:00 PM PHERAS",
      weddingEvents: [
        { name: "BAARAT – ARRIVAL LOUNGE", time: "2:00 PM" },
        { name: "PHERAS – BY THE BEACH", time: "5:00 PM" }
      ],
      locationShort: "BY THE BEACH",
      taglineLines: ["WHERE THE STORY", "MEETS FOREVER."],
      symbolType: "beachsunset",
      bannerImage: "/images/the wedding banner.webp",
      modalImage: "/images/the wedding banner.webp",
      venue: "Arrival Lounge (Baarat 2 PM) & By the Beach (Pheras 5 PM)",
      dressCode: "Royal Traditional Silks & Sherwanis",
      description: "Eternal Vows — Friday, 11th December 2026. The Baarat is at 2:00 PM at the Arrival Lounge, followed by Pheras at 5:00 PM By the Beach overlooking the sunset ocean.",
      calendar: {
        title: "Apoorv & Chhavi - The Wedding (The Big Day)",
        start: "20261211T083000Z",
        end: "20261211T143000Z",
        location: "Arrival Lounge & By the Beach, Goa Marriott Resort & Spa, Panaji, Goa",
        details: "The Wedding (The Big Day): Eternal Vows. Friday, 11th December 2026. Baarat is at 2:00 PM at the Arrival Lounge, followed by Pheras at 5:00 PM By the Beach."
      }
    }
  ],

  venue: {
    name: "Goa Marriott Resort & Spa",
    location: "Panaji, Goa",
    fullAddress: "Goa Marriott Resort & Spa, Miramar, Panaji, Goa 403001",
    dates: "9.10.11 DECEMBER 2026",
    groomGrandparents: {
      grandfather: "Shri Khem Goel",
      grandmother: "Smt. Kalpana Goel",
    },
    brideGrandparents: {
      grandfather: "Shri Kunjbihari Falod",
      grandmother: "Smt. Beena Falod",
    },
    groomParents: "Vikash Goel & Sushma Goel",
    brideParents: "Salil Falod & Radhika Falod",
    rsvp: [
      { name: "Vinay Goel", phone: "+977 9802022887" },
      { name: "Vishal Goel", phone: "+91 9799299320" }
    ],
    signOff: "The Goel & Falod Families"
  },

  gallery: [
    {
      id: 1,
      title: "SUNSET PROMISES BY THE WATER",
      quote: "Whatever our souls are made of, his and mine are the same.",
      image: "/gallery/1.webp",
    },
    {
      id: 2,
      title: "WHISPERS IN THE GOLDEN HOUR",
      quote: "You are my today and all of my tomorrows.",
      image: "/gallery/2.webp",
    },
    {
      id: 3,
      title: "UNDER THE STARRY SKY",
      quote: "In all the world, there is no heart for me like yours.",
      image: "/gallery/3.webp",
    },
    {
      id: 4,
      title: "FOREVER & ALWAYS",
      quote: "Two souls with but a single thought, two hearts that beat as one.",
      image: "/gallery/4.webp",
    },
    {
      id: 5,
      title: "THE SWEETEST BEGINNING",
      quote: "Every love story is beautiful, but ours is my favorite.",
      image: "/gallery/5.webp",
    },
    {
      id: 6,
      title: "A DANCE IN THE BREEZE",
      quote: "With you, every moment feels like poetry.",
      image: "/gallery/6.webp",
    },
    {
      id: 7,
      title: "GOLDEN SHORES & LAUGHTER",
      quote: "I have found the one whom my soul loves.",
      image: "/gallery/7.webp",
    },
    {
      id: 8,
      title: "STOLEN GLANCES",
      quote: "Loved you yesterday, love you still, always have, always will.",
      image: "/gallery/9.webp",
    },
    {
      id: 9,
      title: "THE SACRED PROMISE",
      quote: "Hand in hand, into our forever.",
      image: "/gallery/10.webp",
    },
    {
      id: 10,
      title: "MOMENTS IN TIME",
      quote: "To love and to cherish, from this day forward.",
      image: "/gallery/11.webp",
    },
  ]
};

