import axios from "../axios";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/api/cards");
      console.log("siiieet",req.data);
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction) => {
    console.log("You swiped: " + direction);
  };

  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <section className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            noSwipe={(dir) => swiped(dir, person.name)}
            noCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </section>
  );
}
