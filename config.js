// config.js — Update everything here

const CONFIG = {
  brand: "Crunchy Bites Snacks",
  tagline: "Taste the real crunch.",
  price: "₹59",
  weight: "100gm",
  offer: "Buy 3 Get 1 Free 🎉",
  description:
    "Made with real ingredients, packed with maximum crunch in every single bite. Once you open it — you can't stop!",
  address: "310 Z1, Hemant Vihar, Barra 2, Kanpur",
  phone: "8354004744",
  madeBy: "Babamosie333",
  year: "2026",

  // 3 flavours (add/update here only)
  products: [
    {
      id: "classic",
      name: "Classic Salted",
      flavor: "Classic Salted",
      badge: "Simple. Light. Timeless.",
      emojiFallback: "🧂",
      img: "/Images/classic-salted.png" // e.g. "./images/classic-salted.png" when you have it
    },
    {
      id: "spicy",
      name: "Spicy Masala",
      flavor: "Spicy Masala",
      badge: "Desi masala with a spicy kick.",
      emojiFallback: "🌶️",
      img: "/Images/spicy-masala.png" // e.g. "./images/spicy-masala.png"
    },
    {
      id: "chilli",
      name: "Chilli Chatka",
      flavor: "Chilli Chatka",
      badge: "Extra tangy, extra spicy, full chatka.",
      emojiFallback: "🔥",
      img: "/Images/chilli-chatka.png" // e.g. "./images/chilli-chatka.png"
    }
  ]
};
