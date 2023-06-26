import React from "react";
import emailjs from '@emailjs/browser'
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'

export const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        async (result) => {
          console.log(result.text)
          try {
            const docRef = await addDoc(collection(db, 'contact'), data)
            console.log('Document written with ID: ', docRef.id)
            reset()
            window.alert('メール送信が完了しました')
          } catch (e) {
            console.error('Error adding document: ', e)
            window.alert('エラーが発生しました: ' + e.message)
          }
        },
        (error) => {
          console.log(error.text)
          window.alert('メール送信に失敗しました: ' + error.text)
        }
      )
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-6 mb-4 contact_style">お問い合わせ</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4 contact_style">お問い合わせ先</h3>
            <address>
              <strong className="contact_style">メールアドレス:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact_style">
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
            </address>
            <p className="contact_style">{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    {...register("user_name", { required: true })}
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    type="text"
                  />
                  {errors.name && <span>This field is required</span>}
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    {...register("user_email", { required: true })}
                    className="form-control rounded-0"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                  />
                  {errors.email && <span>This field is required</span>}
                </Col>
              </Row>
              <textarea
                {...register("message", { required: true })}
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              {errors.message && <span>This field is required</span>}
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <input type="submit" value="送る" className="btn ac_btn" />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
