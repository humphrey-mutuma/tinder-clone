import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Sophia",
      imgUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Isabella",
      imgUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Emma",
      imgUrl: "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Olivia",
      imgUrl: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ]);

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
