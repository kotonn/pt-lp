import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2
                  className="intro_title"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  {introdata.title}
                </h2>
                <h3
                  className="intro_subtitle fluidz-48"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                      wrapperClassName: "type_writer_text"
                    }}
                  />
                </h3>
                <p
                  className="intro_bg_description"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  {introdata.background_description}
                </p>
                <p
                  className="intro_r_description"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  {introdata.reason_description}
                </p>
                <p
                  className="intro_one_description"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  {introdata.one_description}
                </p>
                <div
                  className="intro_btn-container intro_btn-action pb-5"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <Link to="/usage" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      使い方
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/subscription">
                    <div id="button_h" className="ac_btn btn">
                      事前登録
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
