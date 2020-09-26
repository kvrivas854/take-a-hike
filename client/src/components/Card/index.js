import React from "react";
import "./style.css"


function Card(props) {
console.log(props.index)
    return (

    <div class="w-1/2 text-center">
    <div className="box-border sm:box-content p-4 m-6 max-w-sm border rounded shadow-lg">
        


            <div className="relative open-sans bg-green-700 px-6 py-4">
            <img className="h-32 w-32 shadow-lg rounded sm:box-content" src={props.image} alt ="error: not found"/>
                <div className="lobster font-bold text-white text-xl mb-2">{props.trailName}</div>
                <h4 className="text-white">{props.stars} stars</h4>
                {/* <svg xmlns="http://www.w3.org/2000/svg" style={{height="10px", width="10px"}} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg> */}
                 <p className="text-white rounded bg-green-300 p-4 text-base">{props.summary}</p>
                 <h3 className="text-white">{props.condition}</h3>
                 <h3 className="text-white">{props.ascent}</h3>
                 <h3 className="text-white">{props.length}</h3>
            </div>

            <div className="rounded bg-green-500 px-6 pt-4 pb-2">
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">{props.loc}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.dif}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">#{props.type}</span>

            </div>
            
        </div>

        <button data-id={props.index} onClick={props.handleClick}>Save</button>

        </div>
    
        
    )
};

export default Card;