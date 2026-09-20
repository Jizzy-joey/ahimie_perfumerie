export const perfumes = [
  {
    id: 1,
    name: "Oud Royale",
    price: 45000,
    description: "A rich, woody scent with deep oriental notes for timeless sophistication.",
    image: "/pef2.jpg"
  },
  {
    id: 2,
    name: "Amber Bliss",
    price: 38000,
    description: "Warm amber and soft vanilla blend for a cozy yet elegant fragrance."
   image: "/pef2.jpg"},
  {
    id: 3,
    name: "Citrus Spark",
    price: 25000,
    description: "Fresh citrus burst with hints of bergamot, perfect for daily wear."
  },
  {
    id: 4,
    name: "Velvet Rose",
    price: 42000,
    description: "Romantic floral fragrance with notes of rose petals and musk."
  },
  {
    id: 5,
    name: "Midnight Noir",
    price: 50000,
    description: "Dark, intense scent with smoky undertones for evening elegance."
  },
  {
    id: 6,
    name: "Golden Sandalwood",
    price: 47000,
    description: "Smooth sandalwood and spicy notes create a luxurious, calming aura."
  },
  {
    id: 7,
    name: "Ocean Mist",
    price: 30000,
    description: "A refreshing aquatic fragrance with sea breeze and citrus notes."
  },
  {
    id: 8,
    name: "Exotic Spice",
    price: 44000,
    description: "A bold mix of cardamom, cinnamon, and patchouli for adventurous souls."
  },
  {
    id: 9,
    name: "Jasmine Bloom",
    price: 35000,
    description: "Delicate jasmine and white florals blend for a soft, romantic aura."
  },
  {
    id: 10,
    name: "Royal Musk",
    price: 39000,
    description: "Elegant musk with hints of ambergris, perfect for refined occasions."
  },
  {
    id: 11,
    name: "Cedar Breeze",
    price: 28000,
    description: "Crisp cedarwood with light herbal tones for a natural, earthy scent."
  },
  {
    id: 12,
    name: "Vanilla Luxe",
    price: 36000,
    description: "Sweet vanilla and caramel notes wrapped in creamy sophistication."
  },
  {
    id: 13,
    name: "Oriental Charm",
    price: 46000,
    description: "A magnetic fusion of oud, saffron, and incense for lasting allure."
  },
  {
    id: 14,
    name: "Emerald Citrus",
    price: 27000,
    description: "A zesty mix of lime, mandarin, and mint for a fresh, youthful vibe."
  }
];

// Example: Display them in console
perfumes.forEach(perfume => {
  console.log(`${perfume.name} - ₦${perfume.price.toLocaleString()} \n${perfume.description}\n`);
});
