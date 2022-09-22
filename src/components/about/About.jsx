import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
      
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FaSchool className="about__icon" />
              <h5>Internship</h5>
              <small>Six months in Newton School</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
          <div class="para">
          <p>
            Hello' I am Dilshad Ansari.I am from Ghazipur(U.P).I have completed B.Sc in Maulana Azad National Urdu university(Hyderabad)
            and also I have completed six months Fullstack Web Developer course from Newton School 
          </p>
          </div>
         
        </div>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  );
};

export default About;