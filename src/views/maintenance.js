import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './maintenance.css'

const Maintenance = (props) => {
  return (
    <div className="maintenance-container">
      <Helmet>
        <title>Maintenance - Moview Productions | Stefan Doncean</title>
        <meta
          name="description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:title"
          content="Maintenance - Moview Productions | Stefan Doncean"
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
      <header data-role="Header" className="maintenance-header">
        <img
          alt="logo"
          src="https://i.imgur.com/h00gRM7.png"
          className="maintenance-image"
        />
        <div className="maintenance-nav">
          <NavigationLinks1 rootClassName="rootClassName27"></NavigationLinks1>
        </div>
        <div data-role="BurgerMenu" className="maintenance-burger-menu">
          <svg viewBox="0 0 1024 1024" className="maintenance-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="maintenance-mobile-menu">
          <div className="maintenance-nav1">
            <div className="maintenance-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="maintenance-image01"
              />
              <div
                data-role="CloseMobileMenu"
                className="maintenance-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="maintenance-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName28"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="maintenance-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="maintenance-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="maintenance-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="maintenance-hero">
        <video
          loop
          muted
          poster="https://i.imgur.com/fNaO2U2.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="maintenance-video"
        ></video>
        <header data-thq="thq-navbar" className="maintenance-navbar">
          <img
            alt="image"
            src="https://i.imgur.com/h00gRM7.png"
            className="maintenance-branding"
          />
          <div data-thq="thq-burger-menu" className="maintenance-burger-menu1">
            <div className="maintenance-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="maintenance-icon10"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="maintenance-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="maintenance-nav2"
            >
              <div className="maintenance-container2">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="maintenance-image02"
                />
                <div
                  data-thq="thq-close-menu"
                  className="maintenance-menu-close1"
                >
                  <svg viewBox="0 0 1024 1024" className="maintenance-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="maintenance-nav3"
              >
                <span className="maintenance-text">About</span>
                <span className="maintenance-text001">Features</span>
                <span className="maintenance-text002">Pricing</span>
                <span className="maintenance-text003">Team</span>
                <span className="maintenance-text004">Blog</span>
              </nav>
              <div className="maintenance-container3">
                <button className="maintenance-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="maintenance-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="maintenance-icon13"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="maintenance-icon15"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="maintenance-icon17"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="maintenance-hero-content">
          <div className="maintenance-header-container">
            <div className="maintenance-header01">
              <h1 className="maintenance-heading">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="maintenance-text006">imagination</span>
                <br></br>
              </h1>
            </div>
            <p className="maintenance-caption">
              We make brands stand out through Video Content.
            </p>
          </div>
          <button
            id="contact"
            name="Let's talk"
            type="button"
            className="button maintenance-button"
          >
            <span>
              <span>Let&apos;s talk!</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="maintenance-note">
        <h2 className="maintenance-caption01">
          <span className="maintenance-text011">
            Get noticed with &quot;Scroll Stopping&quot; Video Content!
          </span>
          <br></br>
          <br className="maintenance-text013"></br>
          <span className="maintenance-text014">
            Our diverse team has created engaging content for brands all over
            the world.
          </span>
        </h2>
      </section>
      <section className="maintenance-slider">
        <div className="maintenance-header02">
          <h2 className="maintenance-heading01">
            <span>
              From nothing to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="maintenance-text016">something</span>
            <span className="maintenance-text017">
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="maintenance-selector">
          <p className="maintenance-caption02">
            <span className="maintenance-text018">
              The highest status people in human history are those that asked
              for nothing and gave everything.
            </span>
            <br className="maintenance-text019"></br>
            <br className="maintenance-text020"></br>
          </p>
          <div className="maintenance-slide-titles">
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
      <section className="maintenance-statistics">
        <div className="maintenance-content">
          <div className="maintenance-stat">
            <h3 className="maintenance-header03">Ultra-fast turnaround</h3>
          </div>
          <div className="maintenance-stat1">
            <h3 className="maintenance-header04">Stress-free experience</h3>
          </div>
          <div className="maintenance-stat2">
            <h3 className="maintenance-header05">Trusted service</h3>
          </div>
        </div>
      </section>
      <section className="maintenance-slides">
        <div className="maintenance-slider1 slider blaze-slider">
          <div className="maintenance-slider-container blaze-container">
            <div className="maintenance-slider-track-container blaze-track-container">
              <div className="maintenance-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="maintenance-image03"
                  />
                  <div className="maintenance-content01">
                    <div className="maintenance-header06">
                      <h3 className="maintenance-heading02">Metaverse</h3>
                      <p className="maintenance-caption03">
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
                    <div className="maintenance-more">
                      <span className="maintenance-caption04">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="maintenance-icon19"
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
                    className="maintenance-image04"
                  />
                  <div className="maintenance-content02">
                    <div className="maintenance-header07">
                      <h3 className="maintenance-heading03">Ecosystems</h3>
                      <p className="maintenance-caption05">
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
                    <div className="maintenance-more1">
                      <span className="maintenance-caption06">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="maintenance-icon21"
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
                    className="maintenance-image05"
                  />
                  <div className="maintenance-content03">
                    <div className="maintenance-header08">
                      <h3 className="maintenance-heading04">Development</h3>
                      <p className="maintenance-caption07">
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
                    <div className="maintenance-more2">
                      <span className="maintenance-caption08">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="maintenance-icon23"
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
                    className="maintenance-image06"
                  />
                  <div className="maintenance-content04">
                    <div className="maintenance-header09">
                      <h3 className="maintenance-heading05">Integration</h3>
                      <p className="maintenance-caption09">
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
                    <div className="maintenance-more3">
                      <span className="maintenance-caption10">Read More</span>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="maintenance-icon25"
                      >
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="maintenance-controls">
              <button
                data-role="previous-banner-button"
                className="maintenance-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="maintenance-icon27">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="maintenance-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="maintenance-icon29">
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
      <section className="maintenance-get-started">
        <div className="maintenance-header-container1">
          <div className="maintenance-header10">
            <h2 className="maintenance-heading06">
              Moview is the home to our Video Production company where we create
              stunning visual content to ensure brands stand out and get
              noticed.
            </h2>
            <p className="maintenance-caption11">
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
          <div className="maintenance-button1">
            <button className="button">
              <span>Our work</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.imgur.com/S0nMdGY.jpg"
          className="maintenance-image07"
        />
      </section>
      <h2 className="maintenance-heading07">
        <span>
          Customer validation is an essential phase of the
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="maintenance-text027">production process.</span>
        <br></br>
      </h2>
      <section className="maintenance-objectives">
        <div className="maintenance-content05">
          <span className="maintenance-text029">Objectives</span>
          <div className="maintenance-objectives-list">
            <div className="objective">
              <h3 className="maintenance-text030">Dream it</h3>
              <p className="maintenance-text031">
                <span>
                  It all begins with an idea. Whatever it is, the way you tell
                  your story online can make all the difference to your brand
                  image and sales. We work with businesses to create the perfect
                  content for their audience to enhance their business.
                </span>
                <br className="maintenance-text033"></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective maintenance-objective1">
              <h3 className="maintenance-text035">Capture it</h3>
              <p className="maintenance-text036">
                <span>
                  Using the latest high-quality camera equipment our team will
                  deliver the smoothest production possible, giving you one less
                  thing to worry about. You can be assured that our experienced
                  professionals will create the best possible content, on time
                  and on budget.
                </span>
                <br className="maintenance-text038"></br>
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
            <div className="objective maintenance-objective2">
              <h3 className="maintenance-text041">Create it</h3>
              <p className="maintenance-text042">
                <span>
                  At our studio, we have an in-house editing team ready to work
                  on your project as soon as we finish filming. Meaning that
                  100% of projects are delivered on time, most in as little as 3
                  days.
                </span>
                <br className="maintenance-text044"></br>
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
      <section className="maintenance-growth">
        <div className="maintenance-content06">
          <div className="maintenance-header11">
            <div className="maintenance-header12">
              <h2 className="maintenance-heading08">
                We guarantee you&apos;ll love your video or your money back*.
              </h2>
            </div>
            <p className="maintenance-caption12">
              <span className="maintenance-text047">
                Investing in a new video for your business can be a big
                decision, so to give you confidence, we created our satisfaction
                guarantee. It&apos;s simple and takes the stress away. No
                catches, If you don&apos;t like the video and we can&apos;t
                create a version you&apos;re happy with, you don&apos;t pay.
              </span>
              <br className="maintenance-text048"></br>
              <br className="maintenance-text049"></br>
              <span className="maintenance-text050">
                *refund amount is noted on the contract.
              </span>
              <br className="maintenance-text051"></br>
              <br className="maintenance-text052"></br>
              <br className="maintenance-text053"></br>
            </p>
          </div>
          <div className="maintenance-testimonial">
            <div className="maintenance-content07">
              <span className="maintenance-text054">Testimonial</span>
              <p className="maintenance-text055">
                &quot;He knows all the right angles to shoot a precious moment!
                Hard-working man, a professional artist who puts passion in his
                work!&quot;
              </p>
            </div>
            <div className="maintenance-information">
              <div className="maintenance-author">
                <img
                  alt="image"
                  src="https://i.imgur.com/0Lpv0Xc.jpg"
                  className="maintenance-icon31"
                />
                <span className="maintenance-name">Tea Visan</span>
              </div>
              <a
                href="https://www.facebook.com/DirtyShirtRomania/"
                target="_blank"
                rel="noreferrer noopener"
                className="maintenance-link"
              >
                <img
                  alt="image"
                  src="https://i.imgur.com/k2t9fax.jpg"
                  className="maintenance-from"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="maintenance-images">
          <div className="maintenance-square"></div>
          <img
            alt="image"
            src="https://i.imgur.com/ubsnns9.jpg"
            className="maintenance-image08"
          />
        </div>
      </section>
      <section className="maintenance-experience">
        <div className="maintenance-images1">
          <div className="maintenance-square1"></div>
          <img
            alt="image"
            src="https://i.imgur.com/p0gMEgQ.jpg"
            className="maintenance-image09"
          />
        </div>
        <div className="maintenance-content08">
          <div className="maintenance-header13">
            <div className="maintenance-header-container2">
              <div className="maintenance-header14">
                <h2 className="maintenance-heading09">
                  A trusted service every time.
                </h2>
              </div>
              <p className="maintenance-caption13">
                We’ve built strong and long-lasting client relationships by
                working hard to combine creativity, excellent service delivery
                and corporate experience.
              </p>
            </div>
            <div className="maintenance-checkmarks">
              <div className="maintenance-check">
                <div className="maintenance-mark">
                  <svg viewBox="0 0 1024 1024" className="maintenance-icon32">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="maintenance-text056">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="maintenance-check1">
                <div className="maintenance-mark1">
                  <svg viewBox="0 0 1024 1024" className="maintenance-icon34">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="maintenance-text057">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="maintenance-check2">
                <div className="maintenance-mark2">
                  <svg viewBox="0 0 1024 1024" className="maintenance-icon36">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="maintenance-text058">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="maintenance-check3">
                <div className="maintenance-mark3">
                  <svg viewBox="0 0 1024 1024" className="maintenance-icon38">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="maintenance-text059">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="maintenance-testimonial1">
            <div className="maintenance-content09">
              <span className="maintenance-text060">Testimonial</span>
              <p className="maintenance-text061">
                &quot;A pleasant collaboration from all points of view! Positive
                work attitude and creativity are the strong points! It has
                everything that is technically necessary  for a quality
                result!&quot;
              </p>
            </div>
            <div className="maintenance-information1">
              <div className="maintenance-author1">
                <span className="maintenance-name1">George </span>
              </div>
              <a
                href="https://www.atria.ro/"
                target="_blank"
                rel="noreferrer noopener"
                className="maintenance-link1"
              >
                <img
                  alt="image"
                  src="data:image/png;base64,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"
                  className="maintenance-from1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="maintenance-create">
        <div className="maintenance-content10">
          <div className="maintenance-header15">
            <h2 className="maintenance-heading10">
              <span>Outstanding </span>
              <span className="maintenance-text063">visual content!</span>
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
          <button className="maintenance-button3 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="maintenance-comparision">
        <div className="maintenance-header-container3">
          <div className="maintenance-header16">
            <h2 className="maintenance-heading11">
              <span>Packages we offer</span>
              <br></br>
            </h2>
          </div>
          <p className="maintenance-caption14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="maintenance-table">
          <div className="maintenance-row">
            <div className="maintenance-headers">
              <span className="maintenance-text071">Placeholder</span>
            </div>
            <div className="maintenance-plans">
              <div className="maintenance-row01">
                <span className="maintenance-text072">TOGHTR</span>
                <span className="maintenance-text073">AGENCY</span>
                <span className="maintenance-text074">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="maintenance-row02">
            <div className="maintenance-headers1">
              <span className="maintenance-text075">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="maintenance-plans1">
              <div className="maintenance-row03">
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
          <div className="maintenance-row04">
            <div className="maintenance-headers2">
              <span className="maintenance-text076">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="maintenance-plans2">
              <div className="maintenance-row05">
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
          <div className="maintenance-row06">
            <div className="maintenance-headers3">
              <span className="maintenance-text077">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="maintenance-plans3">
              <div className="maintenance-row07">
                <div className="value">
                  <span className="maintenance-text078">Custom</span>
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
          <div className="maintenance-row08">
            <div className="maintenance-headers4">
              <span className="maintenance-text079">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="maintenance-plans4">
              <div className="maintenance-row09">
                <div className="value">
                  <span className="maintenance-text080">Unlimited</span>
                </div>
                <div className="value">
                  <span className="maintenance-text081">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="maintenance-row10">
            <div className="maintenance-headers5">
              <span className="maintenance-text082">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="maintenance-plans5">
              <div className="maintenance-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="maintenance-text083">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="maintenance-row12">
            <div className="maintenance-headers6">
              <span className="maintenance-text084">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="maintenance-plans6">
              <div className="maintenance-row13">
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
          <div className="maintenance-row14">
            <div className="maintenance-headers7">
              <span className="maintenance-text085">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="maintenance-plans7">
              <div className="maintenance-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="maintenance-text086">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="maintenance-data">
        <div className="maintenance-header-container4">
          <div className="maintenance-header17">
            <div className="maintenance-row16">
              <h2 className="maintenance-heading12">
                <span>
                  Versatile Video Production for Diverse Business Needs.
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="maintenance-caption15">
            <span className="maintenance-text089">
              We make videos for all sorts of businesses for all sorts of
              reasons, from sharing a successful customer story, to an authentic
              employee experience or a new product development. We have filmed
              for clients in their corporate offices, homes, factories, events
              and others.
            </span>
            <br className="maintenance-text090"></br>
            <br className="maintenance-text091"></br>
            <span className="maintenance-text092">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
        </div>
        <div className="maintenance-content11">
          <div className="maintenance-image10">
            <img
              alt="image"
              src="https://i.imgur.com/hjx4j7N.jpg"
              className="maintenance-image11"
            />
          </div>
          <div className="maintenance-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="maintenance-header18">Our studio</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name20"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="maintenance-header19">Our prices</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name21"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="maintenance-header20">Photography</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name22"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="maintenance-header21">Promotional videos</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name23"></IconContainer>
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
      <section className="maintenance-customer">
        <div className="maintenance-header22"></div>
        <div className="maintenance-quotes">
          <div className="maintenance-quote">
            <p className="maintenance-quote1">
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
            <div className="maintenance-author2">
              <span className="maintenance-name2">Joanna Smith</span>
              <span className="maintenance-location">Briville</span>
            </div>
          </div>
          <div className="maintenance-quote2">
            <p className="maintenance-quote3">
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
            <div className="maintenance-author3">
              <span className="maintenance-name3">Joanna Smith</span>
              <span className="maintenance-location1">Briville</span>
            </div>
          </div>
          <div className="maintenance-quote4">
            <p className="maintenance-quote5">
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
            <div className="maintenance-author4">
              <span className="maintenance-name4">Joanna Smith</span>
              <span className="maintenance-location2">Briville</span>
            </div>
          </div>
          <div className="maintenance-quote6">
            <p className="maintenance-quote7">
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
            <div className="maintenance-author5">
              <span className="maintenance-name5">Joanna Smith</span>
              <span className="maintenance-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="maintenance-controls1">
          <button className="maintenance-previous1 button">
            <svg viewBox="0 0 1024 1024" className="maintenance-icon40">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="maintenance-next1 button">
            <svg viewBox="0 0 1024 1024" className="maintenance-icon42">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button maintenance-button4">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="maintenance-faq">
        <div className="maintenance-header23">
          <h2 className="maintenance-heading13">
            <span>Frequently asked </span>
            <span className="maintenance-text097">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="maintenance-content20">
          <div className="maintenance-column">
            <div className="maintenance-element04">
              <h3 className="maintenance-header24">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="maintenance-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="maintenance-element05">
              <h3 className="maintenance-header25">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="maintenance-content22">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="maintenance-element06">
              <h3 className="maintenance-header26">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="maintenance-content23">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="maintenance-column1">
            <div className="maintenance-element07">
              <h3 className="maintenance-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="maintenance-content24">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="maintenance-element08">
              <h3 className="maintenance-header28">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="maintenance-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="maintenance-element09">
              <h3 className="maintenance-header29">
                Incididunt ut labore et dolore?
              </h3>
              <p className="maintenance-content26">
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
      <div className="maintenance-feature-card">
        <svg viewBox="0 0 1024 1024" className="maintenance-icon44">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <h2 className="maintenance-text099">
          Oops! Looks like you&apos;ve stumbled upon a page that isn&apos;t
          ready.
        </h2>
        <span className="maintenance-text100">
          Our site is currently getting a well-deserved spa treatment, which
          means it&apos;s taking a little longer than usual to load. We know
          you&apos;re probably wondering what could be so important that we need
          to take our site down, but let&apos;s just say our code was in dire
          need of a deep tissue massage. Don&apos;t worry, we&apos;re not just
          sitting around eating donuts (although that does sound tempting). Our
          tech wizards are hard at work to make sure the site is looking and
          feeling better than ever before. In the meantime, why not take a break
          and do some finger stretches or yoga? We&apos;ll be back soon!
        </span>
        <Link to="/" className="maintenance-navlink button">
          Home
        </Link>
        <span className="maintenance-text101">SEE MORE</span>
      </div>
      <div className="maintenance-footer">
        <div className="maintenance-content27">
          <div className="maintenance-main">
            <div className="maintenance-branding1">
              <Link to="/" className="maintenance-navlink01">
                <img
                  alt="image"
                  src="https://i.imgur.com/h00gRM7.png"
                  className="maintenance-image12"
                />
              </Link>
              <span className="maintenance-text102">
                Available world-wide, at any time.
              </span>
            </div>
            <div className="maintenance-links">
              <div className="maintenance-column2">
                <span className="maintenance-header30">Company</span>
                <div className="maintenance-list">
                  <Link to="/" className="maintenance-navlink02">
                    About
                  </Link>
                  <Link to="/" className="maintenance-navlink03">
                    Services
                  </Link>
                  <Link to="/" className="maintenance-navlink04">
                    How
                  </Link>
                  <Link to="/" className="maintenance-navlink05">
                    <span className="maintenance-text103">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="maintenance-column3">
                <span className="maintenance-header31">Extern</span>
                <div className="maintenance-list1">
                  <Link to="/" className="maintenance-navlink06">
                    News
                  </Link>
                  <Link to="/" className="maintenance-navlink07">
                    Articles
                  </Link>
                  <Link to="/" className="maintenance-navlink08">
                    Blog
                  </Link>
                  <Link to="/" className="maintenance-navlink09">
                    Privacy
                  </Link>
                  <Link to="/" className="maintenance-navlink10">
                    Terms
                  </Link>
                  <Link to="/" className="maintenance-navlink11">
                    Legal
                  </Link>
                  <Link to="/" className="maintenance-navlink12">
                    Press
                  </Link>
                </div>
              </div>
              <div className="maintenance-column4">
                <span className="maintenance-header32">Social</span>
                <div className="maintenance-list2">
                  <Link to="/" className="maintenance-navlink13">
                    LinkedIn
                  </Link>
                  <Link to="/" className="maintenance-navlink14">
                    Twitter
                  </Link>
                  <Link to="/" className="maintenance-navlink15">
                    Instagram
                  </Link>
                  <Link to="/" className="maintenance-navlink16">
                    Facebook
                  </Link>
                  <Link to="/" className="maintenance-navlink17">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="maintenance-bottom">
            <span className="maintenance-text105">
              © 2023 MOVIEW | Stefan Doncean - All rights reserved
            </span>
            <a
              href="#header"
              data-role="scroll-top"
              className="maintenance-link2 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="maintenance-image13"
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

export default Maintenance
