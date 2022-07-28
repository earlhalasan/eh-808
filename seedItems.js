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
    { name: "Snare", emoji: "🥁", category: categories[0], price: 5.95 },
    {
      name: "Drum Machine",
      emoji: "⏯",
      category: categories[0],
      price: 6.95,
    },
    { name: "Congo", emoji: "🪘", category: categories[0], price: 3.95 },
    { name: "Guitar", emoji: "🎸", category: categories[1], price: 14.95 },
    {
      name: "Banjo",
      emoji: "🪕",
      category: categories[1],
      price: 13.95,
    },
    {
      name: "Chello",
      emoji: "🎻",
      category: categories[1],
      price: 25.95,
    },
    { name: "Saxophone", emoji: "🎷", category: categories[2], price: 1.95 },
    { name: "Trumpet", emoji: "🎺", category: categories[2], price: 4.95 },
    { name: "French Horn", emoji: "📯", category: categories[2], price: 3.95 },
    { name: "Piano", emoji: "🎹", category: categories[3], price: 7.95 },
    { name: "Accordian", emoji: "🪗", category: categories[3], price: 1.95 },
    { name: "Microphone", emoji: "🎤", category: categories[4], price: 2.95 },
  ]);

  console.log(items);

  process.exit();
})();
