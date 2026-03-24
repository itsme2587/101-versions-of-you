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
      images: [],
      audio: "",
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
      id: "funny",
      title: "The Funny You",
      subtitle: "The version of you that makes my world brighter.",
      note: "I don't think you realize how effortlessly hilarious you are. It's the little comments, the sudden bursts of energy, and the way you can always make me laugh even on my darkest days.",
      quote: "Your laugh is my favorite soundtrack.",
      images: [],
    },
    {
      id: "caring",
      title: "The Caring You",
      subtitle: "The version of you that notices everything.",
      note: "You remember the smallest details. You go out of your way to make sure everyone is okay. The sheer amount of empathy and care you hold within you is nothing short of extraordinary.",
      quote: "To be loved by you is to be truly seen.",
      images: [],
    },
    {
      id: "beautiful",
      title: "The Beautiful You",
      subtitle: "The version of you that takes my breath away.",
      note: "Yes, you are breathtakingly gorgeous on the outside, but your true beauty is how you glow from within. It’s the way your eyes light up when you talk about something you love. You are art.",
      quote: "You are entirely, unconditionally beautiful.",
      images: [],
    },
    {
      id: "dreamer",
      title: "The Dreamer You",
      subtitle: "The version of you reaching for the stars.",
      note: "I love watching you get excited about the future. Your ambition and the way you dream so fiercely inspires me to be better. I will always be your biggest cheerleader.",
      quote: "Keep your eyes on the stars, I've got your hand.",
      images: [],
    },
    {
      id: "chaotic",
      title: "The Chaotic You",
      subtitle: "The perfectly imperfect version of you.",
      note: "When you are all over the place, disorganized, or a little bit of a mess—that is when I find you the most wonderfully human. I love your chaos just as much as your calm.",
      quote: "There is perfection in your wildness.",
      images: [],
    },
    {
      id: "quiet",
      title: "The Quiet You",
      subtitle: "The version of you that finds peace.",
      note: "Even in the silence, your presence speaks volumes. I love the moments when we share nothing but quiet companionship, and it feels like everything is exactly as it should be.",
      quote: "There is magic in your stillness.",
      images: [],
    },
    {
      id: "us",
      title: "The Us You",
      subtitle: "The version of you that makes us.",
      note: "From the first day to now, every version of us has been built on the love you bring. I am so grateful for the life we've built, the quiet mornings, and the loud laughter.",
      quote: "There is no me without you.",
      images: [],
    },
    {
      id: "passionate",
      title: "The Passionate You",
      subtitle: "The version of you with a fire inside.",
      note: "The way you pour your heart into the things you love is mesmerizing. Whether it's your work, your hobbies, or the people you care about, your passion inspires me every single day.",
      quote: "Your fire lights up my world.",
      images: [],
    }
  ],
  openWhen: [
    {
      id: "need-me",
      title: "Open When You Need Me",
      note: "Take a deep breath. You don't have to carry it all right now. Lean on me, close your eyes, and remember that you are profoundly loved exactly as you are.",
      images: [],
    },
    {
      id: "want-smile",
      title: "Open When You Want To Smile",
      note: "Your smile is my absolute favorite thing in the world. Whatever is on your mind right now, picture my face looking back at you with nothing but pure love and adoration. I hope that brings a beautiful smile to your face.",
      images: [],
    }
  ],
  get finalLetter() {
    const romanNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    const currentVersionNum = Math.floor(this.sections.length / 10);
    const nextVersionNum = currentVersionNum + 1;
    const nextVersionRoman = romanNumerals[nextVersionNum] || nextVersionNum.toString();

    return {
      title: `Version ${nextVersionRoman}`,
      subtitle: "The woman you are still becoming.",
      note: `I have loved the ${this.sections.length} versions of you I've met so far. And I cannot wait to love the endless evolutions to come. You are still becoming, and I already love who you are. Happy ${AppConfig.birthdayAge}th Birthday.\n\nWait for the unwritten chapters to unfold. The next 10 versions will whisper their secrets on your next birthday.`,
      video: ""
    };
  }
};

export const AppConfig = {
  dob: "28-03-1996",
  get birthdayAge() {
    const parts = this.dob.split("-");
    const year = parseInt(parts[2], 10);
    return new Date().getFullYear() - year;
  },
  title: "101 Versions of You"
};
