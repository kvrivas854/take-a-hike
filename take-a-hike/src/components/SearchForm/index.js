import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="lat">Latitude:</label>
        <input
          value={props.lat}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          id="lat"
        />
        <label htmlFor="lon">Longitude:</label>
        <input
          value={props.lon}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          id="lon"
        />
        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;