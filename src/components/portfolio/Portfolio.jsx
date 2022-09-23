
import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.png";
import Img2 from "../../assets/portfolio2.jpeg";
import Img3 from "../../assets/portfolio3.jpeg";
import Img4 from "../../assets/portfolio4.jpeg";
import Img5 from "../../assets/portfolio1.png";
import Img6 from "../../assets/portfolio2.jpeg";

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Portfolio",
      github:"https://github.com/DYNAMIC-DILSHAD/Portfolio23",
      demo:"https://wonderful-truffle-6fa2db.netlify.app/"
    },
    {
      id:2,
      image:Img2,
      title:"Student Grdae calcy",
      github:"https://github.com/DYNAMIC-DILSHAD/studentGradeApp",
      demo:"https://illustrious-sunshine-8c52d5.netlify.app"
    },
    {
      id:3,
      image:Img3,
      title:"Parallax Website",
      github:"https://github.com/DYNAMIC-DILSHAD/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---7317mkurq62w",
      demo:"https://zesty-blini-3f39ad.netlify.app"
    },
    {
      id:4,
      image:Img4,
      title:"Weather App",
      github:"https://github.com/DYNAMIC-DILSHAD/weather_js",
      demo:"https://fanciful-arithmetic-3bd11f.netlify.app/"
    },
    {
      id:5,
      image:Img5,
      title:"Portfolio",
      github:"https://github.com/DYNAMIC-DILSHAD/Portfolio23",
      demo:"https://wonderful-truffle-6fa2db.netlify.app/"
    },
    {
      id:6,
      image:Img6,
      title:"Student Grade Calcy",
      github:"https://github.com/DYNAMIC-DILSHAD/studentGradeApp",
      demo:"https://illustrious-sunshine-8c52d5.netlify.app"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
