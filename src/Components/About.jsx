/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/luis-paico-NNTGEoohoE4-unsplash.jpg";

const imageAltText = "Red flowers background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a dedicated chemical engineering student enrolled at Abubakar Tafawa Balewa University in Bauchi, Nigeria. My academic pursuits are complemented by a profound enthusiasm for the world of technology, with a particular focus on AI, networking, and cyber security.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Machine Learning", "Networking", "Cyber Security", "Engineering"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I derive great satisfaction from tackling challenges head-on and finding innovative solutions. My commitment extends beyond personal interests as I am actively involved in community-oriented initiatives, driven by a strong passion for making a positive impact.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
