import React from "react";

function SearchCity (props) {
  return (
    <form className="search">
      <div className="form-group">
        <div className="flex flex-wrap justify-evenly">
        <label htmlFor="lat" className="text-white px-2">Search for a place: </label>
        <input
          value={props.place}
          onChange={props.handleInputChange}
          type="text"
          name="place"
          className="form-control px-3 rounded"
          id="place"
        />

        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-4 mt-4 border-b-2 border-green-700 hover:border-green-500 rounded" type="submit" onClick={props.handleFormSubmit}>
          Search
        </button>
        </div>
      </div>
    </form>
  );
}

export default SearchCity;