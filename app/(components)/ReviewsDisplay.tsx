import React from "react";
import { IconStarFilled } from "@tabler/icons-react";

interface ReviewsDisplayProps {
  rating: number;
}

const ReviewsDisplay: React.FC<ReviewsDisplayProps> = ({ rating }) => {
  return (
    <div>
      <div className="flex">
        <IconStarFilled
          className={`${rating > 0 ? "text-star" : "text-gray-300"} `}
        />
        <IconStarFilled
          className={`${rating > 1 ? "text-star" : "text-gray-300"} `}
        />
        <IconStarFilled
          className={`${rating > 2 ? "text-star" : "text-gray-300"} `}
        />
        <IconStarFilled
          className={`${rating > 3 ? "text-star" : "text-gray-300"} `}
        />
        <IconStarFilled
          className={`${rating > 4 ? "text-star" : "text-gray-300"} `}
        />
      </div>
    </div>
  );
};

export default ReviewsDisplay;
