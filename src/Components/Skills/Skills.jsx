import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container-main">
      <h1 className="main-head1">Skills</h1>
      <h2 className="main-head2">Here are some of my skills on which I have been working on for the past 2 years.</h2>
      <div className="container1">
        <div className="skills-container">
          <h2 className="skills-head">Problem Solving</h2>
          <div className="main-skills">
            <div className="skills">
              <img src="./javaicon.png" className="fa-brands" alt="" />
              <h5>Java</h5>
            </div>
            <div className="skills">
              <h5>DSA</h5>
            </div>
          </div>
        </div>
        <div className="skills-container">
        <h2 className="skills-head">Frontend </h2>
          <div className="main-skills">
            <div className="skills">
              <i class="fa-brands fa-html5 fa-2x" style={{color:"#e6700f"}}></i>
              <h5>HTML</h5>
            </div>
            <div className="skills">
              <i class="fa-brands fa-css3-alt fa-2x" style={{color:"#1060ea"}}></i>
              <h5>CSS</h5>
            </div>
            <div className="skills">
              <i class="fa-brands fa-js fa-2x" style={{color:"#FFD43B"}}></i>
              <h5>Javascript</h5>
            </div>
            <div className="skills">
            <i class="fa-brands fa-react fa-2x" style={{color:"#167fd0"}}></i>
              <h5>React</h5>
            </div>
            <div className="skills">
            <i class="fa-brands fa-bootstrap fa-2x" style={{color:"#4014e1"}}></i>
              <h5>Bootstrap</h5>
            </div>
            <div className="skills">
            <img src="icon.png" className="fa-brands" alt="" />
              <h5>Material UI</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container1">
            <div className="skills-container">
                <h2 className="skills-head">Backend</h2>
                <div className="main-skills">
                    <div className="skills">
                    <i class="fa-brands fa-node-js fa-2x" style={{color:"#0ac720"}}></i>
                    <h5>Node JS</h5>
                    </div>
                    <div className="skills">
                        <img src="./expressicon.png" className="fa-brands" alt="" />
                        <h5>Express JS</h5>
                    </div>
                    <div className="skills">
                        <img src="./mongoicon.png" className="fa-brands" alt="" />
                        <h5>MongoDB</h5>
                    </div>
                    <div className="skills">
                        <img src="./mysqlicon.png" className="fa-brands" alt="" />
                        <h5>My SQL</h5>
                    </div>
                </div>
            </div>
            <div className="skills-container">
                <h2 className="skills-head">Tools</h2>
                <div className="main-skills">
                    <div className="skills">
                        <img src="./vscodeicon.png" className="fa-brands" alt="" />
                        <h5>VS Code</h5>
                    </div>
                    <div className="skills">
                        <img src="./giticon.png" className="fa-brands" alt="" />
                        <h5>Git</h5>
                    </div>
                    <div className="skills">
                        <img src="./githubicon.png" className="fa-brands" alt="" />
                        <h5>Github</h5>
                    </div>
                    <div className="skills">
                        <img src="./intellijicon.png" className="fa-brands" alt="" />
                        <h5>IntelliJ IDEA</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;
