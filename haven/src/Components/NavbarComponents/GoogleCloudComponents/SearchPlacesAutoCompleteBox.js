import React, { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inputStyle: {
    border: "none",
    borderBottom: "1px",
    borderBottomColor: "#E0E0E0",
    borderBottomStyle: "solid",
    fontSize: "35px",
  },
  divStyle: {
    marginLeft: "8px",
  },
}));
export default function SearchPlacesAutoCompleteBox(props) {
  const classes = useStyles();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  /* PASS COORDINATES UP TO PARENT*/
  function updateCoorParent(coor) {
    props.updateCoorParent(coor);
  }
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getCoor({ description });
  };

  function getCoor({ description }) {
    var res = null;
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 GOOGLE API Coordinates: ", { lat, lng });
        res = { lat, lng };
        updateCoorParent({ lat: lat, long: lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
        res = error;
      });
    return res;
  }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    var description = props.address;
    setValue(description, false);
    getCoor({ description });
  }, [props.address]);

  return (
    <div className={classes.divStyle} ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Your Neighborhood or Street"
        className={classes.inputStyle}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
}
