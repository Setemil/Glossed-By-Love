import React, { useState, useEffect } from 'react';
import { Star, Heart, Instagram, MessageCircle, User } from 'lucide-react';

const ReviewsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Hardcoded customer reviews (reduced to 4)
  const textReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      review: "Absolutely obsessed with the Berry Bliss lip balm! My lips have never felt so soft and the tint is perfect for everyday wear. Will definitely be ordering more!",
      product: "Berry Bliss Tinted Balm",
      date: "2 days ago",
      verified: true
    },
    {
      id: 2,
      name: "Jessica R.",
      rating: 5,
      review: "The Honey Glow balm is a game changer! I've tried so many lip products and this one actually keeps my lips moisturized all day. Plus it smells amazing!",
      product: "Honey Glow Lip Balm",
      date: "1 week ago",
      verified: true
    },
    {
      id: 3,
      name: "Emily K.",
      rating: 5,
      review: "I was skeptical at first but WOW! The Rose Petal balm not only feels luxurious but actually healed my chronically chapped lips. Customer for life! 💕",
      product: "Rose Petal Repair Balm",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Amanda L.",
      rating: 4,
      review: "Love the natural ingredients and the packaging is so cute! The Vanilla Dreams balm is my new go-to. Slightly pricey but totally worth it.",
      product: "Vanilla Dreams Balm",
      date: "3 weeks ago",
      verified: true
    }
  ];

  // Social media reviews
  const socialReviews = [
    {
      id: 1,
      platform: "instagram",
      username: "@beautybliss_sarah",
      content: "Can't stop using this lip balm! 😍 #lipcare #obsessed",
      likes: 234
    },
    {
      id: 2,
      platform: "instagram", 
      username: "@glowup_jess",
      content: "Before & after using this for just one week! 🤩✨",
      likes: 189
    },
    {
      id: 3,
      platform: "instagram",
      username: "@makeuplover_em", 
      content: "This collection is everything! 💕 Which shade should I try next?",
      likes: 156
    },
    {
      id: 4,
      platform: "instagram",
      username: "@skincare_amanda",
      content: "Natural ingredients that actually work! 🌿 My lips have never been happier",
      likes: 278
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 transition-colors duration-200 ${
              star <= rating 
                ? 'text-pink-400 fill-pink-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const TextReviewCard = ({ review, index }) => {
    return (
      <div 
        className={`bg-white rounded-2xl p-6 shadow-lg border border-pink-100 transition-all duration-700 ease-out transform ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        } hover:shadow-xl hover:scale-102 hover:border-pink-200`}
        style={{ 
          transitionDelay: `${index * 150}ms` 
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-md">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">{review.name}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <StarRating rating={review.rating} />
                {review.verified && (
                  <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500 font-medium">{review.date}</span>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed text-base">{review.review}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-pink-700 bg-pink-50 px-3 py-2 rounded-full border border-pink-200">
            {review.product}
          </span>
          <Heart className="w-5 h-5 text-pink-400 hover:text-pink-600 hover:fill-pink-600 cursor-pointer transition-all duration-200 transform hover:scale-110" />
        </div>
      </div>
    );
  };

  const SocialReviewCard = ({ review, index }) => {
    return (
      <div 
        className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-pink-100 transition-all duration-700 ease-out transform ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-12 opacity-0'
        } hover:shadow-xl hover:scale-102 hover:border-pink-200`}
        style={{ 
          transitionDelay: `${(index + 6) * 150}ms` 
        }}
      >
        <div className="aspect-square bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-rose-400/20"></div>
          <div className="text-center p-6 relative z-10">
            <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-3 drop-shadow-sm" />
            <p className="text-gray-600 text-xs mb-1 font-medium">Social Media Screenshot</p>
            <p className="text-xs text-gray-500">Replace with actual image</p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="font-semibold text-sm text-gray-800">{review.username}</span>
          </div>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">{review.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span className="text-sm text-gray-600 font-medium">{review.likes}</span>
            </div>
            <MessageCircle className="w-4 h-4 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-200" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Navigation spacer */}
      <div className="h-20"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-6 leading-tight">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Don't just take our word for it - see why thousands of customers are falling in love with our lip care products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-1">98%</div>
              <div className="text-sm text-gray-600 font-medium">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-20">
          <h2 className={`text-4xl font-bold text-center text-gray-800 mb-12 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            Customer Reviews
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {textReviews.map((review, index) => (
              <TextReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* Social Media Reviews Section */}
        <div className="mb-24">
          <h2 className={`text-4xl font-bold text-center text-gray-800 mb-16 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            Social Media Love
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialReviews.map((review, index) => (
              <SocialReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* Footer spacer */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default ReviewsPage;