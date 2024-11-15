

import React from 'react';
import { AiOutlineEye, AiOutlineShareAlt, AiFillStar } from 'react-icons/ai';

const NewsCard = (props ={}) => {
  const { news } = props || {};
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img
            src={news.thumbnail_url}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-800">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{news.details.slice(0, 100)}...</p>
        <a href="#" className="text-blue-500 font-semibold text-sm">
          Read More
        </a>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500 mr-1" />
          <span>{news.rating.number}</span>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineEye />
          <span>{news.total_view}</span>
          <AiOutlineShareAlt />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
