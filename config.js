// SportsLive - sirf yahi file edit karni hai
window.SPORTSLIVE_CONFIG = {
  siteName: "SportsLive",
  // FREE live-score key: https://cricketdata.org par signup -> CricAPI key yahan paste karo
  // Free = 100 hits/day. Khali chhoda to site demo/manual mode me chalegi.
  cricApiKey: "",
  refreshSeconds: 60,
  // Apna KHUD ka YouTube Live chalana ho to us Live video ki ID yahan dalo.
  // Example: youtube.com/watch?v=AbC123 -> "AbC123". Isse player me tumhari live commentary chalegi.
  youtubeLiveId: "",
  telegramUrl: "",
  // Official watch portals - country ke hisab se official broadcaster site
  officialWatch: [
    { sport: "Cricket", label: "Official Watch - Cricket (India)", url: "https://www.hotstar.com/in/sports/cricket" },
    { sport: "Football", label: "Official Watch - Football", url: "https://www.hotstar.com/in/sports/football" },
    { sport: "All", label: "Official Watch - All Sports", url: "https://www.sonyliv.com/sports" }
  ]
};
