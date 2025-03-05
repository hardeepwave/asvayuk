import { Container, Row, Col, Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaSearch, FaBullseye, FaMugHot, FaRocket, FaWhatsapp, FaEnvelopeOpenText, FaSkype, FaShopify, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";
import shopifyImg from '../../Images/shopifyImg1.webp'
import reviewGoogle from '../../Images/review_google.webp'
import GoodFirms from '../../Images/GoodFirms.webp'
import Glassdoor from '../../Images/Glassdoor.webp'
import shopifystoreapp from '../../Images/shopifyImgbg2.png'
import wshopify from '../../Images/shopifyImgbg.png'
import work1 from '../../Images/shopifyworkImg1.png'
import work2 from '../../Images/shopifyworkImg2.png'
import work3 from '../../Images/work3.png'
import './TopDeveloper.css'
import { BsFiletypePsd } from 'react-icons/bs';
import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { GrSupport } from 'react-icons/gr';
import { IoIosStopwatch } from 'react-icons/io';
import Meta_Component from '../Meta_Component/Meta_Component';
import PortfolioItem from '../PortfolioItem/PortfolioItem';


const ShopifyDeveloper = () => {
    return (
        <>
            <Meta_Component
                title="Best Shopify Developer in Chandigarh | Asvayuk Technologies"
                description="Looking for a skilled Shopify developer in Chandigarh? Asvayuk Technologies offers expert Shopify development services to create, customize, and optimize your e-commerce store."
                canonical="https://asvayuktech.com/best-shopify-developer-chandigarh"
            />
            <main>
                <section className='bannerMlm shopifyImageBg'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xm={7} sm={12} lg={7} md={6}>
                                <div className="bannerAreaTop">
                                    <div className="logoArea pb-4">
                                        {/* <img src={shopifyImg} className="img-fluid w-25" alt="logo_header" /> */}
                                    </div>
                                    <div className='bannerAreaTop_content'>
                                        <h1 className="h1 mb-5 text-white">The Best <span style={{ color: '#ffbf0b' }}>Shopify Experts Agency</span> in Chandigarh! </h1>
                                        <p className='text-white'>Hire Shopify Developers to build a mobile and desktop-friendly eCommerce store that enhances your customer reach and drives high-end revenue. Talk with Shopify experts at Asvayuk Technologies now!
                                        </p>
                                    </div>
                                    <div className="review_section mb-5">
                                        <div className="review_img">
                                            <img src={reviewGoogle} alt="google" />
                                        </div>
                                        <div className="review_img mx-2">
                                            <img src={GoodFirms} alt="good firms" />
                                        </div>
                                        <div className="review_img">
                                            <img src={Glassdoor} alt="glassdoor" />
                                        </div>
                                    </div>
                                    <div className="lst_text_banner">
                                        <div className="item1">
                                            <div className="ml-0">
                                                <p className='text-white'>*Top-notch Shopify Proficiency <span className="mx-1"></span> | <span className="mx-1"></span>*100% Confidentiality <span className="mx-1"></span> | <span className="mx-1"></span> *24*7 Customer Support</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col xm={5} sm={12} lg={5} md={6} className='bannerAreaTop'>
                                <div className='overflow-hidden w-100 h-100'>
                                    <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" allowfullscreen className='mb-0  rounded-4' style={{ background: 'transparent' }}></iframe>
                                </div>
                                {/* <div className="FormBannerTop">
                                <form id="" name="" method="">
                                    <h4 className="fw-bold">Let’s start the discussion.</h4>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" maxLength="150" id="name" placeholder="Name" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" maxLength="150" id="email" placeholder="Work Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" name="phone" id="phone" maxLength="15" placeholder="Phone Number" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" name="message" minLength="3" maxLength="500" id="message" placeholder="Enter Your Message here" required="" spellCheck="false" data-ms-editor="true" />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="row" style={{ display: 'block' }}>
                                            <div className="col-md-12" style={{ padding: '0px', alignItems: 'center', display: 'flex', marginTop: '10px', position: 'relative' }}>
                                                <button type="submit" id="inquire-button" name="submit" className="btn banner-form-btn green-btn btn_width_set" style={{ margin: '0px', width: '100%' }}>Inquire Now!</button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <div className="container-fluid" style={{ position: 'relative', backgroundColor: '#2acda814' }}>
                        <div className="">
                            <div className="animation_section">

                                <svg viewBox="0 0 1320 300">
                                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                        SHOPIFY EXPERTS
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="project-count-sec top_style" style={{ paddingBottom: '120px', paddingTop: '50px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex mobile_device" style={{ justifyContent: 'center' }}>
                                    <div className="pro-box text-center">
                                        <span className="pro-head">500+</span>
                                        <p>Shopify <br /> Projects Completed</p>
                                    </div>
                                    <div className="pro-box text-center mobile_padding_set" style={{ paddingLeft: '0px' }}>
                                        <span className="pro-head">12+</span>
                                        <p>Years of <br /> Experience</p>
                                    </div>
                                    <div className="pro-box text-center team_Experts" style={{ border: 'unset !important', padding: '0px 0px 0px 10px' }}>
                                        <span className="pro-head">100+</span>
                                        <p>Team of <br />Experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box " id="feature">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="mt-5">
                                    <h2>Get Access to Result-driven Shopify Experts!</h2>
                                    <p className="my-3">When you plan to hire Shopify developers from one of the top Shopify development companies in India, you get to work with some brilliant minds on your Shopify development. We are the pioneer in providing end-to-end Shopify development solutions. From startups to enterprises, we have helped entrepreneurs and business owners with bespoke Shopify web and app development within the best practice. </p>
                                </div>
                                <div className="my-5">
                                    <a className="blue_btn " href="#">Hire Shopify Developers!

                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div>
                                    <img src={shopifystoreapp} alt="Shopify" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section-box " id="feature">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">What Features Do We Offer?</h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaShieldAlt className='secondary-color' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Quality Service</a>
                                        </h3>
                                        <p>We offer the most amazing and quality service for Shopify app development. Our motive is to provide such services that bring a smile on our client’s face.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <IoIosStopwatch />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">On-Time Delivery</a>
                                        </h3>
                                        <p>We complete the project at the given time and therefore, offer on-time delivery so that you can begin with your online business ASAP.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaQuestionCircle />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Support </a>
                                        </h3>
                                        <p>We take care of our clients even after the development. We provide great and easy support and assistance services post development. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="image-with-text">
                    <div className="container">
                        <div className="row d-flex align-items-center flex-wrap">
                            <div className='col-lg-6'>
                                <img alt="shopify_img" className="img-fluid" src={wshopify} />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">Why hire Shopify developers from Asvayuk Technologies? </h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className="font_16 text-white">Dedication, consistency, and quick-to-adopt changes to the latest technology are three primary aspects that separate us from other Shopify development companies. We have been the most reliable Shopify partner since 2013.</p>
                                    <p className='text-white'>We feature versatile, skilled, and high-quality Shopify specialists specializing in all Shopify core components and tools.
                                        You can hire Shopify developers from us on an hourly, part-time, and full-time basis within your budget and requirement. From store design and setup to Theme development and SEO, they bring the most cutting-edge solutions that drive high-end results.
                                    </p>
                                    <div className="list_view_text">
                                        <ul>
                                            <li>Customized Shopify Solutions</li>
                                            <li>Faster Time to Market
                                            </li>
                                            <li>Flexible Hiring &amp; Pricing Model
                                            </li>
                                            <li>Time-zone Flexibility
                                            </li>
                                            <li>Non-Disclosure Agreement (NDA)
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="services">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Hire Shopify Expert for Tailor-made Service!</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <BsFiletypePsd />
                                    </div>
                                    <h3 className="color_343a40">Shopify Store Setup
                                    </h3>
                                    <p className="">Irrespective of the size and category, our Shopify specialists build a highly responsive, user and SEO-friendly store. Hire dedicated Shopify developers now!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">.
                                    <div className='service-icon'>
                                        <MdMiscellaneousServices />
                                    </div>
                                    <h3 className="color_343a40">Shopify Theme Development
                                    </h3>
                                    <p className="">Hire Shopify developers to develop responsive, interactive, and user-friendly themes explicit to your retail industry and business needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <FaShopify />
                                    </div>
                                    <h3 className="color_343a40">Shopify App Development
                                    </h3>
                                    <p className="">We have the best Shopify Apps development team, mastered in all the latest tools and technologies. They ensure high-class Shopify App development.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdIntegrationInstructions />
                                    </div>
                                    <h3 className="color_343a40">Shopify Integration </h3>
                                    <p className="">Hire Shopify Expert to seamlessly integrate multiple payment gateways, CMS, or other third-party APIs relevant to your business model and requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <FaComputer />
                                    </div>
                                    <h3 className="color_343a40">Shopify Migration
                                    </h3>
                                    <p className="">Anytime you believe the need for your store migration to Shopify, count on us. Our Shopify experts will see that your Shopify migration will be smooth and seamless.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <GrSupport />
                                    </div>
                                    <h3 className="color_343a40">Maintenance &amp; Support
                                    </h3>
                                    <p className="">Do not worry about Shopify-related queries. We have the most skilled and experienced Shopify development team to guide you throughout your project development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Work</h2>
                        </div>
                        <div className="row d-flex align-items-center flex-wrap">
                            <PortfolioItem
                                workImage={work1}
                                projectTitle="Pumpd Store"
                                projectCategory="Shopify Development"
                                projectLink="https://pumpdstore.com/"
                            />
                            <PortfolioItem
                                workImage={work2}
                                projectTitle="Furvital"
                                projectCategory="Shopify Development"
                                projectLink="https://furvital.com/"
                            />
                            <PortfolioItem
                                workImage={work3}
                                projectTitle="ShopifyWebsite"
                                projectCategory="Shopify Development"
                                projectLink="https://asilocloud.com"
                            />

                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 bg_f8f8ff" id="our_work">
                    <Container>
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                How Do We Work?
                            </h2>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                                    <Row>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaSearch className="icon-md text-white" />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">1</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Discovery</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        This is basically the first step where the client shares their ideas with us and we discover what all we have to do to develop a website, app, or store.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaBullseye className="icon-md text-white" />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">2</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Planning</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        After listening to the idea of the client, we begin the planning process to provide the best services and to make sure everything goes as planned.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaMugHot className="icon-md text-white" />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">3</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Design & Development</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Now comes the design and development part. We make sure to use the latest technology and customized designs to develop a website that is a ‘dream come true.’
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaRocket className="icon-md text-white" />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">4</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Final UAT + Launch</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Now comes the last but one of the most important steps, which is testing and then launching the website. UAT is the last phase of the software testing process; once UAT is done, the website or store is ready to launch.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="smart_accordian-section mt-5">
                    <Container>
                        <div className="sec_title text-center">
                            <h2>Frequently Asked Questions (FAQs)</h2>
                        </div>
                        <div className="accourdian my-3 py-5">
                            <Accordion>
                                <Accordion.Item eventKey="0" className="accordian-item item">
                                    <Accordion.Header className="bg-transparent">
                                        Why should I opt for Shopify and not any other platform in the first place?
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-dark'>
                                        <p className='text-white'>
                                            Shopify is currently leading the eCommerce development chart with 4.4 million users across more than 175 countries worldwide. It offers everything from Themes to API, Multiple Payment gateways, 24*7 Customer Support, a Huge Shopify developers team, Advanced tools, and many more. Choosing Shopify will only lead you to glory in the global digital marketplace.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="accordian-item item2">
                                    <Accordion.Header className="bg-transparent">
                                        How can a Shopify developer help my business grow?
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-dark'>
                                        <p className='text-white'>
                                            Shopify is a vast segment. One of the leading eCommerce development platforms globally at the moment. Hiring a Shopify developer gives you an inside-out idea about the platform and its benefits. Also, an expert Shopify developer will suggest the most advanced and result-oriented solution with proper planning. Hire Shopify developers now!
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="accordian-item item3">
                                    <Accordion.Header className="bg-transparent">
                                        What is the cost of Shopify website development, including marketing?
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-dark'>
                                        <p className='text-white'>
                                            One can't determine the exact before running a proper project analysis. So we advise you to share the project details with our Shopify team and briefly discuss your requirements at your convenience. Our Shopify expert team will quote you the best possible price.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="accordian-item item4">
                                    <Accordion.Header className="bg-transparent">
                                        Are your Shopify experts proficient in building SEO-optimized Shopify websites and stores?
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-dark'>
                                        <p className='text-white'>
                                            Yes, we have the most skillful Shopify specialists with extensive knowledge of Google SERP's latest trends and algorithms. They plan your Shopify development accordingly, ensuring the unified execution of your Shopify website and stores.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="accordian-item item4">
                                    <Accordion.Header className="bg-transparent">
                                        Does your Shopify specialists provide me with post-deployment support?
                                    </Accordion.Header>
                                    <Accordion.Body className='bg-dark'>
                                        <p className='text-white'>
                                            Yes, they do. From the start of your Shopify development to Testing, final submission on the App store and browser, and post-execution, our Shopify experts will guide you on each level to help you better understand the platform.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
};

export default ShopifyDeveloper;