import React from "react";

function Card(props) {
    return (
        <div className="w-lg rounded overflow-hidden shadow-lg">
            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.trailName}</div>
                 <p className="text-gray-700 text-base">{props.summary}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.loc}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.dif}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.type}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.stars}stars</span>
            </div>
            
            <img className="w-full" src={props.image}></img>
            
        </div>

    )
};

export default Card;