import React, { useEffect, useState } from "react";
import DatingCard from "react-tinder-card";
import database from "./firebase";
import "./DatingCards.css";

function DatingCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {

    const unsub = database
    .collection('people')
    .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
    );

    return () => {
        unsub();
    }
  }, []);

  // const people = [];
  // people.push('dan', 'john')
  // setPeople([...people, 'dan', 'john'])
  return (
    <div>
      <div className="datingCards__cardContainer">
        {people.map((person) => (
          <DatingCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </DatingCard>
        ))}
      </div>
    </div>
  );
}

export default DatingCards;
