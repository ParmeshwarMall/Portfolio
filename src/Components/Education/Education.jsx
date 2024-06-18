import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Education.css'
import logo from "./schoollogo.png"

const Education = () => {

  return (
    <div className="education-container">
      <h1 className="main-head1">Education</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education custom-timeline-element"
          date="2021-2025"
          iconStyle={{ background: "#6c757d", color: "#fff" }}
          icon={<i className="fas fa-graduation-cap fa-2x"></i>}
        >
         <div className="content">
         <h3 className="vertical-timeline-element-title">
            Shri Ramswaroop Memorial University, Lucknow
          </h3>
          <h3 className="vertical-timeline-element-subtitle">
            Bachelor of Technology- B.Tech Computer Science and Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Grade: 8.7 CGPA</h4>
          <p >
            I am currently pursuing Bachelor's degree in Computer Science and Engineering at Shri Ramswaroop Memorial University, Lucknow. I have completed 6 semester and have a CGPA of 8.70.
          </p>
         </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education custom-timeline-element"
          date="2020 - 2021"
          iconStyle={{ background: "#6c757d", color: "#fff" }}
          icon={<img src={logo} className="fas school-logo"/>}
        >
          <h3 className="vertical-timeline-element-title">
            Prestige Inter College, Deoria
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Intermediate (12th) - PCM
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Grade: 87.6%</h4>
          <p>
           I have completed my class 12th education at Prestige Inter College, Deoria where I studied Physics, Chemistry and Maths.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education custom-timeline-element"
          date="2019 - 2020"
          iconStyle={{ background: "#6c757d", color: "#fff" }}
          icon={<img src={logo} className="fas school-logo"/>}
        >
          <h3 className="vertical-timeline-element-title">
            Prestige Inter College, Deoria
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School (10th) - All Subjects
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Grade: 83.3%</h4>
          <p>
            I have completed my class 10th at Prestige Inter College, Deoria.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
