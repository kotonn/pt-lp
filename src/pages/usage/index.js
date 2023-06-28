import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Usage = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Usage | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1
              className="usage_title display-6 mb-3"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              どうやって使うの？
            </h1>{" "}
            <hr
              className="t_border my-4 ml-0 text-left"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div
                key={i}
                className="po_item"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <img src={data.img} alt="" />
                <div className="content">
                  <h4 className="po_item_style-title">{data.title}</h4>
                  <p className="po_item_style-description">{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
