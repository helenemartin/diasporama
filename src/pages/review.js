import React, { useState, useEffect } from "react";
// import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";
import ReviewCard from "../components/reviewCard/ReviewCard";
import Navbar from "../components/nav/Navbar";
import "./review.css";

export function Review() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./netlify/functions/getReviews").catch(
        function (err) {
          console.log("error in retrieving the API response", err);
        }
      );
      const reviews = await response.json();
      onFetchCompleted();
      setReviews(reviews);
    };

    fetchData();
  }, [setReviews]);

  function onFetchCompleted() {
    setLoading(false);
  }

  const cardLeft = [];

  const cardRight = [];
  reviews.forEach((review, index) => {
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
