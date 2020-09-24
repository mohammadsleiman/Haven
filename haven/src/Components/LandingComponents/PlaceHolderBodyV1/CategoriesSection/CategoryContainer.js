import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import naturecategory from "./CategoryImages/naturecategory.png";
import repaircategory from "./CategoryImages/repaircategory.jpg";

const useStyles = makeStyles(() => ({
  innerGridStyle: {
    textAlign: "center",
  },
  categoryCardStyle: { marginTop: "35px", marginBottom: "35px" },
  categoryCardMediaStyle: { height: "200px", width: "200px" },
  categoryTypographyStyle: {
    color: "white",
    position: "absolute",
    marginTop: "-35px",
    marginLeft: "10px",
  },
}));
export default function CategoryContainer(props) {
  const classes = useStyles();

  return (
    <Grid item container xs={12} className={classes.outerGridStyle}>
      <Grid item xs={2}></Grid>
      <Grid
        container
        item
        xs={8}
        direction="column"
        className={classes.innerGridStyle}
      >
        <Typography variant="h4"> find a bike friendly destination</Typography>

        <Grid container item>
          <Grid container item xs={3}>
            <Card className={classes.categoryCardStyle}>
              <CardActionArea>
                <CardMedia
                  className={classes.categoryCardMediaStyle}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/440px-A_small_cup_of_coffee.JPG"
                  }
                  component="img"
                />
                <Typography
                  variant="h5"
                  className={classes.categoryTypographyStyle}
                >
                  coffee
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid container item xs={3}>
            <Card className={classes.categoryCardStyle}>
              <CardActionArea>
                <CardMedia
                  className={classes.categoryCardMediaStyle}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
                  }
                  component="img"
                />
                <Typography
                  variant="h5"
                  className={classes.categoryTypographyStyle}
                >
                  landmark
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid container item xs={3}>
            <Card className={classes.categoryCardStyle}>
              <CardActionArea>
                <CardMedia
                  className={classes.categoryCardMediaStyle}
                  image={naturecategory}
                  component="img"
                />
                <Typography
                  variant="h5"
                  className={classes.categoryTypographyStyle}
                >
                  nature
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid container item xs={3}>
            <Card className={classes.categoryCardStyle}>
              <CardActionArea>
                <CardMedia
                  className={classes.categoryCardMediaStyle}
                  image={repaircategory}
                  component="img"
                />
                <Typography
                  variant="h5"
                  className={classes.categoryTypographyStyle}
                >
                  bike repair shop
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
