require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

// IIFE - Immediately Invoked Function Expression
(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Drums", sortOrder: 10 },
    { name: "Guitars", sortOrder: 20 },
    { name: "Brass", sortOrder: 30 },
    { name: "Keys", sortOrder: 40 },
    { name: "Microphones", sortOrder: 50 },
    { name: "Studio Monitors", sortOrder: 60 },
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
      name: "Native Instruments MASCHINE+",
      emoji: "⏯",
      category: categories[0],
      price: 1299.99,
      description:
        "Quad-core processor. 4 GB dual channel DDR3L RAM. 32 GB internal eMMC flash storage (for OS and factory content).",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L78037000000000-00-720x720.jpg",
    },
    {
      name: "DW Performance Series 4-Piece Shell Pack White Marine",
      emoji: "🥁",
      category: categories[0],
      price: 2646,
      description: "Bass Drum(s): 26x20. Tom(s): 14x12. Floor Tom(s): 20x18",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/H89937000007000-00-720x720.jpg",
    },
    {
      name: "Pearl President Series Deluxe 3-Piece Shell Pack",
      emoji: "🥁",
      category: categories[0],
      price: 2646,
      description: "Bass Drum(s): 24x18. Tom(s): 12x9. Floor Tom(s): 16x14",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L85244000001000-00-720x720.jpg",
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
      name: "Ibanez RGD71ALMS Axion Label Multi-Scale 7-String",
      emoji: "🎸",
      category: categories[1],
      price: 1199.99,
      description:
        "Gloss finish flame maple top on layered ash/nyato body. Multi-scale 5-ply panga-panga/walnut 7-string neck, 24-fret Macassar ebony fingerboard. Dual Fluence Modern Ceramic humbuckers with selectable voicing and coil tap, 3-way switching.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L44507000001000-00-720x720.jpg",
    },
    {
      name: "Gibson Slash Les Paul Standard",
      emoji: "🎸",
      category: categories[1],
      price: 2999,
      description:
        "Mahogany body with AAA flamed maple top. 50s vintage mahogany neck with 22-fret rosewood fingerboard, ABR-1 Tune-o-matic bridge. Vintage keystone tuners, SlashBucker neck and bridge pickups.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L72812000006000-00-720x720.jpg",
    },
    {
      name: "PRS John Mayer Silver Sky Electric Guitar",
      emoji: "🎸",
      category: categories[1],
      price: 2649,
      description:
        "Gloss-finished, solid alder body. 25.5 scale maple neck with 22-fret, 7.25 radius rosewood fretboard. Custom John Mayer signature PRS single coils with 5-way blade switch",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L18249000009000-00-720x720.jpg",
    },
    {
      name: "Gibson Custom Explorer Custom Electric Guitar",
      emoji: "🎸",
      category: categories[1],
      price: 5299,
      description:
        "Gloss-finished, bound mahogany body. Mahogany neck, bound ebony fingerboard, bound headstock. Gibson Custom 498T/490R humbuckers with gold covers, 3-way switch.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L71542000001000-00-720x720.jpg",
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
      name: "Yamaha YBH-301M Series Marching Bb Baritone Silver",
      emoji: "🎺",
      category: categories[2],
      price: 2842.99,
      description: "Key: Bb. Bore: .571-inch. Bell: 10-inch.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/483650000994000-00-720x720.jpg",
    },
    {
      name: "Jupiter JTU1110 Performance Series 4-Valve BBb Tuba",
      emoji: "🎺",
      category: categories[2],
      price: 8534,
      description: "Key: Bb. Bore: 2-inch. Bell: 18-inch.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/483650000994000-00-720x720.jpg",
    },
    {
      name: "Yamaha YSH-301 Series Fiberglass BBb Sousaphone",
      emoji: "🎺",
      category: categories[2],
      price: 4584.99,
      description:
        "The Yamaha YSH-301 Series Fiberglass BBb Sousaphone makes marching easier with its lightweight construction and well-balanced design. In order to stand up to the rigorous demands of marching it is made with heavy-duty bracing.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/473582000991000-00-720x720.jpg",
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
      name: "Akai Professional MPK mini mk3 Keyboard",
      emoji: "🎹",
      category: categories[3],
      price: 199,
      description:
        "The MPK mini mk3 has something for every modern producer. Players of all levels will enjoy universal compatibility with their favorite DAWs. Eight pads and assignable controls give you full command of your production.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L76055000005000-00-720x720.jpg",
    },
    {
      name: "Native Instruments KOMPLETE KONTROL S49 MK2",
      emoji: "🎹",
      category: categories[3],
      price: 699,
      description:
        "With KOMPLETE KONTROL, music-making becomes a more intuitive, hands-on experience. Perform expressively, browse and preview sounds, tweak parameters, sketch your ideas, then navigate and mix your project – all from one fully integrated centerpiece for studio and stage. Now with the MK2 version of the KOMPLETE KONTROL S-Series, you'll have even greater control over your music.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/K41346000000000-00-720x720.jpg",
    },
    {
      name: "Akai Professional MPK249 49-Key Controller",
      emoji: "🎹",
      category: categories[3],
      price: 469,
      description:
        "The Akai Professional MPK249—now in a black-on-black finish—is a performance pad and keyboard controller that combines deep software integration, enhanced workflow and core technologies from the iconic line of MPC workstations.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L84264000000000-00-720x720.jpg",
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
    {
      name: "Shure SM7B Cardioid Dynamic Microphone",
      emoji: "🎤",
      category: categories[4],
      price: 399,
      description:
        "Capture crisp, clear vocals with the Shure SM7B cardioid dynamic microphone, perfect for streaming, podcasting, voice-over and singing. This is a durable workhorse of a mic with a rugged, all-metal construction that easily holds up to ongoing, daily use.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/270247000000000-00-720x720.jpg",
    },
    {
      name: "Blue Baby Bottle SL Large-Diaphragm Studio Condenser Microphone",
      emoji: "🎤",
      category: categories[4],
      price: 399,
      description:
        "The Baby Bottle SL is a pressure gradient cardioid condenser microphone with a classic sound and tremendous versatility. It has a richly present midrange, smooth top-end and neutral low-end with tonal characteristics similar to the world’s finest vintage microphones.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/J47956000000000-00-720x720.jpg",
    },
    {
      name: "Warm Audio WA-251 Large Diaphragm Condenser Microphone",
      emoji: "🎤",
      category: categories[4],
      price: 849,
      description:
        "The WA-251 was created to offer a classic microphone design to a new generation of recording artists at an affordable price. Warm Audio spent a great deal of time listening to different ‘251 microphones to determine what people liked about them and why, how various styles of components impact the tone, and how to give the WA251 microphone a signature that pays homage to the vintage classic, but also stands out on its own.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L48050000000000-00-720x720.jpg",
    },
    {
      name: "Telefunken TF11 Large Diaphragm Condenser Microphone",
      emoji: "🎤",
      category: categories[4],
      price: 895,
      description:
        "The Telefunken TF11 is a unique design with a new take on the large diaphragm phantom-powered condenser. Blending an Austrian-inspired voicing similar to the legendary C12 with modern FET high performance, the TF11 features a beautifully open and detailed frequency response with exceptionally fast transient response, high SPL handling, and low self-noise. ",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L79069000000000-00-720x720.jpg",
    },
    {
      name: "ADAM Audio A7V Two-Way Powered Studio Monitor",
      emoji: "🔊",
      category: categories[5],
      price: 800,
      description:
        "The ADAM Audio A series A7V speaker represents the evolution of ADAM Audio’s best-selling, award-winning A7X. The two-way A7V combines a new 7 woofer built from Multi-Layer Mineral (MLM) fibers and ADAM Audio’s handmade precision X-ART tweeter to deliver a wide frequency range of 41Hz to 42kHz.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L93323000000000-00-720x720.jpg",
    },
    {
      name: "Yamaha HS8 Powered Studio Monitor",
      emoji: "🔊",
      category: categories[5],
      price: 399,
      description:
        "This proven HS8 8 2-way powered studio monitor produces the flat, natural sound quality professionals count on to consistently create honest, accurate mixes. With its 8 woofer and 1 dome tweeter, the Yamaha HS8 carries enough weight to give you full-bodied sound without a subwoofer, yet also deliver the clarity you expect in the midrange, and the finesse to reproduce clean, smooth highs.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/H96225000000000-00-720x720.jpg",
    },
    {
      name: "KRK ROKIT 5 G4 Powered Studio Monitor",
      emoji: "🔊",
      category: categories[5],
      price: 399,
      description:
        "DSP-driven room tuning with 25 visual Graphic EQ settings help minimize and correct problems in your acoustic environment. Visualize the EQ settings with an LCD Graph while getting real-time helpful spectral analysis from the included KRK App. Compatible with Android and iPhone, the KRK App aids with monitor placement, level matching, subwoofer level and crossover setting assistance, polarity, EQ and even has a Signal Generator.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L48912000000000-00-720x720.jpg",
    },
    {
      name: "FOCAL Shape Twin Dual Powered Studio Monitor",
      emoji: "🔊",
      category: categories[5],
      price: 1299,
      description:
        "This standard bearer of the Shape series, the Shape Twin Dual 5 powered studio monitor features two passive radiators, woofers equipped with a Flax cone, and an “M”-shaped aluminum/magnesium inverted dome tweeter. It's the perfect weapon of mass production for professionals.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L19028000000000-00-720x720.jpg",
    },
    {
      name: "ADAM Audio A77H Three Way Powered Studio Monitor",
      emoji: "🔊",
      category: categories[5],
      price: 1299,
      description:
        "An advanced successor to the A77X, the ADAM Audio A Series A77H is a true three-way midfield monitor that capitalizes on the latest technologies to deliver a rich, spacious and enveloping sound. Incorporating two 7-inch woofers, a midrange driver and ADAM Audio’s X-ART tweeter, the A77H delivers an ultrawide frequency range. The addition of the midrange driver helps produce clear sound in the most sensitive range of human hearing. Rotatable HPS waveguide technology and onboard DSP allow you to tune the sound for your precise requirements.",
      image:
        "https://media.guitarcenter.com/is/image/MMGS7/L94677000000000-00-720x720.jpg",
    },
  ]);

  console.log(items);

  process.exit();
})();
