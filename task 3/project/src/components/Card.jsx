import React from "react";

const Card = (props) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden relative">
      <div
        className="h-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${props.coverImage})` }}
      />

      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <img
          src={props.avatar}
          alt={props.name}
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
        />
      </div>

      <div className="pt-14 px-4 pb-4 text-center">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{props.role}</p>

        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p className="font-semibold">{props.posts}</p>
            <p className="text-gray-500">Posts</p>
          </div>
          <div>
            <p className="font-semibold">{props.likes}</p>
            <p className="text-gray-500">Likes</p>
          </div>
          <div>
            <p className="font-semibold">{props.views}</p>
            <p className="text-gray-500">Views</p>
          </div>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
