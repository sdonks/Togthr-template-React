import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Moview Productions | Stefan Doncean</title>
        <meta
          name="description"
          content="Moview is the home to our Video Production company where we create stunning visual content to ensure brands stand out and get noticed."
        />
        <meta
          property="og:title"
          content="Contact - Moview Productions | Stefan Doncean"
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
      <header data-role="Header" className="contact-header">
        <Link to="/" className="contact-navlink">
          <img
            alt="logo"
            src="https://i.imgur.com/h00gRM7.png"
            className="contact-image"
          />
        </Link>
        <div className="contact-nav">
          <NavigationLinks1 rootClassName="rootClassName25"></NavigationLinks1>
        </div>
        <div data-role="BurgerMenu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="contact-mobile-menu">
          <div className="contact-nav1">
            <div className="contact-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="contact-image01"
              />
              <div data-role="CloseMobileMenu" className="contact-menu-close">
                <svg viewBox="0 0 1024 1024" className="contact-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName26"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="contact-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="contact-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="contact-hero">
        <video
          loop
          muted
          preload="auto"
          autoPlay
          playsInline
          className="contact-video"
        ></video>
        <header data-thq="thq-navbar" className="contact-navbar">
          <img
            alt="image"
            src="https://i.imgur.com/h00gRM7.png"
            className="contact-branding"
          />
          <div data-thq="thq-burger-menu" className="contact-burger-menu1">
            <div className="contact-hamburger">
              <img
                alt="image"
                src="/hamburger.svg"
                className="contact-icon10"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="contact-nav2"
            >
              <div className="contact-container02">
                <img alt="image" src="/logo.svg" className="contact-image02" />
                <div data-thq="thq-close-menu" className="contact-menu-close1">
                  <svg viewBox="0 0 1024 1024" className="contact-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="contact-nav3"
              >
                <span className="contact-text">About</span>
                <span className="contact-text001">Features</span>
                <span className="contact-text002">Pricing</span>
                <span className="contact-text003">Team</span>
                <span className="contact-text004">Blog</span>
              </nav>
              <div className="contact-container03">
                <button className="contact-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="contact-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon13"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon15"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon17"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="contact-hero-content">
          <div className="contact-container04">
            <div className="contact-container05">
              <Script
                html={`<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/moview-productions?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ee282b" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->`}
              ></Script>
            </div>
          </div>
          <div className="contact-header-container">
            <div className="contact-header01"></div>
          </div>
          <h1 className="contact-text005">
            <span>
              This contact form is not working right now.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>You can reach us at donceanstefan.media@gmail.com</span>
          </h1>
          <form className="contact-form">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="contact-textinput input"
            />
            <input
              type="text"
              name="Email"
              placeholder="Your Email"
              className="contact-textinput1 input"
            />
            <input
              type="text"
              name="Message"
              placeholder="Your Message"
              className="contact-textinput2 input textarea"
            />
            <button className="contact-button button">Send</button>
          </form>
        </div>
      </section>
      <section className="contact-note">
        <h2 className="contact-caption">
          <span className="contact-text009">
            Get noticed with &quot;Scroll Stopping&quot; Video Content!
          </span>
          <br></br>
          <br className="contact-text011"></br>
          <span className="contact-text012">
            Our diverse team has created engaging content for brands all over
            the world.
          </span>
        </h2>
      </section>
      <section className="contact-slider">
        <div className="contact-header02">
          <h2 className="contact-heading">
            <span>
              From nothing to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="contact-text014">something</span>
            <span className="contact-text015">
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="contact-selector">
          <p className="contact-caption01">
            <span className="contact-text016">
              The highest status people in human history are those that asked
              for nothing and gave everything.
            </span>
            <br className="contact-text017"></br>
            <br className="contact-text018"></br>
          </p>
          <div className="contact-slide-titles">
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
      <section className="contact-statistics">
        <div className="contact-content">
          <div className="contact-stat">
            <h3 className="contact-header03">Ultra-fast turnaround</h3>
          </div>
          <div className="contact-stat1">
            <h3 className="contact-header04">Stress-free experience</h3>
          </div>
          <div className="contact-stat2">
            <h3 className="contact-header05">Trusted service</h3>
          </div>
        </div>
      </section>
      <section className="contact-slides">
        <div className="contact-slider1 slider blaze-slider">
          <div className="contact-slider-container blaze-container">
            <div className="contact-slider-track-container blaze-track-container">
              <div className="contact-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="contact-image03"
                  />
                  <div className="contact-content01">
                    <div className="contact-header06">
                      <h3 className="contact-heading01">Metaverse</h3>
                      <p className="contact-caption02">
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
                    <div className="contact-more">
                      <span className="contact-caption03">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="contact-icon19">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="contact-image04"
                  />
                  <div className="contact-content02">
                    <div className="contact-header07">
                      <h3 className="contact-heading02">Ecosystems</h3>
                      <p className="contact-caption04">
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
                    <div className="contact-more1">
                      <span className="contact-caption05">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="contact-icon21">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="contact-image05"
                  />
                  <div className="contact-content03">
                    <div className="contact-header08">
                      <h3 className="contact-heading03">Development</h3>
                      <p className="contact-caption06">
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
                    <div className="contact-more2">
                      <span className="contact-caption07">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="contact-icon23">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="contact-image06"
                  />
                  <div className="contact-content04">
                    <div className="contact-header09">
                      <h3 className="contact-heading04">Integration</h3>
                      <p className="contact-caption08">
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
                    <div className="contact-more3">
                      <span className="contact-caption09">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="contact-icon25">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-controls">
              <button
                data-role="previous-banner-button"
                className="contact-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="contact-icon27">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="contact-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="contact-icon29">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-container07">
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
      <section className="contact-get-started">
        <div className="contact-header-container1">
          <div className="contact-header10">
            <h2 className="contact-heading05">
              Moview is the home to our Video Production company where we create
              stunning visual content to ensure brands stand out and get
              noticed.
            </h2>
            <p className="contact-caption10">
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
          <div className="contact-button1">
            <button className="button">
              <span>Our work</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.imgur.com/S0nMdGY.jpg"
          className="contact-image07"
        />
      </section>
      <h2 className="contact-heading06">
        <span>
          Customer validation is an essential phase of the
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="contact-text025">production process.</span>
        <br></br>
      </h2>
      <section className="contact-objectives">
        <div className="contact-content05">
          <span className="contact-text027">Objectives</span>
          <div className="contact-objectives-list">
            <div className="objective">
              <h3 className="contact-text028">Dream it</h3>
              <p className="contact-text029">
                <span>
                  It all begins with an idea. Whatever it is, the way you tell
                  your story online can make all the difference to your brand
                  image and sales. We work with businesses to create the perfect
                  content for their audience to enhance their business.
                </span>
                <br className="contact-text031"></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="objective contact-objective1">
              <h3 className="contact-text033">Capture it</h3>
              <p className="contact-text034">
                <span>
                  Using the latest high-quality camera equipment our team will
                  deliver the smoothest production possible, giving you one less
                  thing to worry about. You can be assured that our experienced
                  professionals will create the best possible content, on time
                  and on budget.
                </span>
                <br className="contact-text036"></br>
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
            <div className="objective contact-objective2">
              <h3 className="contact-text039">Create it</h3>
              <p className="contact-text040">
                <span>
                  At our studio, we have an in-house editing team ready to work
                  on your project as soon as we finish filming. Meaning that
                  100% of projects are delivered on time, most in as little as 3
                  days.
                </span>
                <br className="contact-text042"></br>
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
      <section className="contact-growth">
        <div className="contact-content06">
          <div className="contact-header11">
            <div className="contact-header12">
              <h2 className="contact-heading07">
                We guarantee you&apos;ll love your video or your money back*.
              </h2>
            </div>
            <p className="contact-caption11">
              <span className="contact-text045">
                Investing in a new video for your business can be a big
                decision, so to give you confidence, we created our satisfaction
                guarantee. It&apos;s simple and takes the stress away. No
                catches, If you don&apos;t like the video and we can&apos;t
                create a version you&apos;re happy with, you don&apos;t pay.
              </span>
              <br className="contact-text046"></br>
              <br className="contact-text047"></br>
              <span className="contact-text048">
                *refund amount is noted on the contract.
              </span>
              <br className="contact-text049"></br>
              <br className="contact-text050"></br>
              <br className="contact-text051"></br>
            </p>
          </div>
          <div className="contact-testimonial">
            <div className="contact-content07">
              <span className="contact-text052">Testimonial</span>
              <p className="contact-text053">
                &quot;He knows all the right angles to shoot a precious moment!
                Hard-working man, a professional artist who puts passion in his
                work!&quot;
              </p>
            </div>
            <div className="contact-information">
              <div className="contact-author">
                <img
                  alt="image"
                  src="https://i.imgur.com/0Lpv0Xc.jpg"
                  className="contact-icon31"
                />
                <span className="contact-name">Tea Visan</span>
              </div>
              <a
                href="https://www.facebook.com/DirtyShirtRomania/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link"
              >
                <img
                  alt="image"
                  src="https://i.imgur.com/k2t9fax.jpg"
                  className="contact-from"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-images">
          <div className="contact-square"></div>
          <img
            alt="image"
            src="https://i.imgur.com/ubsnns9.jpg"
            className="contact-image08"
          />
        </div>
      </section>
      <section className="contact-experience">
        <div className="contact-images1">
          <div className="contact-square1"></div>
          <img
            alt="image"
            src="https://i.imgur.com/p0gMEgQ.jpg"
            className="contact-image09"
          />
        </div>
        <div className="contact-content08">
          <div className="contact-header13">
            <div className="contact-header-container2">
              <div className="contact-header14">
                <h2 className="contact-heading08">
                  A trusted service every time.
                </h2>
              </div>
              <p className="contact-caption12">
                We’ve built strong and long-lasting client relationships by
                working hard to combine creativity, excellent service delivery
                and corporate experience.
              </p>
            </div>
            <div className="contact-checkmarks">
              <div className="contact-check">
                <div className="contact-mark">
                  <svg viewBox="0 0 1024 1024" className="contact-icon32">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="contact-text054">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="contact-check1">
                <div className="contact-mark1">
                  <svg viewBox="0 0 1024 1024" className="contact-icon34">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="contact-text055">
                  Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className="contact-check2">
                <div className="contact-mark2">
                  <svg viewBox="0 0 1024 1024" className="contact-icon36">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="contact-text056">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="contact-check3">
                <div className="contact-mark3">
                  <svg viewBox="0 0 1024 1024" className="contact-icon38">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="contact-text057">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="contact-testimonial1">
            <div className="contact-content09">
              <span className="contact-text058">Testimonial</span>
              <p className="contact-text059">
                &quot;A pleasant collaboration from all points of view! Positive
                work attitude and creativity are the strong points! It has
                everything that is technically necessary  for a quality
                result!&quot;
              </p>
            </div>
            <div className="contact-information1">
              <div className="contact-author1">
                <span className="contact-name1">George </span>
              </div>
              <a
                href="https://www.atria.ro/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link1"
              >
                <img
                  alt="image"
                  src="data:image/png;base64,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"
                  className="contact-from1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-create">
        <div className="contact-content10">
          <div className="contact-header15">
            <h2 className="contact-heading09">
              <span>Outstanding </span>
              <span className="contact-text061">visual content!</span>
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
          <button className="contact-button3 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="contact-comparision">
        <div className="contact-header-container3">
          <div className="contact-header16">
            <h2 className="contact-heading10">
              <span>Packages we offer</span>
              <br></br>
            </h2>
          </div>
          <p className="contact-caption13">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="contact-table">
          <div className="contact-row">
            <div className="contact-headers">
              <span className="contact-text069">Placeholder</span>
            </div>
            <div className="contact-plans">
              <div className="contact-row01">
                <span className="contact-text070">TOGHTR</span>
                <span className="contact-text071">AGENCY</span>
                <span className="contact-text072">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="contact-row02">
            <div className="contact-headers1">
              <span className="contact-text073">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="contact-plans1">
              <div className="contact-row03">
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
          <div className="contact-row04">
            <div className="contact-headers2">
              <span className="contact-text074">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="contact-plans2">
              <div className="contact-row05">
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
          <div className="contact-row06">
            <div className="contact-headers3">
              <span className="contact-text075">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="contact-plans3">
              <div className="contact-row07">
                <div className="value">
                  <span className="contact-text076">Custom</span>
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
          <div className="contact-row08">
            <div className="contact-headers4">
              <span className="contact-text077">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="contact-plans4">
              <div className="contact-row09">
                <div className="value">
                  <span className="contact-text078">Unlimited</span>
                </div>
                <div className="value">
                  <span className="contact-text079">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-row10">
            <div className="contact-headers5">
              <span className="contact-text080">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="contact-plans5">
              <div className="contact-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="contact-text081">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-row12">
            <div className="contact-headers6">
              <span className="contact-text082">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="contact-plans6">
              <div className="contact-row13">
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
          <div className="contact-row14">
            <div className="contact-headers7">
              <span className="contact-text083">
                Lorem ipsum dolor sit amet
              </span>
            </div>
            <div className="contact-plans7">
              <div className="contact-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="contact-text084">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-data">
        <div className="contact-header-container4">
          <div className="contact-header17">
            <div className="contact-row16">
              <h2 className="contact-heading11">
                <span>
                  Versatile Video Production for Diverse Business Needs.
                </span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="contact-caption14">
            <span className="contact-text087">
              We make videos for all sorts of businesses for all sorts of
              reasons, from sharing a successful customer story, to an authentic
              employee experience or a new product development. We have filmed
              for clients in their corporate offices, homes, factories, events
              and others.
            </span>
            <br className="contact-text088"></br>
            <br className="contact-text089"></br>
            <span className="contact-text090">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
        </div>
        <div className="contact-content11">
          <div className="contact-image10">
            <img
              alt="image"
              src="https://i.imgur.com/hjx4j7N.jpg"
              className="contact-image11"
            />
          </div>
          <div className="contact-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="contact-header18">Our studio</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="contact-header19">Our prices</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name9"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="contact-header20">Photography</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name10"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="contact-header21">Promotional videos</h3>
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
              <IconContainer rootClassName="icon-container-root-class-name11"></IconContainer>
            </div>
            <div>
              <div className="contact-container09">
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
      <section className="contact-customer">
        <div className="contact-header22"></div>
        <div className="contact-quotes">
          <div className="contact-quote">
            <p className="contact-quote1">
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
            <div className="contact-author2">
              <span className="contact-name2">Joanna Smith</span>
              <span className="contact-location">Briville</span>
            </div>
          </div>
          <div className="contact-quote2">
            <p className="contact-quote3">
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
            <div className="contact-author3">
              <span className="contact-name3">Joanna Smith</span>
              <span className="contact-location1">Briville</span>
            </div>
          </div>
          <div className="contact-quote4">
            <p className="contact-quote5">
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
            <div className="contact-author4">
              <span className="contact-name4">Joanna Smith</span>
              <span className="contact-location2">Briville</span>
            </div>
          </div>
          <div className="contact-quote6">
            <p className="contact-quote7">
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
            <div className="contact-author5">
              <span className="contact-name5">Joanna Smith</span>
              <span className="contact-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="contact-controls1">
          <button className="contact-previous1 button">
            <svg viewBox="0 0 1024 1024" className="contact-icon40">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="contact-next1 button">
            <svg viewBox="0 0 1024 1024" className="contact-icon42">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button contact-button4">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="contact-faq">
        <div className="contact-header23">
          <h2 className="contact-heading12">
            <span>Frequently asked </span>
            <span className="contact-text095">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="contact-content20">
          <div className="contact-column">
            <div className="contact-element04">
              <h3 className="contact-header24">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="contact-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="contact-element05">
              <h3 className="contact-header25">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="contact-content22">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="contact-element06">
              <h3 className="contact-header26">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="contact-content23">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="contact-column1">
            <div className="contact-element07">
              <h3 className="contact-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="contact-content24">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="contact-element08">
              <h3 className="contact-header28">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="contact-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="contact-element09">
              <h3 className="contact-header29">
                Incididunt ut labore et dolore?
              </h3>
              <p className="contact-content26">
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
      <div className="contact-footer">
        <div className="contact-content27">
          <div className="contact-main">
            <div className="contact-branding1">
              <Link to="/" className="contact-navlink01">
                <img
                  alt="image"
                  src="https://i.imgur.com/h00gRM7.png"
                  className="contact-image12"
                />
              </Link>
              <span className="contact-text097">
                Available world-wide, at any time.
              </span>
            </div>
            <div className="contact-links">
              <div className="contact-column2">
                <span className="contact-header30">Company</span>
                <div className="contact-list">
                  <Link to="/" className="contact-navlink02">
                    About
                  </Link>
                  <Link to="/" className="contact-navlink03">
                    Services
                  </Link>
                  <Link to="/" className="contact-navlink04">
                    How
                  </Link>
                  <Link to="/" className="contact-navlink05">
                    <span className="contact-text098">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="contact-column3">
                <span className="contact-header31">Extern</span>
                <div className="contact-list1">
                  <Link to="/" className="contact-navlink06">
                    News
                  </Link>
                  <Link to="/" className="contact-navlink07">
                    Articles
                  </Link>
                  <Link to="/" className="contact-navlink08">
                    Blog
                  </Link>
                  <Link to="/" className="contact-navlink09">
                    Privacy
                  </Link>
                  <Link to="/" className="contact-navlink10">
                    Terms
                  </Link>
                  <Link to="/" className="contact-navlink11">
                    Legal
                  </Link>
                  <Link to="/" className="contact-navlink12">
                    Press
                  </Link>
                </div>
              </div>
              <div className="contact-column4">
                <span className="contact-header32">Social</span>
                <div className="contact-list2">
                  <Link to="/" className="contact-navlink13">
                    LinkedIn
                  </Link>
                  <Link to="/" className="contact-navlink14">
                    Twitter
                  </Link>
                  <Link to="/" className="contact-navlink15">
                    Instagram
                  </Link>
                  <Link to="/" className="contact-navlink16">
                    Facebook
                  </Link>
                  <Link to="/" className="contact-navlink17">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-bottom">
            <span className="contact-text100">
              © 2023 MOVIEW | Stefan Doncean - All rights reserved
            </span>
            <a
              href="#header"
              data-role="scroll-top"
              className="contact-link2 button"
            >
              <img alt="image" src="/arrow.svg" className="contact-image13" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-container11">
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

export default Contact
