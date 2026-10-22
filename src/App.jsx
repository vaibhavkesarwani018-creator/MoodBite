import { useState } from "react";
import "./App.css";
const moods = [
  { name: "Happy", emoji: "😊", description: "Celebrate your good mood" },
  { name: "Sad", emoji: "😔", description: "Find some comfort food" },
  { name: "Stressed", emoji: "😫", description: "Take a relaxing food break" },
  { name: "Tired", emoji: "😴", description: "Get something energizing" },
  { name: "Bored", emoji: "🥱", description: "Try something exciting" },
  { name: "Spicy Cravings", emoji: "🌶️", description: "Bring on the spice" },
  { name: "Celebratory", emoji: "🎉", description: "Treat yourself today" },
];
const dishes = [
  {
    name: "Pizza",
    emoji: "🍕",
    cuisine: "Italian",
    price: 250,
    moods: ["Happy", "Celebratory"],
    description: "A cheesy treat for a good day."
  },
  {
    name: "Masala Dosa",
    emoji: "🥞",
    cuisine: "South Indian",
    price: 100,
    moods: ["Happy", "Bored"],
    description: "A crispy dosa with flavorful masala."
  },
  {
    name: "Tomato Soup",
    emoji: "🍲",
    cuisine: "Indian",
    price: 120,
    moods: ["Sad", "Stressed"],
    description: "A warm and comforting bowl of soup."
  },
  {
    name: "Spicy Noodles",
    emoji: "🍜",
    cuisine: "Asian",
    price: 180,
    moods: ["Spicy Cravings", "Bored"],
    description: "Noodles with a spicy kick."
  },
  {
    name: "Chocolate Cake",
    emoji: "🍰",
    cuisine: "Dessert",
    price: 150,
    moods: ["Sad", "Celebratory"],
    description: "A sweet treat for a little comfort."
  },
  {
    name: "Veg Sandwich",
    emoji: "🥪",
    cuisine: "Continental",
    price: 90,
    moods: ["Tired", "Stressed"],
    description: "A quick and simple bite."
  }
];
function App() {
  const [selectedMood, setSelectedMood]=useState("");
  const recommendedDishes = dishes.filter((dish)=> dish.moods.includes(selectedMood));
  return (
      <div className="app">
        <header className="navbar">
            <h2 className="logo">MoodBite</h2>
            <span>Food for your mood</span>
        </header>
        <main className="hero">
            <p className="tagline">YOUR MOOD, YOUR FOOD</p>
            <h1>Cravings meet your mood.</h1>
            <p className="description">
            Find the perfect food for how you feel today.
            </p>
            <h2>How are you feeling today</h2>
            <div className="mood-grid">
              {moods.map((mood)=>(
                <div className={`mood-card ${selectedMood===mood.name ? "selected":""}`} key={mood.name}
                onClick={()=> setSelectedMood(mood.name)}>
                  <span className="mood-emoji">{mood.emoji}</span>
                  <h3>{mood.name}</h3>
                  <p>{mood.description}</p>
                </div>
              ))

              }
            </div>
            <button className="start-btn">Get Started →</button>
            {selectedMood && (
              <section className="recommendations">
                <h2>Food picks for your mood</h2>

                <div className="food-grid">
                  {recommendedDishes.map((dish)=>(
                    <div className="food-card" key={dish.name}>
                      <span className="food-emoji">{dish.emoji}</span>
                      <h3>{dish.name}</h3>
                      <p>{dish.description}</p>
                      <p>{dish.cuisine}</p>
                      <p>{dish.price}</p>
                    </div>
                  )
                  )

                  }
                </div>
              </section>
            )
            }

        </main>
      </div>
  );
}

export default App;