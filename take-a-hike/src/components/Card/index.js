import React from "react";


function Card(props) {

    return (

    <div class="w-1/2">
    <div className="px-4 py-4 max-w-sm border rounded overflow-hidden shadow-lg pl-4 ml-6 mb-6">
            {/* <div className="w-full" style={{
                backgroundImage: props.image ? `url(${props.image})` : "none"}}>
            </div> */}
            <img className="p-6 m-2 w-54 h-54 border shadow-lg rounded" src={props.image} alt ="error: not found"></img>


            <div className="bg-green-700 px-6 py-4">
                <div className="font-bold text-black text-xl mb-2">{props.trailName}</div>
                 <p className="text-white rounded bg-green-300 p-4 text-base">{props.summary}</p>
            </div>

            <div className="rounded bg-green-500 px-6 pt-4 pb-2">
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">{props.loc}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.dif}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.type}</span>

            </div>
            
        </div>



        </div>
    
        
    )
};

export default Card;