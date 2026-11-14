
import { useState } from "react";
import "./App.css";


const moods = [
    {
        name: "Cheesy",
        value: "cheesy",
        emoji: "🧀",
        description: "Give me something cheesy"
    },
    {
        name: "Spicy",
        value: "spicy",
        emoji: "🌶️",
        description: "Bring on the heat"
    },
    {
        name: "Celebratory",
        value: "celebratory",
        emoji: "🎉",
        description: "Time for a buffet"
    },
    {
        name: "Period Cravings",
        value: "period-cravings",
        emoji: "☕",
        description: "Something warm and comforting"
    },
    {
        name: "Sweet",
        value: "sweet",
        emoji: "🍰",
        description: "I need something sweet"
    }
];


function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function getRecommendations() {
    if (!selectedMood) {
      setError("Please select a mood first.");
      return;
    }

    setLoading(true);
    setError("");
    setRestaurants([]);
    setSearched(false);

    try {
      const url = `http://localhost:5001/api/recommend?mood=${encodeURIComponent(selectedMood)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setRestaurants(data);
      setSearched(true);

    } catch (err) {
      setError("Could not connect to the server. Check whether the backend is running.");
      console.log(err);
    }

    setLoading(false);
  }

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

        <h2>How are you feeling today?</h2>

        <div className="mood-grid">
          {moods.map((mood) => (
            <div
              className={`mood-card ${selectedMood === mood.value ? "selected" : ""}`}
              key={mood.name}
              onClick={() => setSelectedMood(mood.value)}
            >
              <span className="mood-emoji">{mood.emoji}</span>
              <h3>{mood.name}</h3>
              <p>{mood.description}</p>
            </div>
          ))}
        </div>

        <button
          className="start-btn"
          onClick={getRecommendations}
          disabled={!selectedMood || loading}
        >
          {loading ? "Finding places..." : "Get Started →"}
        </button>

        {error && <p className="error-message">{error}</p>}

        {searched && restaurants.length === 0 && !error && (
          <p>No matching restaurants found. Try another mood!</p>
        )}

        {restaurants.length > 0 && (
          <section className="recommendations">

            <h2>Places for your mood</h2>

            <div className="restaurant-grid">

              {restaurants.map((restaurant) => (
                <div className="restaurant-card" key={restaurant._id}>

                  <h3>{restaurant.name}</h3>

                  <p>
                    <strong>Area:</strong> {restaurant.area}
                  </p>

                  <p>
                    <strong>Address:</strong> {restaurant.address}
                  </p>

                  
                    <h4>Dishes available:</h4>

                    {restaurant.dishes && restaurant.dishes.length > 0 ? (

                        <ul>
                            {restaurant.dishes.map((dish) => (
                                <li key={dish._id}>
                                    {dish.name} - ₹{dish.price}
                                </li>
                            ))}
                        </ul>

                    ) : (

                        <p>
                            Buffet menu may vary.
                            Contact the restaurant for current details.
                        </p>

                    )}

                    <div className="restaurant-links">

                        {restaurant.mapUrl && (
                            <a
                                href={restaurant.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Location
                            </a>
                        )}

                        {restaurant.swiggyUrl && (
                            <a
                                href={restaurant.swiggyUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Swiggy
                            </a>
                        )}

                        {restaurant.zomatoUrl && (
                            <a
                                href={restaurant.zomatoUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Zomato
                            </a>
                        )}

                    </div>


                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + " " + restaurant.address)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Location on Google Maps →
                  </a>

                </div>
              ))}

            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default App;
