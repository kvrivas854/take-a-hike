import React from "react";

function Card(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <div className="w-full" style={{
                backgroundImage: props.image ? `url(${props.image})` : "none"}}>
            </div> */}
            <img className="w-full" src={props.image}></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.trailName}</div>
                 <p className="text-gray-700 text-base">{props.summary}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
};

export default Card;