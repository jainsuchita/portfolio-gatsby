import React from 'react';

import { Layout, SideBar, Footer } from "../components";

import pic4 from '../assets/images/pic04.png';
import pic5 from '../assets/images/pic05.png';
import pic6 from '../assets/images/pic06.png';
import pic7 from '../assets/images/pic07.png';
// import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'skills', name: 'Skills', icon: 'fa-cogs' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hey, I'm a <strong>Suchita ;)</strong>
              <br />
              Web developer | Frontend Developer | React Developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            I am a motivated front-end developer who specializes in developing fully <strong> responsive dynamic website </strong> from scratch. I've been delivering the high quality code for over 5 years now, using HTML, CSS, JS, React.js and Redux.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Liquidswap - Cryptocurrency exchange Website</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Droplet Computing - Website</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Droplet Computing - Desktop App</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Droplet Computing - Chrome App</h3>
                </header>
              </article>
            </div>
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img alt="" />
          </a>

          <p>
            I love the web and techy things and computers and what makes them tick.  I constantly look for new ways to do my work, new programs, new sites and new methodologies.  I won’t let my tools slow me down, and I can fix them when they break.  I’m not saying I can debug a crashing Dreamweaver, but only because I haven’t coded assembly in a few years.

            <br />
            I develop fast interactive front ends, using the latest technologies and techniques to reduce page load time. I use my knowledge and tools to save time in development.
          </p>
        </div>
      </section>

      <section id="skills" className="four">
        <div className="container">
          <header>
            <h2>Skills and Experience</h2>
          </header>

          <a href="/#" className="image featured">
            <img alt="" />
          </a>

          <p>
            The main area of my expertise is front end development (client side of the web).

            <br />
            HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts.

            <br />
            I also have full-stack developer experience with Express.js, postgreSQL (PERN :P)

            <br />
            Visit my <a href="https://www.linkedin.com/in/suchita-jain-44905381/">LinkedIn </a> profile for more details or just contact me.
          </p>

          {/* <ul className="skills-list">
            My work that I am very proud of:-
         <li> A fully functional website from Front-end to back-end using Reactjs, Redux, Typescript, ExpressJs, and PostgreSQL. </li>
            <li> A Desktop Application using Electron JS.</li>
            <li> A Chrome App using HTML, CSS, and Reactjs </li>
            <li> A complex Cryptocurrency website to swap crypto tokens on Ethereum blockchain using Reactjs, web3.js and metamask wallet. </li>
          </ul> */}
        </div>
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>I can help.</h2>
          </header>
          <p>
            I’m currently available for freelance work.
            So are you looking for a professional, communicative & punctual software engineer with extensive web development skills?
            <br />
            If you have an application you are interested in developing, a problem that needs solving or a project that needs rescuing, I'd love to help you with it.
            <br />
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
