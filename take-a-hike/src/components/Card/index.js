import React from "react";


function Card(props) {
    return (

        
        <div className=" py-4 max-w-sm rounded overflow-hidden shadow-lg">
            {/* <div className="w-full" style={{
                backgroundImage: props.image ? `url(${props.image})` : "none"}}>
            </div> */}
            <img className="w-full rounded" src={props.image} alt ="error: not found"></img>

            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">{props.trailName}</div>
                 <p className="text-white rounded bg-green-300 p-4 text-base">{props.summary}</p>
            </div>

            <div className="rounded px-6 pt-4 pb-2">
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">{props.loc}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.dif}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.type}</span>

            </div>
            
            <img className="w-full" src={props.image}></img>
            
        </div>
    )
};

export default Card;