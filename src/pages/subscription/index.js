import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const Subscription = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 991.99)

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 991.99)
        })
    }, [])

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (result) => {
                console.log(result.user)
                try {
                    const docRef = await addDoc(collection(db, 'user'), data)
                    console.log('Document written with ID: ', docRef.id)

                } catch (e) {
                    console.error('Error adding document: ', e)
                }
                navigate('/home')
            })
            .catch((error) => {
                console.log(error.code)
                switch (error.code) {
                    case 'auth/invalid-email':
                        setError('email', {
                            type: 'manual',
                            message: '正しいメールアドレスの形式で入力してください。',
                        })
                        break
                    case 'auth/weak-password':
                        setError('password', {
                            type: 'manual',
                            message: 'パスワードは6文字以上を設定する必要があります。',
                        })
                        break
                    case 'auth/email-already-in-use':
                        setError('email', {
                            type: 'manual',
                            message: 'そのメールアドレスは登録済みです。',
                        })
                        break
                    default:
                        setError('email', {
                            type: 'manual',
                            message: 'メールアドレスかパスワードに誤りがあります。',
                        })
                        break
                }
            })
    }

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{meta.title} | Subscription</title>
                <meta name="description" content={meta.description} />
            </Helmet>
            {isMobile ? (
                <Container>
                    <Row className="mb-5 mt-3 pt-md-3">
                        <Col lg="8">
                            <h1
                                className="display-6 mb-4 contact_style"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="800"
                            >
                                事前登録
                            </h1>
                            <hr
                                className="t_border my-4 ml-0 text-left"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="800"
                            />
                        </Col>
                    </Row>
                    <Row
                        className="sec_sp"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="800"
                    >
                        <Col lg="5" className="mb-5">
                            <h3 className="color_sec py-4 contact_style">登録</h3>
                            <p>アプリがリリースされ次第、順次ご案内のメールをお送りさせて頂きます。</p>
                        </Col>
                        <Col lg="7" className="d-flex align-items-center">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact__form w-100">
                                <Row>
                                    <Col lg="6" className="form-group">
                                        <input
                                            {...register("name")}
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </Col>
                                    <Col lg="6" className="form-group">
                                        <input
                                            {...register("email")}
                                            className="form-control rounded-0"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </Col>
                                </Row>
                                <input
                                    {...register("password")}
                                    className="form-control rounded-0"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    rows="5"
                                ></input>
                                {errors.email && (<p className="error-typography">{errors.email.message}</p>)}
                                {errors.password && (
                                    <p className="error-typography">{errors.password.message}</p>
                                )}
                                <br />
                                <Row>
                                    <Col lg="12" className="form-group">
                                        <input type="submit" value="登録" className="btn ac_btn" />
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <div className="intro_sec d-block d-lg-flex align-items-center">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="800"
                    >
                        <video
                            style={{ height: '100%' }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source
                                src="promotion.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
                                <p
                                    className="subscription_title"
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                >
                                    事前登録
                                </p>
                                <p
                                    className="intro_bg_description"
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                >
                                    アプリがリリースされ次第、順次ご案内のメールをお送りさせて頂きます。
                                </p>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="contact__form mt-5 w-100"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                >
                                    <Row>
                                        <Col lg="6" className="form-group">
                                            <input
                                                {...register("name")}
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                type="text"
                                            />
                                        </Col>
                                        <Col lg="6" className="form-group">
                                            <input
                                                {...register("email")}
                                                className="form-control rounded-0"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                type="email"
                                            />
                                        </Col>
                                    </Row>
                                    <input
                                        {...register("password")}
                                        className="form-control rounded-0"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        rows="5"
                                    ></input>
                                    {errors.email && (<p className="error-typography">{errors.email.message}</p>)}
                                    {errors.password && (
                                        <p className="error-typography">{errors.password.message}</p>
                                    )}
                                    <br />
                                    <Row>
                                        <Col lg="12" className="form-group">
                                            <input type="submit" value="登録" className="btn ac_btn" />
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </HelmetProvider>
    );
};
