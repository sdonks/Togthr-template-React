import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './work-examples.css'

const WorkExamples = (props) => {
  return (
    <div className="work-examples-container">
      <Helmet>
        <title>Work-Examples - Moview Productions | Stefan Doncean</title>
        <meta
          name="description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:title"
          content="Work-Examples - Moview Productions | Stefan Doncean"
        />
        <meta
          property="og:description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9633093-04cb-4556-8e46-92b7b60210b3/9bb2f2ab-731f-46a4-b829-5ff2c4bc55bc?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Header" className="work-examples-header">
        <img
          alt="logo"
          src="https://i.imgur.com/h00gRM7.png"
          className="work-examples-image"
        />
        <div className="work-examples-nav">
          <NavigationLinks1 rootClassName="rootClassName22"></NavigationLinks1>
        </div>
        <div data-role="BurgerMenu" className="work-examples-burger-menu">
          <svg viewBox="0 0 1024 1024" className="work-examples-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="work-examples-mobile-menu">
          <div className="work-examples-nav1">
            <div className="work-examples-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="work-examples-image01"
              />
              <div
                data-role="CloseMobileMenu"
                className="work-examples-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="work-examples-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName23"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="work-examples-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="work-examples-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="work-examples-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="work-examples-hero">
        <video
          loop
          muted
          poster="https://i.imgur.com/5ZKeauT.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="work-examples-video"
        ></video>
        <header data-thq="thq-navbar" className="work-examples-navbar">
          <img
            alt="image"
            src="https://i.imgur.com/h00gRM7.png"
            className="work-examples-branding"
          />
          <div
            data-thq="thq-burger-menu"
            className="work-examples-burger-menu1"
          >
            <div className="work-examples-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="work-examples-icon10"
              />
            </div>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="work-examples-mobile-menu1"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="work-examples-nav2"
            >
              <div className="work-examples-container2">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="work-examples-image02"
                />
                <div
                  data-thq="thq-close-menu"
                  className="work-examples-menu-close1"
                >
                  <svg viewBox="0 0 1024 1024" className="work-examples-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="work-examples-nav3"
              >
                <span className="work-examples-text">About</span>
                <span className="work-examples-text001">Features</span>
                <span className="work-examples-text002">Pricing</span>
                <span className="work-examples-text003">Team</span>
                <span className="work-examples-text004">Blog</span>
              </nav>
              <div className="work-examples-container3">
                <button className="work-examples-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="work-examples-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="work-examples-icon13"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="work-examples-icon15"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="work-examples-icon17"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="work-examples-hero-content">
          <div className="work-examples-header-container">
            <div className="work-examples-header01">
              <h1 className="work-examples-heading">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="work-examples-text006">imagination</span>
                <br></br>
              </h1>
            </div>
            <p className="work-examples-caption">
              We make brands stand out through Video Content.
            </p>
          </div>
          <button
            id="contact"
            name="Let's talk"
            type="button"
            className="button work-examples-button"
          >
            <span>
              <span>Let&apos;s talk!</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="work-examples-note">
        <h2 className="work-examples-caption01">
          <span className="work-examples-text011">
            Get noticed with &quot;Scroll Stopping&quot; Video Content!
          </span>
          <br></br>
          <br className="work-examples-text013"></br>
          <span className="work-examples-text014">
            Our diverse team has created engaging content for brands all over
            the world.
          </span>
        </h2>
      </section>
      <section className="work-examples-slides">
        <div className="work-examples-slider slider blaze-slider">
          <div className="work-examples-slider-container blaze-container">
            <div className="work-examples-slider-track-container blaze-track-container">
              <div className="work-examples-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image03"
                  />
                  <div className="work-examples-content">
                    <div className="work-examples-header02">
                      <h3 className="work-examples-heading01">Metaverse</h3>
                      <p className="work-examples-caption02">
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
                    <div className="work-examples-more">
                      <span className="work-examples-caption03">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon19"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image04"
                  />
                  <div className="work-examples-content01">
                    <div className="work-examples-header03">
                      <h3 className="work-examples-heading02">Ecosystems</h3>
                      <p className="work-examples-caption04">
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
                    <div className="work-examples-more1">
                      <span className="work-examples-caption05">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon21"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image05"
                  />
                  <div className="work-examples-content02">
                    <div className="work-examples-header04">
                      <h3 className="work-examples-heading03">Development</h3>
                      <p className="work-examples-caption06">
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
                    <div className="work-examples-more2">
                      <span className="work-examples-caption07">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon23"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image06"
                  />
                  <div className="work-examples-content03">
                    <div className="work-examples-header05">
                      <h3 className="work-examples-heading04">Integration</h3>
                      <p className="work-examples-caption08">
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
                    <div className="work-examples-more3">
                      <span className="work-examples-caption09">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon25"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-examples-controls">
              <button
                data-role="previous-banner-button"
                className="work-examples-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="work-examples-icon27">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="work-examples-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="work-examples-icon29">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
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
          ></DangerousHTML>
        </div>
      </section>
      <section className="work-examples-slider1">
        <div className="work-examples-header06">
          <h2 className="work-examples-heading05">
            <span>
              From nothing to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="work-examples-text016">something</span>
            <span className="work-examples-text017">
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="work-examples-selector">
          <p className="work-examples-caption10">
            <span className="work-examples-text018">
              The highest status people in human history are those that asked
              for nothing and gave everything.
            </span>
            <br className="work-examples-text019"></br>
            <br className="work-examples-text020"></br>
          </p>
          <div className="work-examples-slide-titles">
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
      <section className="work-examples-statistics">
        <div className="work-examples-content04">
          <div className="work-examples-stat">
            <h3 className="work-examples-header07">Ultra-fast turnaround</h3>
          </div>
          <div className="work-examples-stat1">
            <h3 className="work-examples-header08">Stress-free experience</h3>
          </div>
          <div className="work-examples-stat2">
            <h3 className="work-examples-header09">Trusted service</h3>
          </div>
        </div>
      </section>
      <section className="work-examples-slides1">
        <div className="work-examples-slider2 slider blaze-slider">
          <div className="work-examples-slider-container1 blaze-container">
            <div className="work-examples-slider-track-container1 blaze-track-container">
              <div className="work-examples-slider-track1 blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image07"
                  />
                  <div className="work-examples-content05">
                    <div className="work-examples-header10">
                      <h3 className="work-examples-heading06">Metaverse</h3>
                      <p className="work-examples-caption11">
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
                    <div className="work-examples-more4">
                      <span className="work-examples-caption12">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon31"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image08"
                  />
                  <div className="work-examples-content06">
                    <div className="work-examples-header11">
                      <h3 className="work-examples-heading07">Ecosystems</h3>
                      <p className="work-examples-caption13">
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
                    <div className="work-examples-more5">
                      <span className="work-examples-caption14">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon33"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image09"
                  />
                  <div className="work-examples-content07">
                    <div className="work-examples-header12">
                      <h3 className="work-examples-heading08">Development</h3>
                      <p className="work-examples-caption15">
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
                    <div className="work-examples-more6">
                      <span className="work-examples-caption16">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon35"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="work-examples-image10"
                  />
                  <div className="work-examples-content08">
                    <div className="work-examples-header13">
                      <h3 className="work-examples-heading09">Integration</h3>
                      <p className="work-examples-caption17">
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
                    <div className="work-examples-more7">
                      <span className="work-examples-caption18">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="work-examples-icon37"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-examples-controls1">
              <button
                data-role="previous-banner-button"
                className="work-examples-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="work-examples-icon39">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="work-examples-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="work-examples-icon41">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
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
          ></DangerousHTML>
        </div>
      </section>
      <section className="work-examples-get-started">
        <div className="work-examples-header-container1">
          <div className="work-examples-header14">
            <h2 className="work-examples-heading10">
              Moview is the home to our Video Production company where we create
              stunning visual content to ensure brands stand out and get
              noticed.
            </h2>
            <p className="work-examples-caption19">
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
          <div className="work-examples-button1">
            <button className="button">
              <span>Our work</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.imgur.com/S0nMdGY.jpg"
          className="work-examples-image11"
        />
      </section>
      <h2 className="work-examples-heading11">
        <span>
          Customer validation is an essential phase of the
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="work-examples-text027">production process.</span>
        <br></br>
      </h2>
      <section className="work-examples-objectives">
        <div className="work-examples-content09">
          <span className="work-examples-text029">Objectives</span>
          <div className="work-examples-objectives-list">
            <div className="objective">
              <h3 className="work-examples-text030">Dream it</h3>
              <p className="work-examples-text031">
                <span>
                  It all begins with an idea. Whatever it is, the way you tell
                  your story online can make all the difference to your brand
                  image and sales. We work with businesses to create the perfect
                  content for their audience to enhance their business.
                </span>
                <br className="work-examples-text033"></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective work-examples-objective1">
              <h3 className="work-examples-text035">Capture it</h3>
              <p className="work-examples-text036">
                <span>
                  Using the latest high-quality camera equipment our team will
                  deliver the smoothest production possible, giving you one less
                  thing to worry about. You can be assured that our experienced
                  professionals will create the best possible content, on time
                  and on budget.
                </span>
                <br className="work-examples-text038"></br>
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
            <div className="objective work-examples-objective2">
              <h3 className="work-examples-text041">Create it</h3>
              <p className="work-examples-text042">
                <span>
                  At our studio, we have an in-house editing team ready to work
                  on your project as soon as we finish filming. Meaning that
                  100% of projects are delivered on time, most in as little as 3
                  days.
                </span>
                <br className="work-examples-text044"></br>
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
      <section className="work-examples-growth">
        <div className="work-examples-content10">
          <div className="work-examples-header15">
            <div className="work-examples-header16">
              <h2 className="work-examples-heading12">
                We guarantee you&apos;ll love your video or your money back*.
              </h2>
            </div>
            <p className="work-examples-caption20">
              <span className="work-examples-text047">
                Investing in a new video for your business can be a big
                decision, so to give you confidence, we created our satisfaction
                guarantee. It&apos;s simple and takes the stress away. No
                catches, If you don&apos;t like the video and we can&apos;t
                create a version you&apos;re happy with, you don&apos;t pay.
              </span>
              <br className="work-examples-text048"></br>
              <br className="work-examples-text049"></br>
              <span className="work-examples-text050">
                *refund amount is noted on the contract.
              </span>
              <br className="work-examples-text051"></br>
              <br className="work-examples-text052"></br>
              <br className="work-examples-text053"></br>
            </p>
          </div>
          <div className="work-examples-testimonial">
            <div className="work-examples-content11">
              <span className="work-examples-text054">Testimonial</span>
              <p className="work-examples-text055">
                &quot;He knows all the right angles to shoot a precious moment!
                Hard-working man, a professional artist who puts passion in his
                work!&quot;
              </p>
            </div>
            <div className="work-examples-information">
              <div className="work-examples-author">
                <img
                  alt="image"
                  src="https://i.imgur.com/0Lpv0Xc.jpg"
                  className="work-examples-icon43"
                />
                <span className="work-examples-name">Tea Visan</span>
              </div>
              <a
                href="https://www.facebook.com/DirtyShirtRomania/"
                target="_blank"
                rel="noreferrer noopener"
                className="work-examples-link"
              >
                <img
                  alt="image"
                  src="https://i.imgur.com/k2t9fax.jpg"
                  className="work-examples-from"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="work-examples-images">
          <div className="work-examples-square"></div>
          <img
            alt="image"
            src="https://i.imgur.com/ubsnns9.jpg"
            className="work-examples-image12"
          />
        </div>
      </section>
      <section className="work-examples-experience">
        <div className="work-examples-images1">
          <div className="work-examples-square1"></div>
          <img
            alt="image"
            src="https://i.imgur.com/p0gMEgQ.jpg"
            className="work-examples-image13"
          />
        </div>
        <div className="work-examples-content12">
          <div className="work-examples-header17">
            <div className="work-examples-header-container2">
              <div className="work-examples-header18">
                <h2 className="work-examples-heading13">
                  A trusted service every time.
                </h2>
              </div>
              <p className="work-examples-caption21">
                We’ve built strong and long-lasting client relationships by
                working hard to combine creativity, excellent service delivery
                and corporate experience.
              </p>
            </div>
            <div className="work-examples-checkmarks">
              <div className="work-examples-check">
                <div className="work-examples-mark">
                  <svg viewBox="0 0 1024 1024" className="work-examples-icon44">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="work-examples-text056">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="work-examples-check1">
                <div className="work-examples-mark1">
                  <svg viewBox="0 0 1024 1024" className="work-examples-icon46">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="work-examples-text057">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="work-examples-check2">
                <div className="work-examples-mark2">
                  <svg viewBox="0 0 1024 1024" className="work-examples-icon48">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="work-examples-text058">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="work-examples-check3">
                <div className="work-examples-mark3">
                  <svg viewBox="0 0 1024 1024" className="work-examples-icon50">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="work-examples-text059">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="work-examples-testimonial1">
            <div className="work-examples-content13">
              <span className="work-examples-text060">Testimonial</span>
              <p className="work-examples-text061">
                &quot;A pleasant collaboration from all points of view! Positive
                work attitude and creativity are the strong points! It has
                everything that is technically necessary  for a quality
                result!&quot;
              </p>
            </div>
            <div className="work-examples-information1">
              <div className="work-examples-author1">
                <span className="work-examples-name1">George </span>
              </div>
              <a
                href="https://www.atria.ro/"
                target="_blank"
                rel="noreferrer noopener"
                className="work-examples-link1"
              >
                <img
                  alt="image"
                  src="data:image/png;base64,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"
                  className="work-examples-from1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="work-examples-create">
        <div className="work-examples-content14">
          <div className="work-examples-header19">
            <h2 className="work-examples-heading14">
              <span>Outstanding </span>
              <span className="work-examples-text063">visual content!</span>
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
          <button className="work-examples-button3 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="work-examples-comparision">
        <div className="work-examples-header-container3">
          <div className="work-examples-header20">
            <h2 className="work-examples-heading15">
              <span>Packages we offer</span>
              <br></br>
            </h2>
          </div>
          <p className="work-examples-caption22">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="work-examples-table">
          <div className="work-examples-row">
            <div className="work-examples-headers">
              <span className="work-examples-text071">Placeholder</span>
            </div>
            <div className="work-examples-plans">
              <div className="work-examples-row01">
                <span className="work-examples-text072">TOGHTR</span>
                <span className="work-examples-text073">AGENCY</span>
                <span className="work-examples-text074">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="work-examples-row02">
            <div className="work-examples-headers1">
              <span className="work-examples-text075">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="work-examples-plans1">
              <div className="work-examples-row03">
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
          <div className="work-examples-row04">
            <div className="work-examples-headers2">
              <span className="work-examples-text076">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="work-examples-plans2">
              <div className="work-examples-row05">
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
          <div className="work-examples-row06">
            <div className="work-examples-headers3">
              <span className="work-examples-text077">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="work-examples-plans3">
              <div className="work-examples-row07">
                <div className="value">
                  <span className="work-examples-text078">Custom</span>
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
          <div className="work-examples-row08">
            <div className="work-examples-headers4">
              <span className="work-examples-text079">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="work-examples-plans4">
              <div className="work-examples-row09">
                <div className="value">
                  <span className="work-examples-text080">Unlimited</span>
                </div>
                <div className="value">
                  <span className="work-examples-text081">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="work-examples-row10">
            <div className="work-examples-headers5">
              <span className="work-examples-text082">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="work-examples-plans5">
              <div className="work-examples-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="work-examples-text083">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-examples-row12">
            <div className="work-examples-headers6">
              <span className="work-examples-text084">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="work-examples-plans6">
              <div className="work-examples-row13">
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
          <div className="work-examples-row14">
            <div className="work-examples-headers7">
              <span className="work-examples-text085">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="work-examples-plans7">
              <div className="work-examples-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="work-examples-text086">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work-examples-data">
        <div className="work-examples-header-container4">
          <div className="work-examples-header21">
            <div className="work-examples-row16">
              <h2 className="work-examples-heading16">
                <span>
                  Versatile Video Production for Diverse Business Needs.
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="work-examples-caption23">
            <span className="work-examples-text089">
              We make videos for all sorts of businesses for all sorts of
              reasons, from sharing a successful customer story, to an authentic
              employee experience or a new product development. We have filmed
              for clients in their corporate offices, homes, factories, events
              and others.
            </span>
            <br className="work-examples-text090"></br>
            <br className="work-examples-text091"></br>
            <span className="work-examples-text092">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
        </div>
        <div className="work-examples-content15">
          <div className="work-examples-image14">
            <img
              alt="image"
              src="https://i.imgur.com/hjx4j7N.jpg"
              className="work-examples-image15"
            />
          </div>
          <div className="work-examples-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="work-examples-header22">Our studio</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name12"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="work-examples-header23">Our prices</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name13"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="work-examples-header24">Photography</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name14"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="work-examples-header25">Promotional videos</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name15"></IconContainer>
            </div>
            <div>
              <DangerousHTML
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
              ></DangerousHTML>
            </div>
          </div>
        </div>
      </section>
      <section className="work-examples-customer">
        <div className="work-examples-header26"></div>
        <div className="work-examples-quotes">
          <div className="work-examples-quote">
            <p className="work-examples-quote1">
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
            <div className="work-examples-author2">
              <span className="work-examples-name2">Joanna Smith</span>
              <span className="work-examples-location">Briville</span>
            </div>
          </div>
          <div className="work-examples-quote2">
            <p className="work-examples-quote3">
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
            <div className="work-examples-author3">
              <span className="work-examples-name3">Joanna Smith</span>
              <span className="work-examples-location1">Briville</span>
            </div>
          </div>
          <div className="work-examples-quote4">
            <p className="work-examples-quote5">
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
            <div className="work-examples-author4">
              <span className="work-examples-name4">Joanna Smith</span>
              <span className="work-examples-location2">Briville</span>
            </div>
          </div>
          <div className="work-examples-quote6">
            <p className="work-examples-quote7">
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
            <div className="work-examples-author5">
              <span className="work-examples-name5">Joanna Smith</span>
              <span className="work-examples-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="work-examples-controls2">
          <button className="work-examples-previous2 button">
            <svg viewBox="0 0 1024 1024" className="work-examples-icon52">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="work-examples-next2 button">
            <svg viewBox="0 0 1024 1024" className="work-examples-icon54">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button work-examples-button4">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="work-examples-f-a-q">
        <div className="work-examples-header27">
          <h2 className="work-examples-heading17">
            <span>Frequently asked </span>
            <span className="work-examples-text097">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="work-examples-content24">
          <div className="work-examples-column">
            <div className="work-examples-element04">
              <h3 className="work-examples-header28">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="work-examples-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="work-examples-element05">
              <h3 className="work-examples-header29">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="work-examples-content26">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="work-examples-element06">
              <h3 className="work-examples-header30">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="work-examples-content27">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="work-examples-column1">
            <div className="work-examples-element07">
              <h3 className="work-examples-header31">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="work-examples-content28">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="work-examples-element08">
              <h3 className="work-examples-header32">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="work-examples-content29">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="work-examples-element09">
              <h3 className="work-examples-header33">
                Incididunt ut labore et dolore?
              </h3>
              <p className="work-examples-content30">
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
      <div className="work-examples-footer">
        <div className="work-examples-content31">
          <div className="work-examples-main">
            <div className="work-examples-branding1">
              <Link to="/" className="work-examples-navlink">
                <img
                  alt="image"
                  src="https://i.imgur.com/h00gRM7.png"
                  className="work-examples-image16"
                />
              </Link>
              <span className="work-examples-text099">
                Available world-wide, at any time.
              </span>
            </div>
            <div className="work-examples-links">
              <div className="work-examples-column2">
                <span className="work-examples-header34">Company</span>
                <div className="work-examples-list">
                  <Link to="/" className="work-examples-navlink01">
                    About
                  </Link>
                  <Link to="/" className="work-examples-navlink02">
                    Services
                  </Link>
                  <Link to="/" className="work-examples-navlink03">
                    How
                  </Link>
                  <Link to="/" className="work-examples-navlink04">
                    <span className="work-examples-text100">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="work-examples-column3">
                <span className="work-examples-header35">Extern</span>
                <div className="work-examples-list1">
                  <Link to="/" className="work-examples-navlink05">
                    News
                  </Link>
                  <Link to="/" className="work-examples-navlink06">
                    Articles
                  </Link>
                  <Link to="/" className="work-examples-navlink07">
                    Blog
                  </Link>
                  <Link to="/" className="work-examples-navlink08">
                    Privacy
                  </Link>
                  <Link to="/" className="work-examples-navlink09">
                    Terms
                  </Link>
                  <Link to="/" className="work-examples-navlink10">
                    Legal
                  </Link>
                  <Link to="/" className="work-examples-navlink11">
                    Press
                  </Link>
                </div>
              </div>
              <div className="work-examples-column4">
                <span className="work-examples-header36">Social</span>
                <div className="work-examples-list2">
                  <Link to="/" className="work-examples-navlink12">
                    LinkedIn
                  </Link>
                  <Link to="/" className="work-examples-navlink13">
                    Twitter
                  </Link>
                  <Link to="/" className="work-examples-navlink14">
                    Instagram
                  </Link>
                  <Link to="/" className="work-examples-navlink15">
                    Facebook
                  </Link>
                  <Link to="/" className="work-examples-navlink16">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="work-examples-bottom">
            <span className="work-examples-text102">
              © 2023 MOVIEW | Stefan Doncean - All rights reserved
            </span>
            <a
              href="#header"
              data-role="scroll-top"
              className="work-examples-link2 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="work-examples-image17"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
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
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default WorkExamples
