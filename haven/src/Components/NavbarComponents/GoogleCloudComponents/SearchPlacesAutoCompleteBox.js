import React, { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Card, TextField, Divider } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  gridStyle: {
    // alignItems: "flex-end",
  },
  inputStyle: {
    // backgroundColor: "#ffffff",
    background: "transparent",
    borderStyle: "solid",
    //borderColor: "white",
    //borderWidth: "thin",
    border: "0",
    //borderBottom: ".9px",
    //borderBottomColor: "#E0E0E0",
    //borderBottomStyle: "solid",
    fontSize: "25px",
    marginTop: "2px",
    // marginBottom: "10px",
    color: "white",
    // maxWidth: "400px",
    outline: "none",
  },
  nearTypographyStyle: {
    marginRight: "11px",
    marginTop: "2px",
    marginBottom: "2px",
    marginLeft: "10px",
    color: "white",
  },
  nearCardStyle: {
    backgroundColor: "#65B6FF",
    borderRadius: "0",
    maxHeight: "35px",
    //opacity: "0.1",
  },

  innerSearchBoxGridStyle: {
    backgroundColor: "#48A7FF",
    // minWidth: "600px",
  },
  SearchBoxGridStyle: {
    backgroundColor: "#48A7FF",
    minWidth: "300px",

    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "thin",
  },
  listStyle: {
    // listStyleType: "none",
  },
  resultGridStyle: {
    marginTop: "7px",
    color: "white",
  },
  renderSuggestionsStyle: {
    // backgroundColor: "#FFFFFF",
  },
  dividerStyle: {
    backgroundColor: "white",
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
        <div
          key={id}
          onClick={handleSelect(suggestion)}
          className={classes.listStyle}
        >
          <Grid
            container
            direction="column"
            className={classes.resultGridStyle}
          >
            <Grid item>
              <strong>{main_text}</strong>{" "}
            </Grid>
            <Grid item>
              <small>{secondary_text}</small>
            </Grid>
            <Divider className={classes.dividerStyle} />
          </Grid>
        </div>
      );
    });

  useEffect(() => {
    var description = props.address;
    setValue(description, false);
    getCoor({ description });
  }, [props.address]);

  console.log("value", value);
  return (
    <Card className={classes.SearchBoxGridStyle} ref={ref}>
      <Grid container>
        <Grid container item xs={3}>
          <Card elevation={0} className={classes.nearCardStyle}>
            <Typography className={classes.nearTypographyStyle} variant="h5">
              near
            </Typography>
          </Card>
        </Grid>
        <Grid container item xs={9}>
          <Card elevation={0} className={classes.innerSearchBoxGridStyle}>
            <Grid container direction="row" className={classes.innerGridStyle}>
              {/*
                 <Grid item xs={2}>
                <Typography className={classes.nearStyle} variant="h5">
                  near
                </Typography>
              </Grid>
              </Grid>
                */}

              <Grid item>
                <input
                  value={value}
                  type="text"
                  onChange={handleInput}
                  disabled={!ready}
                  id="fname"
                  placeholder="Your Neighborhood or Street"
                  className={classes.inputStyle}
                />
              </Grid>

              {/* We can use the "status" to decide whether we should display the dropdown or not */}
              {status === "OK" && (
                <div className={classes.renderSuggestionsStyle}>
                  {renderSuggestions()}
                </div>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
