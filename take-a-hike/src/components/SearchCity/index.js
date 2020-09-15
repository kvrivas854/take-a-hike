import React from "react";

function SearchCity (props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="lat">Search for a place:</label>
        <input
          value={props.place}
          onChange={props.handleInputChange}
          type="text"
          name="place"
          className="form-control"
          id="place"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchCity;