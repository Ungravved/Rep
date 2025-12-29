export const PASSWORD = "StenkulasDrängar";

interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  bio: string;
  imageUrl: string;
}

export const FRIENDS: Friend[] = [
  {
    id: 1,
    firstName: "Sara",
    lastName: "bab El hära",
    bio: "En skitpatetisk liten horunge som tror hon är något. Missbrukare av sin position och en parasit på gänget. Alla kuksugare runt henne nickar bara för att de är för svaga att tänka själva. Hon skulle inte överlevnad fem sekunder utan sitt gäng. Knulla hennes mammas röv.",
    imageUrl: "/images/sara.jpg",
  },
  {
    id: 2,
    firstName: "Hanna",
    lastName: "The orange",
    bio: "En skitig liten luder utan gränser. Försöker vara relevant men är bara en skugga. Rykten säger att hon suger av i omklädningsrummet för uppmärksamhet. En smutsig hora som ingen vill umgås med. Hennes mamma skäms varje dag över att hon fötts. Knulla hennes älskling också.",
    imageUrl: "/images/hanna.jpg",
  },
  {
    id: 3,
    firstName: "Gardintvuvarnas",
    lastName: "gäng",
    bio: "Ett gäng värdelösa skitkuksugare utan egna hjärnor. Alla är patetiska horунgar som bara följer Sara som hundar. Rena maffisor utan integritet. Bråka med en så blir det en gang bang. Knulla era mammor och era pappor också, ni är alla skit från början.",
    imageUrl: "/images/gardintvuvarnas.jpg",
  },
  {
    id: 4,
    firstName: "COOKIE",
    lastName: "The Menace",
    bio: "Kung av skolan och den farligaste jäveln på gården. Han är bossen och alla vet det. Respekt för COOKIE, han är den enda som har ordning och reda. Du bråkar inte med honom och överlevnader. En legend.",
    imageUrl: "/images/cookie.jpg",
  },
  {
    id: 5,
    firstName: "Aya",
    lastName: "Lös",
    bio: "En smutsig infekterad virus på två ben. Sprider hennes sjukdom överallt hon går. En promiskuös luder som har varit med halva skolan. Hennes fotfetisch är känd av alla. En skitpatetisk horunge som inte är värd någons tid. Knulla hennes mamma tio gånger.",
    imageUrl: "/images/aya.jpg",
  }
];
