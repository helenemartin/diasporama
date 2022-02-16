import React from "react";
import Stars from "../stars/stars.js";
import "./ratings.css";

class Ratings extends React.Component {
  render() {
    return (
      <div>
        <ul className="stars-list">
          {Object.entries(this.props.review)

            .filter((item) => {
              return typeof item[1] === "number";
            })
            .map((item) => {
              return (
                <li className="stars-aligned" key={item[0]}>
                  <span className="word-rating-name">{wordSwap(item[0])}</span>
                  <span>
                    <Stars value={item[1]} />
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Ratings;

function wordSwap(key) {
  let keySwap;
  switch (key) {
    case "reliable":
      keySwap = "Vernacular";
      break;
    case "organised":
      keySwap = "Messianic";
      break;
    case "tidy":
      keySwap = "Clairvoyant";
      break;
    case "selfSufficient":
      keySwap = "Eloquent";
      break;
    case "petCare":
      keySwap = "Sassy";
      break;
    default:
      keySwap = key;
  }
  return keySwap;
}
