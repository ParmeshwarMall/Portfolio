import React from "react";
import './Body.css'

const Body = () => {
  return (
    <div className="main_body">
      <div className="main_content">
        <h1 className="main_head">Hi, I am </h1>
        <h1 className="main_head">Parmeshwar Mall</h1>
        <h2 className="animated-text1 text">I am Software Developer</h2>
        {/* <h2 className="animated-text2 text">I am Web Developer</h2> */}
        <h3 className="cont">
          As a dedicated B.Tech Computer Science student, I am passionate about
          using technology to solve real-world problems. My academic studies
          have given me a strong foundation in software development, algorithms,
          data structures, and system design. I have gained practical experience
          through various projects and internships, applying my knowledge
          effectively.
        </h3>
        <h3 className="cont">
          I am skilled in programming languages like Python, Java, and C++, and
          I have experience with web development technologies such as HTML, CSS,
          JavaScript, and frameworks like React and Node.js. I am also
          proficient in managing databases with SQL and NoSQL, and I excel in
          analytical and problem-solving tasks.
        </h3>
        <div className="social_icons">
        <a href="https://www.linkedin.com/feed/" target="_blank"><i class="fa-brands fa-linkedin icons fa-2x"></i></a>
        <a href=""><i class="fa-brands fa-square-instagram icons fa-2x"></i></a>
        <a href=""><i class="fa-brands fa-facebook icons fa-2x"></i></a>
        <a href=""><i class="fa-brands fa-square-x-twitter icons fa-2x"></i></a>
        </div>
      </div>
      <div className="main_image">
        <img src="../../public/logo.jpg" alt="img" />
      </div>
    </div>
  );
};

export default Body;
