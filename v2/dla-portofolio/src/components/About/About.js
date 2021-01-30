import React from "react";

function About(props) {
  return (
    <div className="row">
      <div id="about-me" className="side">
        <h2>About Me</h2>
        <img src="DLA profile SOC.jpg" />
        <p style={{ textAlign: "justify" }}>
          This is Daniela Leva an <b>Organic Certification Specialist.</b>
          <br></br>
          My background spans around 7 years of experience successfully
          promoting and directing organic business initiative. I’m obsessed with
          travel in the nature, discovering new cities by feet, a good book to
          read, and nice cake recipe to try. This space is where I will present
          you some things about my life, work and pasion.
        </p>
        <p>Get connected:</p>
        <button
          onClick={() => {
            window.location.href = "https://www.facebook.com/grecu.daniela.89";
          }}
        >
          Facebook
        </button>
        <button
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/daniela-leva-74a26b62";
          }}
        >
          Linkedin
        </button>
      </div>
      <div className="main">
        <h2 id="my pers life">Some personal info</h2>
        <ul>
          <li>
            <h3>My Childhood</h3>
          </li>
          <p style={{ textAlign: "justify" }}>
            I was born in Republic of Moldova in November, 1989. A small country
            in Eastern Europe, but which is not part of EU. A colorful and warm
            country, but too small for big ambitious and dreamers.
          </p>
          <p>
            More about Moldova you can find{" "}
            <a href={"https://en.wikipedia.org/wiki/Moldova"}>here.</a>
          </p>
          <li>
            <h3>Studies</h3>
          </li>
          <p style={{ textAlign: "justify" }}>
            Because of my desire for adventures, I applied for a scholarship to
            a well-known university in Romania. I'm holding a Master’s degree in{" "}
            <b>
              Expertise and Quality Control of chemicals products, food and
              materials
            </b>
            ; as well as a Bachelor degree in{" "}
            <b>Engineering and Management in Catering and Agrotourism</b>;
            attaining comprehensive knowledge of organic farming issues,
            resource management concerns, and sustainability practices.
          </p>
          <li>
            <h3>Personal life</h3>
          </li>
          <p style={{ textAlign: "justify" }}>
            I met my husband during student life. We are together for 10 years,
            and have a beautiful one year old daughter.
          </p>
        </ul>
        <img id="personal" src="pers life.jpg" />
        <h2 id="my-work">My Work</h2>
        <p style={{ textAlign: "justify" }}>
          I have been working 3 years as Certification Officer at ECOCERT SA –
          Certification and Inspection Control body known for its organic
          development policy. After this I started a new experience as an
          organic Certification Specialist within Tiryaki Group - a trading
          company of organic grains, oilseeds, feed commodities and connected
          products. As a highly accomplished and skilled certification
          specialist and internal auditor, I possess a wide range of knowledge
          and experience that will allow me to contribute towards the continuous
          success of your organization. I’m good listener and also self-learning
          person, I’m very meticulous so often my work is based on research and
          investigation method. I’m flexible to work in different areas (from
          field inspector to certification specialist); easily adaptable
          according to the requirements established by the management new
          strategy. I’m also capable of managing, following and reporting
          activities.
        </p>
        <ul>
          {" "}
          Some examples of my professional achievements include:
          <li>
            Providing overarching consultancy-based support to our partners
            based in Russia, Turkey, Ukraine, Romania, Moldova, Serbia, Brasil
            in the certification process - set up the project, identify and
            solve complex or sensitive issues, offering technical assistance to
            all members.
          </li>
          <li>
            Participating in Internal Audits, supervising dedicated site
            providing inspections and investigations while verifying regulatory
            compliance and overseeing project development life cycle.
          </li>
          <li>
            Demonstrating team leadership, organization, and communication
            skills to facilitate valuable project results and optimize
            efficiency.
          </li>
        </ul>
        <img id="Tiryaki" src="try.jpg" />
        <h2 id="my-hoby">My Hobby</h2>
        <p style={{ textAlign: "justify" }}>
          Finding a new hobby is a funny and dificult one, it takes a real
          effort to actually go out and learn something. And it becomes even
          harder when you have a one year old toddler :) as it takes up so much
          time! Over the years I’ve always dabbled in the sewing and
          haberdashery world. I’m USELESS at any kind of art, I can’t draw,
          paint or sculpt. But I’ve always found a bit more joy in thread, wool
          and fabric. I like being able to create something which is tangible,
          which you can hold and actually physically give something. I started
          off with cross stitch. Which I always enjoyed as a little hobby, it’s
          rather therapeutic in terms of crossing off a pattern and doing lots
          of similar stitches. I did some more traditional ones and tried some
          different patterns and more modern styles.
        </p>
        <p style={{ textAlign: "justify" }}>
          Now I'm working on a new project : my own blousse, you may see my
          progress so far below:
        </p>
        <img id="blousse1" src="hobby 1.jpg" />
      </div>
      <div id="my-contact" className="side">
        <h2>Contact</h2>
        <p> You can send me an e-mail using this:</p>
        <a href={"mailto:leva.daniela@yahoo.com"}>form</a>
      </div>
    </div>
  );
}
export default About;
