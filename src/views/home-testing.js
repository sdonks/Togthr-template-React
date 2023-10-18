import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './home-testing.css'

const HomeTesting = (props) => {
  return (
    <div className="home-testing-container">
      <Helmet>
        <title>Home-Testing - Moview Productions | Stefan Doncean</title>
        <meta
          name="description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:title"
          content="Home-Testing - Moview Productions | Stefan Doncean"
        />
        <meta
          property="og:description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9633093-04cb-4556-8e46-92b7b60210b3/9bb2f2ab-731f-46a4-b829-5ff2c4bc55bc?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="home-testing-header">
        <img
          alt="logo"
          src="https://i.imgur.com/h00gRM7.png"
          className="home-testing-image"
        />
        <div className="home-testing-nav">
          <NavigationLinks1 rootClassName="rootClassName29"></NavigationLinks1>
        </div>
        <div data-role="BurgerMenu" className="home-testing-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-testing-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-testing-mobile-menu">
          <div className="home-testing-nav1">
            <div className="home-testing-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-testing-image01"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-testing-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="home-testing-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName30"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="home-testing-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-testing-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="home-testing-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-testing-hero">
        <video
          id="top"
          src="https://youtu.be/Kyp2JDxVh28"
          loop
          muted
          preload="auto"
          autoPlay
          controls
          playsInline
          className="home-testing-video"
        ></video>
        <header
          id="header"
          data-role="Header"
          className="home-testing-header01"
        >
          <img
            id="top logo"
            alt="logo"
            src="https://i.imgur.com/h00gRM7.png"
            className="home-testing-image02"
          />
          <div className="home-testing-nav2"></div>
          <div className="home-testing-btn-group">
            <button className="home-testing-login button">Login</button>
            <button className="button">Register</button>
          </div>
          <div data-role="BurgerMenu" className="home-testing-burger-menu1">
            <svg viewBox="0 0 1024 1024" className="home-testing-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-testing-mobile-menu1">
            <div className="home-testing-nav3">
              <div className="home-testing-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-testing-image03"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-testing-menu-close1"
                >
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-testing-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-testing-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-testing-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <header data-thq="thq-navbar" className="home-testing-navbar">
          <img
            alt="image"
            src="https://i.imgur.com/h00gRM7.png"
            className="home-testing-branding"
          />
          <div data-thq="thq-burger-menu" className="home-testing-burger-menu2">
            <div className="home-testing-hamburger">
              <img
                alt="image"
                src="/hamburger.svg"
                className="home-testing-icon20"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-testing-mobile-menu2">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-testing-nav4"
            >
              <div className="home-testing-container03">
                <img
                  alt="image"
                  src="/logo.svg"
                  className="home-testing-image04"
                />
                <div
                  data-thq="thq-close-menu"
                  className="home-testing-menu-close2"
                >
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon21">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-testing-nav5"
              >
                <span className="home-testing-text">About</span>
                <span className="home-testing-text001">Features</span>
                <span className="home-testing-text002">Pricing</span>
                <span className="home-testing-text003">Team</span>
                <span className="home-testing-text004">Blog</span>
              </nav>
              <div className="home-testing-container04">
                <button className="home-testing-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-testing-icon-group2">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-testing-icon23"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-testing-icon25"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-testing-icon27"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-testing-hero-content">
          <div className="home-testing-header-container">
            <div className="home-testing-header02">
              <h1 className="home-testing-heading">
                Unleashing the Power of Film
              </h1>
            </div>
            <p className="home-testing-caption">
              Crafting Compelling Stories, Captivating Audiences and Delivering
              Measurable Results.
            </p>
          </div>
          <Link
            to="/contact"
            id="contact"
            name="Let's talk"
            className="home-testing-navlink button"
          >
            <span>
              <span>Let&apos;s talk!</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      <section className="home-testing-note">
        <h2 className="home-testing-caption01">
          <span className="home-testing-text008">
            Get noticed with &quot;Scroll Stopping&quot; Video Content!
          </span>
          <br></br>
          <br className="home-testing-text010"></br>
          <span className="home-testing-text011">
            Our diverse team has created engaging content for brands all over
            the world.
          </span>
        </h2>
      </section>
      <section className="home-testing-slider">
        <div className="home-testing-header03">
          <h2 className="home-testing-heading01">
            <span>
              From nothing to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-testing-text013">something</span>
            <span className="home-testing-text014">
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-testing-selector">
          <p className="home-testing-caption02">
            <span>
              We’re the perfect partner for all your, “I need a video” project
              needs. Whether your video involves promoting a person or product,
              or helping you write and design an all graphics explainer video,
              we have you covered. From writing, producing, casting,
              storyboards, styleboards, 2d and 3d animation, and voiceover
              talent. Even if you’re not sure what type of video you want to
              make, we can advise you based on your budget, your audience, and
              the ultimate goal of your video.
            </span>
            <br className="home-testing-text016"></br>
          </p>
          <img
            alt="image"
            src="https://i.imgur.com/qUcY6k6.jpeg"
            className="home-testing-image05"
          />
          <div className="home-testing-slide-titles">
            <div className="slide-title">
              <span>Metaverse</span>
            </div>
            <div className="slide-title slide-title-active">
              <span>Ecosystems</span>
            </div>
            <div className="slide-title">
              <span>Development</span>
            </div>
            <div className="slide-title">
              <span>Integration</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testing-statistics">
        <div className="home-testing-content">
          <div className="home-testing-stat">
            <h3 className="home-testing-header04">Ultra-fast turnaround</h3>
          </div>
          <div className="home-testing-stat1">
            <h3 className="home-testing-header05">Stress-free experience</h3>
          </div>
          <div className="home-testing-stat2">
            <h3 className="home-testing-header06">Trusted service</h3>
          </div>
        </div>
      </section>
      <section className="home-testing-slides">
        <div className="home-testing-slider1 slider blaze-slider">
          <div className="home-testing-slider-container blaze-container">
            <div className="home-testing-slider-track-container blaze-track-container">
              <div className="home-testing-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-testing-image06"
                  />
                  <div className="home-testing-content01">
                    <div className="home-testing-header07">
                      <h3 className="home-testing-heading02">Metaverse</h3>
                      <p className="home-testing-caption03">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-testing-more">
                      <span className="home-testing-caption04">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="home-testing-icon29"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-testing-image07"
                  />
                  <div className="home-testing-content02">
                    <div className="home-testing-header08">
                      <h3 className="home-testing-heading03">Ecosystems</h3>
                      <p className="home-testing-caption05">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-testing-more1">
                      <span className="home-testing-caption06">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="home-testing-icon31"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-testing-image08"
                  />
                  <div className="home-testing-content03">
                    <div className="home-testing-header09">
                      <h3 className="home-testing-heading04">Development</h3>
                      <p className="home-testing-caption07">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-testing-more2">
                      <span className="home-testing-caption08">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="home-testing-icon33"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-testing-image09"
                  />
                  <div className="home-testing-content04">
                    <div className="home-testing-header10">
                      <h3 className="home-testing-heading05">Integration</h3>
                      <p className="home-testing-caption09">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-testing-more3">
                      <span className="home-testing-caption10">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="home-testing-icon35"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-testing-controls">
              <button
                data-role="previous-banner-button"
                className="home-testing-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-testing-icon37">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-testing-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-testing-icon39">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-testing-container06">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-testing-get-started">
        <div className="home-testing-header-container1">
          <div className="home-testing-header11">
            <h2 className="home-testing-heading06">
              Moview is the home to our Video Production company where we create
              stunning visual content to ensure brands stand out and get
              noticed.
            </h2>
            <p className="home-testing-caption11">
              Our focus on creative development and full-service video
              production ensures that every aspect of your video project is
              handled with care and precision.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-testing-button">
            <a
              href="https://www.behance.net/stefandoncean"
              target="_blank"
              rel="noreferrer noopener"
              className="home-testing-button1 button"
            >
              <span>View Some of our public work</span>
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.imgur.com/S0nMdGY.jpg"
          className="home-testing-image10"
        />
      </section>
      <h2 className="home-testing-heading07">
        <span>
          Customer validation is an essential phase of the
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="home-testing-text023">production process.</span>
        <br></br>
      </h2>
      <section className="home-testing-objectives">
        <div className="home-testing-content05">
          <span className="home-testing-text025">Objectives</span>
          <div className="home-testing-objectives-list">
            <div className="objective">
              <h3 className="home-testing-text026">Dream it</h3>
              <p className="home-testing-text027">
                <span>
                  It all begins with an idea. Whatever it is, the way you tell
                  your story online can make all the difference to your brand
                  image and sales. We work with businesses to create the perfect
                  content for their audience to enhance their business.
                </span>
                <br className="home-testing-text029"></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective home-testing-objective1">
              <h3 className="home-testing-text031">Capture it</h3>
              <p className="home-testing-text032">
                <span>
                  Using the latest high-quality camera equipment our team will
                  deliver the smoothest production possible, giving you one less
                  thing to worry about. You can be assured that our experienced
                  professionals will create the best possible content, on time
                  and on budget.
                </span>
                <br className="home-testing-text034"></br>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective home-testing-objective2">
              <h3 className="home-testing-text037">Create it</h3>
              <p className="home-testing-text038">
                <span>
                  At our studio, we have an in-house editing team ready to work
                  on your project as soon as we finish filming. Meaning that
                  100% of projects are delivered on time, most in as little as 3
                  days.
                </span>
                <br className="home-testing-text040"></br>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testing-growth">
        <div className="home-testing-content06">
          <div className="home-testing-header12">
            <div className="home-testing-header13">
              <h2 className="home-testing-heading08">
                We guarantee you&apos;ll love your video or your money back*.
              </h2>
            </div>
            <p className="home-testing-caption12">
              <span className="home-testing-text043">
                Investing in a new video for your business can be a big
                decision, so to give you confidence, we created our satisfaction
                guarantee. It&apos;s simple and takes the stress away. No
                catches, If you don&apos;t like the video and we can&apos;t
                create a version you&apos;re happy with, you don&apos;t pay.
              </span>
              <br className="home-testing-text044"></br>
              <br className="home-testing-text045"></br>
              <span className="home-testing-text046">
                *refund amount is decided in pre-production.
              </span>
              <br className="home-testing-text047"></br>
              <br className="home-testing-text048"></br>
              <br className="home-testing-text049"></br>
            </p>
          </div>
          <div className="home-testing-testimonial">
            <div className="home-testing-content07">
              <span className="home-testing-text050">Testimonial</span>
              <p className="home-testing-text051">
                &quot;He knows all the right angles to shoot a precious moment!
                Hard-working man, a professional artist who puts passion in his
                work!&quot;
              </p>
            </div>
            <div className="home-testing-information">
              <div className="home-testing-author">
                <img
                  alt="image"
                  src="https://i.imgur.com/0Lpv0Xc.jpg"
                  className="home-testing-icon41"
                />
                <span className="home-testing-name">Tea Visan</span>
              </div>
              <a
                href="https://www.facebook.com/DirtyShirtRomania/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-testing-link"
              >
                <img
                  alt="image"
                  src="https://i.imgur.com/k2t9fax.jpg"
                  className="home-testing-from"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="home-testing-images">
          <div className="home-testing-square"></div>
          <img
            alt="image"
            src="https://i.imgur.com/ubsnns9.jpg"
            className="home-testing-image11"
          />
        </div>
      </section>
      <section className="home-testing-experience">
        <div className="home-testing-images1">
          <div className="home-testing-square1"></div>
          <img
            alt="image"
            src="https://i.imgur.com/p0gMEgQ.jpg"
            className="home-testing-image12"
          />
        </div>
        <div className="home-testing-content08">
          <div className="home-testing-header14">
            <div className="home-testing-header-container2">
              <div className="home-testing-header15">
                <h2 className="home-testing-heading09">
                  A trusted service every time.
                </h2>
              </div>
              <p className="home-testing-caption13">
                We’ve built strong and long-lasting client relationships by
                working hard to combine creativity, excellent service delivery
                and corporate experience.
              </p>
            </div>
            <div className="home-testing-checkmarks">
              <div className="home-testing-check">
                <div className="home-testing-mark">
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon42">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-testing-text052">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-testing-check1">
                <div className="home-testing-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon44">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-testing-text053">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="home-testing-check2">
                <div className="home-testing-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon46">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-testing-text054">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-testing-check3">
                <div className="home-testing-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-testing-icon48">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-testing-text055">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testing-testimonial1">
            <div className="home-testing-content09">
              <span className="home-testing-text056">Testimonial</span>
              <p className="home-testing-text057">
                &quot;A pleasant collaboration from all points of view! Positive
                work attitude and creativity are the strong points! It has
                everything that is technically necessary  for a quality
                result!&quot;
              </p>
            </div>
            <div className="home-testing-information1">
              <div className="home-testing-author1">
                <span className="home-testing-name1">George </span>
              </div>
              <a
                href="https://www.atria.ro/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-testing-link1"
              >
                <img
                  alt="image"
                  src="data:image/png;base64,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"
                  className="home-testing-from1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testing-create">
        <div className="home-testing-content10">
          <div className="home-testing-header16">
            <h2 className="home-testing-heading10">
              <span>Outstanding </span>
              <span className="home-testing-text059">visual content!</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </h2>
          </div>
          <button className="home-testing-button2 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-testing-comparision">
        <div className="home-testing-header-container3">
          <div className="home-testing-header17">
            <h2 className="home-testing-heading11">
              <span>Packages we offer</span>
              <br></br>
            </h2>
          </div>
          <p className="home-testing-caption14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="home-testing-table">
          <div className="home-testing-row">
            <div className="home-testing-headers">
              <span className="home-testing-text067">Placeholder</span>
            </div>
            <div className="home-testing-plans">
              <div className="home-testing-row01">
                <span className="home-testing-text068">TOGHTR</span>
                <span className="home-testing-text069">AGENCY</span>
                <span className="home-testing-text070">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="home-testing-row02">
            <div className="home-testing-headers1">
              <span className="home-testing-text071">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-testing-plans1">
              <div className="home-testing-row03">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row04">
            <div className="home-testing-headers2">
              <span className="home-testing-text072">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="home-testing-plans2">
              <div className="home-testing-row05">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row06">
            <div className="home-testing-headers3">
              <span className="home-testing-text073">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-testing-plans3">
              <div className="home-testing-row07">
                <div className="value">
                  <span className="home-testing-text074">Custom</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row08">
            <div className="home-testing-headers4">
              <span className="home-testing-text075">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-testing-plans4">
              <div className="home-testing-row09">
                <div className="value">
                  <span className="home-testing-text076">Unlimited</span>
                </div>
                <div className="value">
                  <span className="home-testing-text077">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row10">
            <div className="home-testing-headers5">
              <span className="home-testing-text078">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="home-testing-plans5">
              <div className="home-testing-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="home-testing-text079">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row12">
            <div className="home-testing-headers6">
              <span className="home-testing-text080">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="home-testing-plans6">
              <div className="home-testing-row13">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-row14">
            <div className="home-testing-headers7">
              <span className="home-testing-text081">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="home-testing-plans7">
              <div className="home-testing-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="home-testing-text082">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testing-data">
        <div className="home-testing-header-container4">
          <div className="home-testing-header18">
            <div className="home-testing-row16">
              <h2 className="home-testing-heading12">
                <span>
                  Versatile Video Production for Diverse Business Needs.
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-testing-caption15">
            <span className="home-testing-text085">
              We make videos for all sorts of businesses for all sorts of
              reasons, from sharing a successful customer story, to an authentic
              employee experience or a new product development. We have filmed
              for clients in their corporate offices, homes, factories, events
              and others.
            </span>
            <br className="home-testing-text086"></br>
            <br className="home-testing-text087"></br>
            <span className="home-testing-text088">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
        </div>
        <div className="home-testing-content11">
          <div className="home-testing-image13">
            <img
              alt="image"
              src="https://i.imgur.com/hjx4j7N.jpg"
              className="home-testing-image14"
            />
          </div>
          <div className="home-testing-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-testing-header19">Our studio</h3>
                <p data-role="accordion-content" className="accordion-content">
                  With 2,200 square feet of space, we have everything you need
                  to bring your video production to life. Our studio features a
                  40ft. white screen and a 40ft. cyclorama green screen, perfect
                  for all your shooting needs. We also offer LED panel lights
                  and other equipment to ensure your videos look their best.
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name24"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-testing-header20">Our prices</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Our prices are variable depending on the project. We also
                  offer fixed price monthly services if needed. Contact us for a
                  more detailed estimate.
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name25"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-testing-header21">Photography</h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>
                    We also offer Photography services for those looking for a
                    complete media upgrade. They say a picture tells a thousand
                    words, so why not tell your brand story with high-quality
                    images!
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name26"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-testing-header22">Promotional videos</h3>
                <p data-role="accordion-content" className="accordion-content">
                  <span>
                    It’s a fact that high-quality video content increases
                    credibility and consumer trust in brands. So our goal is to
                    help elevate your brand, boost engagement and increase sales
                    through our professional video productions.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name27"></IconContainer>
            </div>
            <div>
              <div className="home-testing-container08">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testing-customer">
        <div className="home-testing-header23"></div>
        <div className="home-testing-quotes">
          <div className="home-testing-quote">
            <p className="home-testing-quote1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-testing-author2">
              <span className="home-testing-name2">Joanna Smith</span>
              <span className="home-testing-location">Briville</span>
            </div>
          </div>
          <div className="home-testing-quote2">
            <p className="home-testing-quote3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-testing-author3">
              <span className="home-testing-name3">Joanna Smith</span>
              <span className="home-testing-location1">Briville</span>
            </div>
          </div>
          <div className="home-testing-quote4">
            <p className="home-testing-quote5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-testing-author4">
              <span className="home-testing-name4">Joanna Smith</span>
              <span className="home-testing-location2">Briville</span>
            </div>
          </div>
          <div className="home-testing-quote6">
            <p className="home-testing-quote7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-testing-author5">
              <span className="home-testing-name5">Joanna Smith</span>
              <span className="home-testing-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-testing-controls1">
          <button className="home-testing-previous1 button">
            <svg viewBox="0 0 1024 1024" className="home-testing-icon50">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-testing-next1 button">
            <svg viewBox="0 0 1024 1024" className="home-testing-icon52">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-testing-button3">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-testing-faq">
        <div className="home-testing-header24">
          <h2 className="home-testing-heading13">
            <span>Frequently asked </span>
            <span className="home-testing-text099">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-testing-content20">
          <div className="home-testing-column">
            <div className="home-testing-element04">
              <h3 className="home-testing-header25">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-testing-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-testing-element05">
              <h3 className="home-testing-header26">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-testing-content22">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-testing-element06">
              <h3 className="home-testing-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-testing-content23">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-testing-column1">
            <div className="home-testing-element07">
              <h3 className="home-testing-header28">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-testing-content24">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-testing-element08">
              <h3 className="home-testing-header29">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-testing-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-testing-element09">
              <h3 className="home-testing-header30">
                Incididunt ut labore et dolore?
              </h3>
              <p className="home-testing-content26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-testing-footer">
        <div className="home-testing-content27">
          <div className="home-testing-main">
            <div className="home-testing-branding1">
              <Link to="/" className="home-testing-navlink01">
                <img
                  alt="image"
                  src="https://i.imgur.com/h00gRM7.png"
                  className="home-testing-image15"
                />
              </Link>
              <span className="home-testing-text101">
                Available world-wide, at any time.
              </span>
            </div>
            <div className="home-testing-links">
              <div className="home-testing-column2">
                <span className="home-testing-header31">Company</span>
                <div className="home-testing-list">
                  <Link to="/" className="home-testing-navlink02">
                    About
                  </Link>
                  <Link to="/" className="home-testing-navlink03">
                    Services
                  </Link>
                  <Link to="/" className="home-testing-navlink04">
                    How
                  </Link>
                  <Link to="/" className="home-testing-navlink05">
                    <span className="home-testing-text102">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-testing-column3">
                <span className="home-testing-header32">Extern</span>
                <div className="home-testing-list1">
                  <Link to="/" className="home-testing-navlink06">
                    News
                  </Link>
                  <Link to="/" className="home-testing-navlink07">
                    Articles
                  </Link>
                  <Link to="/" className="home-testing-navlink08">
                    Blog
                  </Link>
                  <Link to="/" className="home-testing-navlink09">
                    Privacy
                  </Link>
                  <Link to="/" className="home-testing-navlink10">
                    Terms
                  </Link>
                  <Link to="/" className="home-testing-navlink11">
                    Legal
                  </Link>
                  <Link to="/" className="home-testing-navlink12">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-testing-column4">
                <span className="home-testing-header33">Social</span>
                <div className="home-testing-list2">
                  <Link to="/" className="home-testing-navlink13">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-testing-navlink14">
                    Twitter
                  </Link>
                  <Link to="/" className="home-testing-navlink15">
                    Instagram
                  </Link>
                  <Link to="/" className="home-testing-navlink16">
                    Facebook
                  </Link>
                  <Link to="/" className="home-testing-navlink17">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testing-bottom">
            <span className="home-testing-text104">
              © 2023 MOVIEW | Stefan Doncean - All rights reserved
            </span>
            <a
              href="#header"
              data-role="scroll-top"
              className="home-testing-link2 button"
            >
              <img
                alt="image"
                src="/arrow.svg"
                className="home-testing-image16"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="home-testing-container10">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default HomeTesting
