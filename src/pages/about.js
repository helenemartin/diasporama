import React, { useState, useEffect } from "react";
// import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";
import ReviewCard from "../components/reviewCard/ReviewCard";
import "./about.css";

export function About() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/getReviews/"
      ).catch(function (err) {
        console.log("error in retrieving the API response", err);
      });
      const reviews = await response.json();
      onFetchCompleted();
      setReviews(reviews);
    };

    fetchData();
  }, [setReviews]);

  function onFetchCompleted() {
    setLoading(false);
  }
  const cardLeft = reviews.filter((review, index) => {
    return index % 2 === 0 ? true : false;
  });
  const cardRight = reviews.filter((review, index) => {
    return index % 2 !== 0 ? true : false;
  });
  return (
    <>
      {!loading && (
        <>
          <h1>Reviews ({reviews.length})</h1>
          <div className="review-card-layout-wrapper">
            <div className="review-card-layout ">
              {cardLeft.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })}
            </div>
            <div className="review-card-layout ">
              {cardRight.map((review, index) => {
                return <ReviewCard review={review} key={index} />;
              })}
            </div>
          </div>
        </>
      )}

      {/* <ReviewList onFetchCompleted={onFetchCompleted} reviews={reviews} /> */}
      {loading && <Loader />}
    </>
  );
}
