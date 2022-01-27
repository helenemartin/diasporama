import React from "react";
import ReviewItem from "../reviewItem/reviewItem.js";
// import "./reviewList.css";
import styled from "styled-components";

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ReviewList({ reviews }) {
  // const [reviews, setReviews] = useState([]);
  const reviewsList = reviews.map((review, index) => {
    const stringId =
      "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
    const fullString = stringId.concat(review.photo.publicId.slice(24));

    return (
      <ReviewWrapper key={index}>
        <ReviewItem
          ownerName={review.ownerName}
          textDescription={review.description}
          review={review.review}
          location={review.location}
          country={review.country}
          fullString={fullString}
          startDate={review.startDate}
          endDate={review.endDate}
          border={review.border}
        />
      </ReviewWrapper>
    );
  });

  return <div>{reviewsList}</div>;
}
