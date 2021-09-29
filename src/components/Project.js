import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";
import projects from "../assets/data/project";
import ProjectItem from "./ProjectItem";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 5rem 0;
  background-color: #212529;
  height: 100vh;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 2rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    color: #fff;
    height: 50px;
    width: 50px;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: #fce51b;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const Project = () => {
  return (
    <ProjectSectionStyle>
      <div className="bg-dark">
        <section className="container">
          <div className="text position-top text-white">
            <h2>Projects</h2>
            <h5>Some of my recent works</h5>
          </div>

          <div className="project-allItem">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                if (index >= 5) return index;
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      title={project.name}
                      img={project.img}
                      description={project.desc}
                      link={project.link}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </div>
    </ProjectSectionStyle>
  );
};

export default Project;
