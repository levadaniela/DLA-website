// Material UI
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//CSS
import "./Portofolio.css";

//import photos
import myMentorLog from "../../images//myMentorLog.JPG";
import powAgle from "../../images/PowAgile.JPG";
import personalApp from "../../images/personalApp.JPG";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Projects = [
  {
    name: "Mentor Log Project",
    techUsed: ["React", "Auth0", "Back End"],
    photo: myMentorLog,
    link: "https://mymentorlog.netlify.app",
  },
  {
    name: "PowAgile",
    techUsed: ["React", "Socket.io", "MongoDB", "Cypress"],
    photo: powAgle,
    link: "https://powagile.netlify.app",
  },
  {
    name: "Personal Project",
    techUsed: ["Express Server", "Back End"],
    photo: personalApp,
    link: "http://localhost:3000",
  },
];

export default function Portofolio() {
  const classes = useStyles();

  return (
    <div className="row">
      {Projects.map((el) => (
        <div className="column">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={el.name}
                height="250"
                image={el.photo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.techUsed.map((el) => (
                    <li>{el}</li>
                  ))}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location.href = el.link;
                }}
              >
                Discover it!
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
