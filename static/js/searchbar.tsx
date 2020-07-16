import React, { Component } from "react";
import axios from "axios";

let ac: google.maps.places.Autocomplete;

interface PlacePropType{
  placeName: string;
}
class Chip extends Component<PlacePropType,{}> {
  render(){
    return (
      <span className="mdl-chip mdl-chip--deletable">
      <span className="mdl-chip__text">{this.props.placeName}</span>
      <button className="mdl-chip__action"><i className="material-icons">cancel</i></button></span>
    )
  }
}

interface SearchBarStateType{
  placeList: string[];
  newPlace: string;
}

class SearchBar extends Component<{}, SearchBarStateType> {
  constructor(props){
    super(props)
    this.state = {
      placeList:[],
      newPlace:"test",
    }
  }
  componentDidMount(){
      // Create the autocomplete object, restricting the search predictions to
      // geographical location types.
      const options = {
        types: ["(regions)"],
        fields: ["place_id", "name", "types"],
      };
      const acElem = document.getElementById("ac") as HTMLInputElement;
      ac = new google.maps.places.Autocomplete(acElem, options);
      ac.addListener("place_changed", this.getPlaceAndRender);
  }

  getPlaceAndRender() {
    // Get the place details from the autocomplete object.
    const place = ac.getPlace();
    axios
      .get(`api/placeid2dcid/${place.place_id}`)
      .then((resp) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("dcid", resp.data);
        window.location.search = urlParams.toString();
      })
      .catch(function (error) {
        console.log(error);
        alert("Sorry, but we don't have any data about " + name);
        const acElem = document.getElementById(
          "place-autocomplete"
        ) as HTMLInputElement;
        acElem.value = "";
        acElem.setAttribute("placeholder", "Search for another place");
      });
  }

  render() {
    return (
      <div id="location-field">
        <div id="search-icon"></div>
        <span id="place-list">
        <Place placeName={this.state.newPlace}/>
        <input
          id="ac"
          placeholder="Enter a country, state, county or city to get started"
          type="text"
        />
        <span id="place-name"></span>
        </span>
      </div>
    );
  }
}
export { SearchBar };
