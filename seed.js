require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

// IIFE - Immediately Invoked Function Expression
(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Drums", sortOrder: 10 },
    { name: "Stringed", sortOrder: 20 },
    { name: "Brass", sortOrder: 30 },
    { name: "Keys", sortOrder: 40 },
    { name: "Microphones", sortOrder: 50 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "PDP by DW Limited-Edition Dark Stain Maple and Walnut Snare",
      emoji: "🥁",
      category: categories[0],
      price: 295.99,
      description: "Snare size: 14 x 7-1/2 Case or Bag: Not applicable",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/J27842000001000-00-720x720.jpg",
    },
    {
      name: "Roland TR-08",
      emoji: "⏯",
      category: categories[0],
      price: 399.99,
      description:
        "Ultra-compact recreation of the legendary TR-808 drum machine Hands-on control including tone, level, tuning, and decay Added Compressor, Gain, Tune, and Pan for selected instruments",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/K40860000000000-00-720x720.jpg",
    },
    {
      name: "CP CP221 Tunable Bongos",
      emoji: "🪘",
      category: categories[0],
      price: 79.99,
      description: "Affordable price. Made of Asian hardwood. Traditional rims",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/440683000000000-00-720x720.jpg",
    },
    {
      name: "Fender American Professional II Telecaster",
      emoji: "🎸",
      category: categories[1],
      price: 1699.99,
      description: "Body type: Solidbody, single cutaway. Body wood: Alder",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L78043000003000-00-720x720.jpg",
    },
    {
      name: "Deering Calico Banjo Natural",
      emoji: "🪕",
      category: categories[1],
      price: 4899,
      description:
        "Curly Maple with a Honey Stain. Natural Ebony Fingerboard. 22 Glued In Nickel Silver Frets.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/518542000010000-00-720x720.jpg",
    },
    {
      name: "Yamaha SVC-210SK Silent Cello Brown",
      emoji: "🎻",
      category: categories[1],
      price: 3085.99,
      description:
        "Fully collapsible in both upper and lower bout. 3 reverb presets. Inner resonance chamber to give it an acoustic instrument feel",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/463028000008000-00-720x720.jpg",
    },
    {
      name: "Yamaha YAS-26 Standard Alto Saxophone",
      emoji: "🎷",
      category: categories[2],
      price: 2576,
      description:
        "New neck receiver with a durable screw. Adjustable thumb-rest. Improved Low B-C# connection",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/H95233000002000-00-720x720.jpg",
    },
    {
      name: "Yamaha YTR-4335GII Intermediate Bb Trumpet",
      emoji: "🎺",
      category: categories[2],
      price: 1699.99,
      description: "Great sound. Durable moving parts. Gold brass bell",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/H82866000001000-00-720x720.jpg",
    },
    {
      name: "Yamaha YHR-314II Student F French Horn",
      emoji: "📯",
      category: categories[2],
      price: 2529.99,
      description:
        "Mouthpipe taper designed for better response and intonation. Wrap allows easy hand position. Tough nickel silver inner and outer slides",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/463335000000000-00-720x720.jpg",
    },
    {
      name: "Nord Electro 6D Digital Piano 73 Key",
      emoji: "🎹",
      category: categories[3],
      price: 2999,
      description:
        "61 or 73 (depending on which you choose) velocity-sensitive semi-weighted waterfall keyboard. Three independent sound sections can be used simultaneously as a layer or a split. Six keyboard Split points (C3-F5) with Split Point Crossfade functionality",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L25753000000002-00-720x720.jpg",
    },
    {
      name: "Roland FR-1x V-Accordion Red",
      emoji: "🪗",
      category: categories[3],
      price: 2899.99,
      description:
        "Full-range, high-quality speakers onboard in bass reflex box: 7 W x 2. USB memory port for Wave/MP3 player, new-sounds upload, data loading/saving. Professional look with friendly user interface and 7-segment LED",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/J37911000001000-00-720x720.jpg",
    },
    {
      name: "Neumann TLM 103 Condenser Microphone",
      emoji: "🎤",
      category: categories[4],
      price: 1195,
      description:
        "Large-diaphragm cardioid microphone. Pressure gradient transducer with with one-diaphragm capsule. Transformerless circuitry.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/J52341000002000-00-720x720.jpg",
    },
  ]);

  console.log(items);

  process.exit();
})();
