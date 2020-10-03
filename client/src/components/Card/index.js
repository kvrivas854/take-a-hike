import React from "react";
import "./style.css"


function Card(props) {
console.log(props.index)
    return (

    <div className="flex">
        <div className="box-border sm:box-content m-4">
        <div className="bg-gray-100 px-6 pt-4 pb-2 focus:outline-none focus:shadow lobster font-bold text-xl">{props.trailName}</div>
            <div className="relative open-sans bg-white px-6 py-4">
            
                <div className="flex">
                    <img className="p-2 h-32 w-32 rounded-full sm:box-content" src={props.image} alt ="error: not found"/>
                    <div className="flex flex-col">
                        <h4 className="p-2">{props.stars} Stars</h4>
                        <p className="rounded p-2 text-base">{props.summary}</p>
                        <button className="w-max-content bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-4 mt-4 border-b-2 hover:border-green-500 rounded" data-id={props.index} onClick={props.handleClick}>
                            + Add to favorites
                        </button>
                    </div>
                 </div>
                 <h3 className="">{props.condition}</h3>
                 <h3 className="">{props.ascent}</h3>
                 <h3 className="">{props.length}</h3>
            </div>
            <div className=" bg-gray-100 px-6 pt-4 pb-2 hover:bg-gray-500 focus:outline-none focus:shadow">
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-black-200 mr-2 mb-2">{props.loc}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-black-200 mr-2 mb-2">#{props.dif}</span>
                <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-black-200 mr-2 mb-2">#{props.type}</span>

            </div>
        </div>
    </div>
    
        
    )
};

export default Card;