import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaSearch, FaBullseye, FaMugHot, FaRocket, FaWhatsapp, FaEnvelopeOpenText, FaSkype, FaShopify, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";
import shopifyImg from '../../Images/shopifyImg1.webp'
import reviewGoogle from '../../Images/review_google.webp'
import GoodFirms from '../../Images/GoodFirms.webp'
import Glassdoor from '../../Images/Glassdoor.webp'
import shopifystoreapp from '../../Images/SmartContractImg2.svg'
import wshopify from '../../Images/SmartContractImg3.svg'
import work1 from '../../Images/crypotoImg1.png'
import work2 from '../../Images/crypotoImg3.png'
import work3 from '../../Images/crypotoImg2.png'
import './TopDeveloper.css'
import { BsFiletypePsd } from 'react-icons/bs';
import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { GrSupport } from 'react-icons/gr';
import { IoIosStopwatch } from 'react-icons/io';
import Meta_Component from '../Meta_Component/Meta_Component';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const SmartContract = () => {
    return (
        <>
            <Meta_Component
                title="Best Smart Contract Developer in Chandigarh | Asvayuk Technologies"
                description="Connect with the leading smart contract developers in Chandigarh at Asvayuk Technologies to build secure, scalable, and automated blockchain-based contracts."
                canonical="https://asvayuktech.com/best-smart-contract-developer-chandigarh"
            />

            <main>

                <section className='bannerMlm SmartContractbg '>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xm={7} sm={12} lg={7} md={6}>
                                <div className="bannerAreaTop">
                                    <div className="logoArea pb-4">
                                        {/* <img src={shopifyImg} className="img-fluid w-25" alt="Blockchain_Logo" /> */}
                                    </div>
                                    <div className='bannerAreaTop_content'>
                                        <h1 className="h1 mb-5 text-white">Hire the Best <span className='fw-bold' style={{ color: '#ffbf0b' }}>Smart Contract Developers</span> in Chandigarh!</h1>
                                        <p className='text-white'>At Asvayuk Technologies, our team specializes in smart contract development, ensuring secure, efficient, and innovative blockchain solutions tailored to your business goals. Unlock the potential of decentralized technology with our trusted expertise.</p>
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
                                                <p className='text-white'>*Smart Contract Development <span className="mx-1"></span> | <span className="mx-1"></span>*Blockchain Security Experts <span className="mx-1"></span> | <span className="mx-1"></span> *24/7 Technical Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xm={5} sm={12} lg={5} md={6} className='bannerAreaTop'>
                                <div className='overflow-hidden w-100 h-100'>
                                    <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" allowfullscreen className='mb-0 rounded-4' style={{ background: 'transparent' }}></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <div className="container-fluid" style={{ position: 'relative', backgroundColor: '#2acda814' }}>
                        <div className="animation_section">
                            <svg viewBox="0 0 1320 300">
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    SMART CONTRACT
                                </text>
                            </svg>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="project-count-sec top_style" style={{ paddingBottom: '120px', paddingTop: '50px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex mobile_device" style={{ justifyContent: 'center' }}>
                                    <div className="pro-box text-center">
                                        <span className="pro-head">300+</span>
                                        <p>Smart Contract <br /> Projects Delivered</p>
                                    </div>
                                    <div className="pro-box text-center mobile_padding_set" style={{ paddingLeft: '0px' }}>
                                        <span className="pro-head">12+</span>
                                        <p>Years of <br /> Blockchain Expertise</p>
                                    </div>
                                    <div className="pro-box text-center team_Experts" style={{ border: 'unset !important', padding: '0px 0px 0px 10px' }}>
                                        <span className="pro-head">80+</span>
                                        <p>Certified <br /> Developers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box" id="feature">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-65 col-sm-12">
                                <div className="mt-5">
                                    <h2>Revolutionize Your Business with Expert Smart Contract Development</h2>
                                    <p className="my-3">Asvayuk Technologies offers top-tier smart contract solutions to automate processes and ensure secure, transparent transactions. Our developers craft custom blockchain applications that drive innovation and efficiency.</p>
                                </div>
                                <div className="my-5">
                                    <a className="blue_btn" href="#">Explore Smart Contract Solutions!
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-65 col-sm-12">
                                <div>
                                    <img src={shopifystoreapp} alt="Smart Contract Development" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box" id="feature">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Why Choose Asvayuk Technologies for Smart Contract ?</h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape text-center">
                                            <FaShieldAlt className='secondary-color' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Tailored Smart Contract Solutions</a>
                                        </h3>
                                        <p>We specialize in developing customized smart contract solutions that ensure automation, accuracy, and enhanced efficiency for your blockchain projects.</p>
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
                                            <a href="javascript:;">On-Time Project Delivery</a>
                                        </h3>
                                        <p>Our experienced developers follow a streamlined process to deliver blockchain and smart contract projects on time, helping you achieve your goals efficiently.</p>
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
                                            <a href="javascript:;">Comprehensive Support</a>
                                        </h3>
                                        <p>We provide end-to-end support for your blockchain solutions, from initial consultation to ongoing maintenance and upgrades, ensuring seamless performance.</p>
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
                                <img src={wshopify} alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">Why Choose Asvayuk Technologies for Smart Contract Development?</h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className="font_16 text-white">Asvayuk Technologies is a trusted name in smart contract development, helping businesses in Chandigarh and beyond leverage blockchain technology. Our team specializes in creating secure, automated, and highly efficient smart contracts to streamline your operations.</p>
                                    <p className="text-white">From concept to deployment, we offer end-to-end smart contract solutions tailored to your specific needs, ensuring transparency, security, and accuracy for your blockchain applications.</p>
                                    <div className="list_view_text">
                                        <ul>
                                            <li>Custom Smart Contract Development</li>
                                            <li>Smart Contract Auditing & Testing</li>
                                            <li>Deployment on Multiple Blockchain Platforms</li>
                                            <li>24/7 Technical Support</li>
                                            <li>Seamless Integration with Existing Systems</li>
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
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                Key Topics in Smart Contract Development
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <BsFiletypePsd />
                                    </div>
                                    <h3 className="color_343a40">Core Concepts of Smart Contracts</h3>
                                    <p>Understanding the fundamentals of smart contracts, including their definition, purpose, and how they function on blockchain networks.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <MdMiscellaneousServices />
                                    </div>
                                    <h3 className="color_343a40">Blockchain Platforms</h3>
                                    <p>Explore various blockchain platforms such as Ethereum, Binance Smart Chain, Solana, and others for deploying smart contracts.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <FaShopify />
                                    </div>
                                    <h3 className="color_343a40">Smart Contract Programming Languages</h3>
                                    <p>Learn about programming languages like Solidity, Vyper, Rust, and their application in developing smart contracts.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <MdIntegrationInstructions />
                                    </div>
                                    <h3 className="color_343a40">Development Tools and Frameworks</h3>
                                    <p>Get familiar with tools like Remix, Truffle, and Hardhat for writing, testing, and deploying smart contracts.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <FaComputer />
                                    </div>
                                    <h3 className="color_343a40">Security and Auditing</h3>
                                    <p>Understand how to audit and secure smart contracts to prevent vulnerabilities and ensure reliability and safety.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className="service-icon">
                                        <GrSupport />
                                    </div>
                                    <h3 className="color_343a40">Smart Contract Deployment and Maintenance</h3>
                                    <p>Learn about the deployment process, including testnets, mainnet deployment, and post-deployment support and upgrades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-box col-12 pl-0 pr-0" id="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                Our Work in Smart Contract Development
                            </h2>
                        </div>
                        <div className="row d-flex align-items-center flex-wrap">
                            <PortfolioItem
                                workImage={work1}
                                projectTitle="Smart Contract"
                                projectCategory="Smart Contract Development"
                                projectLink="#"
                            />
                            <PortfolioItem
                                workImage={work2}
                                projectTitle="Smart Contract"
                                projectCategory="Smart Contract Development"
                                projectLink="#"
                            />
                            <PortfolioItem
                                workImage={work3}
                                projectTitle="Smart Contract"
                                projectCategory="Smart Contract Development"
                                projectLink="#"
                            />

                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 bg_f8f8ff" id="our_work">
                    <Container>
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                Our Smart Contract Development Process in Chandigarh
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
                                                        We begin by understanding your specific smart contract requirements, analyzing your business use case, and selecting the optimal blockchain platform for your project in Chandigarh.
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
                                                        We create a strategic plan for your smart contract, carefully selecting the right blockchain network and structuring the contract to meet your business goals, ensuring security, scalability, and performance.
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
                                                        Our team designs and develops robust, secure, and scalable smart contracts tailored to your business needs, ensuring they are efficient and user-friendly.
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
                                                    <h3 className="color_343a40 font_weight_semi_bold">Testing & Launch</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        We conduct thorough testing to ensure your smart contract performs as expected. Once validated, we assist in launching the contract and ensure smooth execution and security.
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
                            <h2>Frequently Asked Questions (FAQs) About Smart Contract Development in Chandigarh</h2>
                        </div>
                        <div className="accourdian my-3 py-5">
                            <Accordion>
                                <Accordion.Item eventKey="0" className="accordian-item item">
                                    <Accordion.Header className="bg-transparent">
                                        Why should I choose Smart Contracts for my business in Chandigarh?
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-dark">
                                        <p className="text-white">
                                            Smart contracts allow for secure, automated, and transparent transactions. With no intermediaries, these self-executing contracts ensure greater efficiency, reduced costs, and increased trust, especially in industries like finance, real estate, and supply chain management in Chandigarh.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="accordian-item item2">
                                    <Accordion.Header className="bg-transparent">
                                        How can a professional smart contract developer help my business in Chandigarh?
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-dark">
                                        <p className="text-white">
                                            A skilled smart contract developer can help you integrate blockchain solutions into your business processes, optimizing contracts, automating workflows, and ensuring security and scalability for your applications in Chandigarh.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="accordian-item item3">
                                    <Accordion.Header className="bg-transparent">
                                        What is the cost of smart contract development in Chandigarh?
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-dark">
                                        <p className="text-white">
                                            The cost of smart contract development depends on the complexity, features, and blockchain network required. Reach out to us for a customized quote based on your specific requirements in Chandigarh.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="accordian-item item4">
                                    <Accordion.Header className="bg-transparent">
                                        Can my smart contract be integrated with existing systems in Chandigarh?
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-dark">
                                        <p className="text-white">
                                            Yes, we offer smart contract solutions that can be seamlessly integrated with existing business systems, APIs, and legacy platforms in Chandigarh to enhance functionality and streamline operations.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="accordian-item item4">
                                    <Accordion.Header className="bg-transparent">
                                        Do you provide post-launch support for smart contracts in Chandigarh?
                                    </Accordion.Header>
                                    <Accordion.Body className="bg-dark">
                                        <p className="text-white">
                                            Absolutely! We provide comprehensive post-launch support, including maintenance, security updates, and troubleshooting, ensuring your smart contracts remain secure and efficient in the long term.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default SmartContract
