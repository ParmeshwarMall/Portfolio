import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main-project-container">
      <h1 className="main-head1">Projects</h1>
      <h1 className="main-head2"></h1>
      <div className="projects-container">
        <div className="projects">
          <Card sx={{ maxWidth: 345,backgroundColor:"#242221",color:"white" ,borderRadius:"20px"}}>
            <CardMedia sx={{ height: 180 }} image="./BankMan.png"
            title="bank management system" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"  textAlign="center">
                Bank Management System
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                Creating a bank website using the MERN stack involves developing
                a web application for managing bank accounts, transactions, and
                user profiles. The frontend is built with React, the backend
                with Node.js and Express.js, and MongoDB.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">React</h5>
              <h5 className="skill">Node JS</h5>
              <h5 className="skill">Express JS</h5>
              <h5 className="skill">MongoDB</h5>
              <h5 className="skill">Bootstrap</h5>
              <h5 className="skill">Material UI</h5>
              <a href="https://github.com/ParmeshwarMall/Bank-Website" target="_blank"><h5 className="project-link">Github Link</h5></a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card sx={{ maxWidth: 345,backgroundColor:"#242221",color:"white" ,borderRadius:"20px"}}>
            <CardMedia sx={{ height: 180 }} image="./StackOverflow.png" title="Stack Overflow" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Stack Overflow Clone
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                Creating a Stack Overflow clone using the MERN stack involves
                building a web application where users can register, ask
                questions, provide answers, and vote. The frontend is developed
                with React, the backend with Node.js and Express.js, and MongoDB
                is used for the database to store various data such as questions, answers, user info.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">React</h5>
              <h5 className="skill">Node JS</h5>
              <h5 className="skill">Express JS</h5>
              <h5 className="skill">MongoDB</h5>
              <a href="https://github.com/ParmeshwarMall/Stack-Overflow-Clone" target="_blank"><h5 className="project-link">Github Link</h5></a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card sx={{ maxWidth: 345,backgroundColor:"#242221",color:"white" ,borderRadius:"20px"}}>
            <CardMedia sx={{ height: 180 }} image="" title="Youtube" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Youtube Clone
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                Creating a YouTube clone using the MERN stack involves building
                a web application for uploading, viewing, and managing videos.
                The frontend is developed with React, the backend with Node.js
                and Express.js, and MongoDB is used for storing video metadata
                and user data.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">React</h5>
              <h5 className="skill">Node JS</h5>
              <h5 className="skill">Express JS</h5>
              <h5 className="skill">MongoDB</h5>
              <a href="" target="_blank"><h5 className="project-link">Github Link</h5></a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card sx={{ maxWidth: 345,backgroundColor:"#242221",color:"white",borderRadius:"20px"}}>
            <CardMedia sx={{ height: 180 }} image="" title="Weather update" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                Weather Update
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                Creating a weather update website using HTML, CSS,
                JavaScript,and EJS involves building a web application that
                displays real-time weather information.The frontend uses HTML
                and CSS for structure and styling,JavaScript for fetching
                weather data from an API, and EJS.
              </Typography>
            </CardContent>
            <div className="used-skills">
                <h5 className="skill">HTML</h5>
                <h5 className="skill">CSS</h5>
                <h5 className="skill">JavaScript</h5>
                <h5 className="skill">EJS</h5>
                <a href="https://github.com/ParmeshwarMall/Weather-API" target="_blank"><h5 className="project-link">Github Link</h5></a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
