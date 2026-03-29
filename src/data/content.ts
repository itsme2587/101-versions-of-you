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
      note: "I don’t think you even realise how strong you are.\nI’ve seen you handle things that would have broken me in half… and still show up like nothing happened.\n\nYou take care of everything — work, home, people — and somehow still find the energy to ask me if I’ve eaten.\n\nAnd the funny part is… you never call it strength.\nBut I see it. Every single day.\n\nI don’t say this enough, but I’m really, really proud of you.",
      quote: "You carry more than you admit… and still make it look easy.",
      images: [],
      audio: "../audio/strong.mp3",
    },
    {
      id: "soft",
      title: "The Soft You",
      subtitle: "The version of you I get to keep for myself.",
      note: "The world gets to see your strong side.\nBut I get to see the version of you that lets your guard down.\n\nThe way your voice softens… the way you just sit quietly sometimes…\nthose little moments are my favourite.\n\nIt feels like I’m trusted with something rare.\nAnd I don’t take that lightly.\n\nHonestly, this version of you… is my home.",
      quote: "The world sees your strength. I get to feel your softness.",
      images: [],
      audio: "../audio/soft.mp3",
    },
    {
      id: "funny",
      title: "The Funny You",
      subtitle: "The version of you that makes my world brighter.",
      note: "You don’t even try… and still manage to make me laugh.\n\nSometimes it’s the way you say things, sometimes it’s your expressions…\nand sometimes it’s you laughing at your own joke before finishing it 😄\n\nYou make ordinary moments feel fun.\nAnd somehow, even the worst days feel lighter when you’re around.\n\nI don’t think you realise this…\nbut you’re my favourite kind of happy.",
      quote: "Your laughter is still my favourite sound.",
      images: [],
      audio: "../audio/funny.mp3",
    },
    {
      id: "caring",
      title: "The Caring You",
      subtitle: "The version of you that notices everything.",
      note: "You notice things… that most people miss.\n\nThe small details. The little changes. The things I don’t even say out loud.\nAnd somehow, you always know.\n\nYou remember what matters.\nYou care in ways that aren’t loud, but mean everything.\n\nI’ve never felt more understood than I do with you.\nAnd that’s something I’ll never take for granted.",
      quote: "You care in ways the world doesn’t even notice… but I do.",
      images: [],
      audio: "../audio/caring.mp3",
    },
    {
      id: "beautiful",
      title: "The Beautiful You",
      subtitle: "The version of you that takes my breath away.",
      note: "Yes, you’re beautiful. That’s obvious.\n\nBut what gets me every time… is how you are.\nThe way you carry yourself, the way you smile, the way your eyes change when you’re excited.\n\nIt’s not just how you look.\nIt’s the feeling you bring with you.\n\nAnd honestly… I still catch myself just looking at you sometimes, thinking\n“how did I get this lucky?”",
      quote: "It’s not just how you look… it’s how you make everything feel.",
      images: [],
      audio: "../audio/beautiful.mp3",
    },
    {
      id: "dreamer",
      title: "The Dreamer You",
      subtitle: "The version of you reaching for the stars.",
      note: "I love listening to you talk about what you want in life.\n\nThere’s something about the way your eyes light up…\nlike you’re already halfway there.\n\nYou dream big. And you should.\nBecause if anyone can turn those dreams into reality, it’s you.\n\nAnd whatever you choose to go after…\nI’ll always be right there, quietly supporting you.",
      quote: "Your dreams don’t scare me. They make me believe in you more.",
      images: [],
      audio: "../audio/dreamer.mp3",
    },
    {
      id: "chaotic",
      title: "The Chaotic You",
      subtitle: "The perfectly imperfect version of you.",
      note: "You’re not always calm.\nYou overthink. You get restless. You get messy sometimes.\n\nAnd honestly… I love that.\n\nBecause that’s the most real version of you.\nNot perfect. Not filtered. Just… you.\n\nEven in your chaos, there’s something beautiful.\nSomething alive.\n\nAnd I wouldn’t change that for anything.",
      quote: "I don’t just love your calm… I love your chaos too.",
      images: [],
      audio: "../audio/chaotic.mp3",
    },
    {
      id: "quiet",
      title: "The Quiet You",
      subtitle: "The version of you that finds peace.",
      note: "Some of my favourite moments with you… are the quiet ones.\n\nNo talking. No plans. Just sitting next to you.\n\nThere’s something about your presence that just… settles everything in me.\nLike I don’t have to think too much. I can just be.\n\nYou’re my calm in a very noisy world.",
      quote: "With you, even silence feels full.",
      images: [],
      audio: "../audio/quiet.mp3",
    },
    {
      id: "us",
      title: "The Us You",
      subtitle: "The version of you that makes us.",
      note: "Somehow, life just feels better with you in it.\n\nEven the most normal days — doing nothing, talking randomly, just being around you —\nbecome something I actually look forward to.\n\nWe’re not perfect.\nBut what we have… feels real.\n\nAnd if I had to choose again, I’d still choose you.\nEvery single time.",
      quote: "With you, even ordinary days feel special.",
      images: [],
      audio: "../audio/us.mp3",
    },
    {
      id: "passionate",
      title: "The Passionate You",
      subtitle: "The version of you with a fire inside.",
      note: "When you care about something… you really care.\n\nThe way you give your time, your energy, your focus —\nit’s honestly inspiring to watch.\n\nYou don’t do things halfway.\nAnd that’s one of the things I admire most about you.\n\nYou bring intensity into everything you love.\nAnd somehow, that makes everything feel more alive.",
      quote: "You don’t just feel things… you feel them deeply.",
      images: [],
      audio: "../audio/passionate.mp3",
    }
  ],
  openWhen: [
    {
      id: "need-me",
      title: "Open When You Need Me",
      note: "Hey… just pause for a second.\n\nYou don’t have to handle everything alone.\nYou don’t always have to be strong.\n\nIt’s okay to feel tired.\nIt’s okay to slow down.\n\nAnd whenever you feel like it’s getting too much…\njust remember, I’m right here. Always.",
      images: ["../image/need_me.jpeg"],
    },
    {
      id: "want-smile",
      title: "Open When You Want To Smile",
      note: "You know what I was just thinking?\n\nThat smile of yours… the one that just appears randomly —\nyeah, that one.\n\nIt’s still my favourite thing.\n\nAnd no matter what’s going on right now…\nI promise you, things will be okay.\n\nAlso… I’m probably missing you a little right now 🙂",
      images: ["../image/smile.jpeg"],
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
      note: `I’ve already fallen in love with every version of you I’ve been lucky enough to see so far.\n\nBut what excites me even more… is knowing that there are so many more versions of you still waiting to unfold.\n\nThe way you grow, the way you change, the way you keep becoming better without even realising it — I notice all of it.\n\nAnd I know one thing for sure… I’m going to love every version of you that comes next, just as much, if not more.\n\nHappy ${AppConfig.birthdayAge}th Birthday ❤️\n\nTake your time becoming everything you’re meant to be… I’ll be right here, loving you through it all.\n\nVersion ${nextVersionRoman} will unlock on your next birthday. I can't wait to fall in love with her, too.`,
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
