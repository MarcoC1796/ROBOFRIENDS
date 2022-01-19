import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, i) => {
    // Key helps react with reusability,
    // so that it only renders what changes in the webpage
    // and not the entire DOM
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <>{cardsArray}</>;
};

export default CardList;
