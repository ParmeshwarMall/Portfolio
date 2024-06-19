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
      <h2 className="main-head2">
        I have worked on a wide range of projects. Here are some of my projects.
      </h2>
      <div className="projects-container">
        <div className="projects">
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "#242221",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ height: 180 }}
              image="BankMan.png"
              title="bank management system"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
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
              <a
                href="https://github.com/ParmeshwarMall/Bank-Website"
                target="_blank"
              >
                <h5 className="project-link">Github Link</h5>
              </a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "#242221",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ height: 180 }}
              image="StackOverflow.png"
              title="Stack Overflow"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Stack Overflow Clone
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                Creating a Stack Overflow clone using the MERN stack involves
                building a web application where users can register, ask
                questions, provide answers, and vote. The frontend is developed
                with React, the backend with Node.js and Express.js, and MongoDB
                is used for the database to store various data such as
                questions, answers, user info.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">React</h5>
              <h5 className="skill">Node JS</h5>
              <h5 className="skill">Express JS</h5>
              <h5 className="skill">MongoDB</h5>
              <a
                href="https://github.com/ParmeshwarMall/Stack-Overflow-Clone"
                target="_blank"
              >
                <h5 className="project-link">Github Link</h5>
              </a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "#242221",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ height: 180 }}
              image="portfolio.png"
              title="portfolio"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Portfolio
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
                I created a dynamic portfolio using React, a powerful JavaScript
                library for building user interfaces.It features a responsive
                design, ensuring an optimal viewing experience on various
                devices.The portfolio showcases my projects and skills with interactive components and smooth animations.It also includes a contact form that allows potential
                employers to easily get in touch with me.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">React</h5>
              <h5 className="skill">Material UI</h5>
              <a href="https://github.com/ParmeshwarMall/Portfolio" target="_blank">
                <h5 className="project-link">Github Link</h5>
              </a>
            </div>
          </Card>
        </div>
        <div className="projects">
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "#242221",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <CardMedia
              sx={{ height: 180 }}
              image="weather.png"
              title="Weather update"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                Weather Update
              </Typography>
              <Typography variant="body2" color="rgb(175, 167, 167)">
              Creating a weather update website using HTML, CSS, JavaScript, and EJS involves building a comprehensive web application that displays real-time weather information. The frontend is constructed using HTML to define the structure of the web pages and CSS to style and enhance the visual presentation.
              </Typography>
            </CardContent>
            <div className="used-skills">
              <h5 className="skill">HTML</h5>
              <h5 className="skill">CSS</h5>
              <h5 className="skill">JavaScript</h5>
              <h5 className="skill">EJS</h5>
              <a
                href="https://github.com/ParmeshwarMall/Weather-API"
                target="_blank"
              >
                <h5 className="project-link">Github Link</h5>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
