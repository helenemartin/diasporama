import React from "react";
import ReviewItem from "../reviewItem/reviewItem";
import "./ReviewCard.css";



export default function ReviewCard({review}) {
    const stringId =
    "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
  const fullString = stringId.concat(review.photo.publicId.slice(24));
return (
    <div className="review-card-container">
        {/* <ReviewList review={review} /> */}
        <ReviewItem
          ownerName={review.ownerName}
          textDescription={review.description}
          review={review}
          location={review.location}
          country={review.country}
          fullString={fullString}
          startDate={review.startDate}
          endDate={review.endDate}
        />
      </div>
)

};