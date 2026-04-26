export const travelInfo = {
  howToReach: {
    byAir: {
      icon: "✈️",
      title: "By Air",
      description: "Ozar Airport (IATA: ISK) is 24 km from Nashik city. It has limited commercial flights. The nearest major airport is Chhatrapati Shivaji Maharaj International Airport, Mumbai (165 km).",
      options: [
        { from: "Mumbai Airport", distance: "165 km", time: "3 hours by road" },
        { from: "Nashik Ozar Airport", distance: "24 km from city", time: "45 min from city" },
        { from: "Pune Airport", distance: "220 km", time: "4 hours by road" }
      ],
      tips: "Most travelers fly into Mumbai and take a road or rail connection to Nashik."
    },
    byRail: {
      icon: "🚂",
      title: "By Train",
      description: "Nashik Road Railway Station is the main railway station, well-connected to major Indian cities. Mumbai Central to Nashik takes 3-4 hours. Many Rajdhani and Express trains stop here.",
      options: [
        { from: "Mumbai (CST/Dadar)", distance: "185 km", time: "3-4 hours", trains: "Panchavati Express, Tapovan Express" },
        { from: "Pune", distance: "220 km", time: "4.5 hours", trains: "Multiple Express trains" },
        { from: "Delhi", distance: "1,400 km", time: "18-22 hours", trains: "Rajdhani, Kerala Express" },
        { from: "Hyderabad", distance: "575 km", time: "10-12 hours", trains: "Multiple options" }
      ],
      tips: "Nashik Road station is 8 km from city center. Autos and taxis available."
    },
    byRoad: {
      icon: "🚗",
      title: "By Road",
      description: "Nashik is very well-connected by road. NH-3 (Mumbai-Agra Highway) passes through Nashik. Excellent bus services from Mumbai, Pune, and other Maharashtra cities.",
      options: [
        { from: "Mumbai", distance: "165 km", time: "3 hours via NH-3", bus: "MSRTC Shivneri (AC)" },
        { from: "Pune", distance: "210 km", time: "3.5-4 hours via NH-50", bus: "MSRTC & Private buses" },
        { from: "Aurangabad", distance: "105 km", time: "2 hours via NH-752", bus: "Regular MSRTC" },
        { from: "Shirdi", distance: "87 km", time: "1.5-2 hours", bus: "Regular buses" }
      ],
      tips: "Shivneri (MSRTC AC Volvo) buses from Mumbai are comfortable and frequent. Book online at msrtcotix.in"
    }
  },
  localTransport: [
    {
      type: "Auto Rickshaw",
      icon: "🛺",
      description: "Metered autos available throughout the city. Insist on meter or agree price before boarding.",
      avgCost: "₹20-100 per trip within city",
      tips: "Readily available, fastest for short distances"
    },
    {
      type: "City Bus (MSRTC)",
      icon: "🚌",
      description: "MSRTC city buses connect major areas. Routes cover Panchvati, MIDC, Satpur, Gangapur.",
      avgCost: "₹10-25 per trip",
      tips: "Cheapest option, but can be crowded and slow"
    },
    {
      type: "App Cab (Ola/Uber)",
      icon: "🚕",
      description: "Ola and Uber available in Nashik. Good for comfortable point-to-point travel.",
      avgCost: "₹100-400 per trip within city",
      tips: "Best for airport transfers and late-night travel"
    },
    {
      type: "Rented Bike/Scooter",
      icon: "🏍️",
      description: "Available from rental shops near railway station. Great for vineyard hopping and exploring at your own pace.",
      avgCost: "₹300-600 per day",
      tips: "International driving license required for some rentals"
    },
    {
      type: "Cycle Rickshaw",
      icon: "🚲",
      description: "Available in the old city and near Panchvati area. Eco-friendly for short distances.",
      avgCost: "₹20-60 per trip",
      tips: "Good for exploring the Panchvati area"
    },
    {
      type: "Taxi/Cab (Day Hire)",
      icon: "🚗",
      description: "Full-day taxi hire for visiting multiple attractions. Best for Trimbakeshwar, Saptashringi trips.",
      avgCost: "₹1,500-3,000 per day",
      tips: "Negotiate rates beforehand; AC vehicles recommended in summer"
    }
  ],
  distancesFromNashik: [
    { city: "Mumbai", distance: "165 km", time: "3 hours", direction: "Southwest" },
    { city: "Pune", distance: "210 km", time: "3.5 hours", direction: "South" },
    { city: "Shirdi", distance: "87 km", time: "1.5 hours", direction: "Southeast" },
    { city: "Aurangabad", distance: "105 km", time: "2 hours", direction: "East" },
    { city: "Trimbakeshwar", distance: "28 km", time: "45 min", direction: "West" },
    { city: "Saptashringi (Vani)", distance: "65 km", time: "1.5 hours", direction: "North" },
    { city: "Igatpuri", distance: "48 km", time: "1 hour", direction: "Southwest" },
    { city: "Dhule", distance: "119 km", time: "2 hours", direction: "North" }
  ],
  bestTimeToVisit: {
    overall: "October to March",
    seasons: [
      {
        season: "Winter (Oct–Feb)",
        weather: "15°C – 25°C, Pleasant",
        recommendation: "Best time to visit",
        icon: "❄️",
        highlights: "Perfect for sightseeing, wine tours, and outdoor activities"
      },
      {
        season: "Summer (Mar–Jun)",
        weather: "25°C – 42°C, Hot",
        recommendation: "Avoid if possible",
        icon: "☀️",
        highlights: "Plan indoor attractions; early morning temple visits"
      },
      {
        season: "Monsoon (Jul–Sep)",
        weather: "20°C – 30°C, Heavy Rains",
        recommendation: "Great for waterfalls",
        icon: "🌧️",
        highlights: "Dugarwadi Waterfall at best; Gangapur Dam scenic; avoid trekking"
      }
    ]
  }
};

export default travelInfo;