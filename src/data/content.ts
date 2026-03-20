export type Section = {
  id: string;
  title: string;
  subtitle?: string;
  note: string;
  quote?: string;
  images: string[];
  audio?: string;
};

export type OpenWhenSection = {
  id: string;
  title: string;
  note: string;
  images: string[];
  audio?: string;
};

export type FinalLetter = {
  title: string;
  subtitle: string;
  note: string;
  video: string;
};

export type ContentData = {
  sections: Section[];
  openWhen: OpenWhenSection[];
  finalLetter: FinalLetter;
};

export const AppData: ContentData = {
  sections: [
    {
      id: "strong",
      title: "The Strong You",
      subtitle: "The version of you that carries more than you admit.",
      note: "I have always been in awe of your quiet strength. The way you hold everything together even when it feels heavy. You carry the world with such grace, and I want you to know I see every effort you make.",
      quote: "You are stronger than the way you describe yourself.",
      images: [], // Placeholder for user images e.g. ["/images/strong1.jpg"]
      audio: "",  // Placeholder for user audio e.g. "/audio/strong.mp3"
    },
    {
      id: "soft",
      title: "The Soft You",
      subtitle: "The version of you I get to keep for myself.",
      note: "When the day ends and you let your guard down, that is when I feel the luckiest. Your softness, your kindness, and the way you care for the people you love is beautiful.",
      quote: "Your heart is your most beautiful feature.",
      images: [],
    },
    {
      id: "us",
      title: "The Us You",
      subtitle: "The version of you that makes us.",
      note: "From the first day to now, every version of us has been built on the love you bring. I am so grateful for the life we've built, the quiet mornings, and the loud laughter.",
      images: [],
    }
  ],
  openWhen: [
    {
      id: "low",
      title: "Open when you feel low",
      note: "Take a deep breath. You don't have to carry it all right now. Lean on me, close your eyes, and remember that you are profoundly loved exactly as you are.",
      images: [],
    },
    {
      id: "smile",
      title: "Open when you want to smile",
      note: "Remember that time we couldn't stop laughing for no reason? Your smile is literally my favorite thing in the universe. Please never stop smiling.",
      images: [],
    }
  ],
  finalLetter: {
    title: "Version 101",
    subtitle: "The woman you are still becoming.",
    note: "I have loved the 100 versions of you I've met so far. And I cannot wait to love the next hundred. You are still becoming, and I already love who you are. Happy Birthday.",
    video: "" // Placeholder e.g. "/video/final.mp4"
  }
};
