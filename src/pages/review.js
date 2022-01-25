import React, { useState, useEffect } from "react";
// import ReviewList from "../components/reviewList/reviewList.js";
import Revues from "../fixtures/reviews.json";
import Loader from "../components/loader";
import ReviewCard from "../components/reviewCard/ReviewCard";
import Navbar from "../components/nav/Navbar";
import "./review.css";

export function Review() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      // const reviews = Revues;
      onFetchCompleted();
      setReviews(Revues);
    };

    fetchData();
  }, [setReviews]);

  function onFetchCompleted() {
    setLoading(false);
  }
  const cleanedReviews = reviews.map((review) => {
    const photo = review[2];
    const ownerName = review[1];
    const object = review[0];
    object.photo = photo;
    object.ownerName = ownerName;
    return object;
  });
  // cleanedReviews.push({ id: "0000" });
  console.log(cleanedReviews);
  const cardLeft = [];

  const cardRight = [];
  cleanedReviews.forEach((review, index) => {
    if (index % 2 === 0) {
      cardLeft.push(review);
    } else {
      cardRight.push(review);
    }
  });

  return (
    <>
      {!loading && (
        <>
          <Navbar />
          <div className="review-header">
            <h1>Reviews</h1>
          </div>
          <div className="review-card-layout-wrapper">
            <div className="review-card-layout ">
              {[
                cardLeft.map((review, index) => {
                  return <ReviewCard review={review} key={index} />;
                }),
              ]}
            </div>
            <div className="review-card-layout ">
              {cardRight.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })}
            </div>
          </div>
        </>
      )}
      {loading && <Loader />}
    </>
  );
}
