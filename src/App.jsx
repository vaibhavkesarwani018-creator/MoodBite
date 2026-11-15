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
    const [selectedCity, setSelectedCity] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searched, setSearched] = useState(false);

    async function getRecommendations() {

        if (!selectedMood || !selectedCity) {
            setError("Please select both your mood and city.");
            return;
        }

        setLoading(true);
        setError("");
        setRestaurants([]);
        setSearched(false);

        try {

            const url = new URL(
                "http://localhost:5001/api/recommend"
            );

            url.searchParams.set("mood", selectedMood);
            url.searchParams.set("city", selectedCity);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Could not get recommendations");
            }

            const data = await response.json();

            setRestaurants(data);
            setSearched(true);

        } catch (error) {

            console.log(error);
            setError("Could not connect to the server.");

        } finally {

            setLoading(false);

        }

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
                            <span className="mood-emoji">
                                {mood.emoji}
                            </span>

                            <h3>{mood.name}</h3>

                            <p>{mood.description}</p>
                        </div>
                    ))}

                </div>

                <h2>Where are you looking to eat?</h2>

                <select
                    className="city-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    <option value="">Select your city</option>
                    <option value="bhilai">Bhilai</option>
                    <option value="jabalpur">Jabalpur</option>
                </select>

                <button
                    className="start-btn"
                    onClick={getRecommendations}
                    disabled={!selectedMood || !selectedCity || loading}
                >
                    {loading ? "Finding places..." : "Get Started →"}
                </button>

                {error && (
                    <p className="error-message">{error}</p>
                )}

                {searched && restaurants.length === 0 && !error && (
                    <p>No matching restaurants found. Try another mood!</p>
                )}

                {restaurants.length > 0 && (

                    <section className="recommendations">

                        <h2>Places for your mood</h2>

                        <div className="restaurant-grid">

                            {restaurants.map((restaurant) => (

                                <div
                                    className="restaurant-card"
                                    key={restaurant._id}
                                >

                                    <h3>{restaurant.name}</h3>

                                    <p>
                                        <strong>City:</strong> {restaurant.city}
                                    </p>

                                    <p>
                                        <strong>Location:</strong> {restaurant.address}
                                    </p>

                                    {restaurant.dishes && restaurant.dishes.length > 0 ? (

                                        <div>

                                            <h4>Available dishes:</h4>

                                            <ul>
                                                {restaurant.dishes.map((dish) => (
                                                    <li key={dish._id}>
                                                        {dish.name} - ₹{dish.price}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>

                                    ) : (

                                        <p>
                                            Menu details will be added soon.
                                            Please check the restaurant menu.
                                        </p>

                                    )}

                                    <div className="restaurant-links">

                                        {restaurant.mapUrl && (
                                            <a
                                                href={restaurant.mapUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                📍 Google Maps
                                            </a>
                                        )}

                                        {restaurant.swiggyUrl && (
                                            <a
                                                href={restaurant.swiggyUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Order on Swiggy
                                            </a>
                                        )}

                                        {restaurant.zomatoUrl && (
                                            <a
                                                href={restaurant.zomatoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                View on Zomato
                                            </a>
                                        )}

                                    </div>

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