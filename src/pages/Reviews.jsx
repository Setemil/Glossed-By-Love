import React from "react";
import { useState, useEffect } from "react";
import {
  Star,
  Mail,
  Clock,
  Heart,
  Users,
  Lightbulb,
  AlertCircle,
} from "lucide-react";

const ReviewsPage = () => {
  const [reviewsData, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.sheetbest.com/sheets/61c4a7ab-ebbf-4df2-a334-903eb807511d"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  // Helper function to get rating from the data
  const getRating = (review, type) => {
    const ratingKeys = Object.keys(review).filter((key) => key.includes(type));
    for (let key of ratingKeys) {
      if (review[key] === "Column 1") {
        const stars = (key.match(/⭐️/g) || []).length;
        return stars;
      }
    }
    return 0;
  };

  // Helper function to render stars
  const renderStars = (rating, maxStars = 5) => {
    return Array.from({ length: maxStars }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  // Helper function to format timestamp
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <br />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            What our customers are saying about our products
          </p>
          <div className="w-32 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="mb-8 grid gap-12 lg:grid-cols-2 xl:gap-16">
          {reviewsData.slice(0, 10).map((review, index) => {
            const satisfactionRating = getRating(
              review,
              "Customer Satisfaction and Brand Love"
            );
            const recommendationRating = getRating(
              review,
              "How likely are you to recommend"
            );

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Header with ratings */}
                <div className="bg-pink-500 p-8 text-white">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6" />
                      <span className="text-base font-medium">
                        {review["Email Address"]?.split("@")[0]}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">
                        {formatDate(review["Timestamp"])}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" rounded-xl p-5">
                      <div className="flex items-center space-x-3 mb-4">
                        <Heart className="w-5 h-5" />
                        <span className="text-base font-semibold">
                          Satisfaction
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        {renderStars(satisfactionRating)}
                      </div>
                    </div>

                    <div className=" rounded-xl p-5">
                      <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-5 h-5" />
                        <span className="text-base font-semibold">
                          Recommendation
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        {renderStars(recommendationRating)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-8">
                    {/* What they love */}
                    <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-4 flex items-center text-lg">
                        <Heart className="w-5 h-5 mr-3" />
                        What they love most
                      </h4>
                      <p className="text-green-700 text-base leading-relaxed">
                        {review["What do you love most about our lipglosses "]}
                      </p>
                    </div>

                    {/* Features they enjoy */}
                    <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-800 mb-4 flex items-center text-lg">
                        <Star className="w-5 h-5 mr-3" />
                        Favorite features
                      </h4>
                      <p className="text-blue-700 text-base leading-relaxed">
                        {review["Which features do you enjoy the most ?"]}
                      </p>
                    </div>

                    {/* Additional requests */}
                    <div className="border-t border-gray-200 pt-8 flex justofy-center align-center">
                      <div>
                        <span className="font-bold text-gray-800 text-lg block mb-3">
                          Would love to see:
                        </span>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {
                            review[
                              "What would make you love our brand even more?"
                            ]
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-white rounded-3xl shadow-md border border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Review Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">
                {(
                  reviewsData.reduce(
                    (acc, review) =>
                      acc + getRating(review, "Customer Satisfaction"),
                    0
                  ) / reviewsData.length
                ).toFixed(1)}{" "}
                / 5
              </div>
              <div className="text-xl text-gray-600">Avg Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">
                {(
                  reviewsData.reduce(
                    (acc, review) =>
                      acc +
                      getRating(review, "How likely are you to recommend"),
                    0
                  ) / reviewsData.length
                ).toFixed(1)}{" "}
                / 5
              </div>
              <div className="text-xl text-gray-600">Avg Recommendation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
