import React, { useState, useEffect, useCallback } from "react";
// import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";
import ReviewCard from "../components/reviewCard/ReviewCard";
import Navbar from "../components/nav/Navbar";
import "./review.css";

export function Review() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cardsRight, setCardsRight] = useState([]);
    const [cardsLeft, setCardsLeft] = useState([]);

    const fetchData = useCallback(async () => {
        setError(true);
        try {
            const response = await fetch("/.netlify/functions/getReviews/");
            const reviews = await response.json();

            const _cardsRight = [];
            const _cardsLeft = [];
            reviews.forEach((review, index) => {
                if (index % 2 === 0) {
                    _cardsLeft.push(review);
                } else {
                    _cardsRight.push(review);
                }
            });
            setCardsRight(_cardsRight);
            setCardsLeft(_cardsLeft);
            setError(false);

        } catch (error) {
            setError(true);
            console.log("error in retrieving the API response", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Navbar />
            <div className="review-header">
                <h1>Reviews</h1>
            </div>
            {error && <div className="review-card-error-wrapper">
                <p>Error Loading Reviews</p>
                <button disalbed={loading} onClick={fetchData}>try again</button>
            </div>}
            {!error && <div className="review-card-layout-wrapper">
                <div className="review-card-layout">
                    {cardsLeft.map((review, index) => {
                        return <ReviewCard review={review} key={index} />;
                    })}
                </div>
                <div className="review-card-layout">
                    {cardsRight.map((review, index) => {
                        return <ReviewCard review={review} key={index} />;
                    })}
                </div>
            </div>}
        </>
    );
}
