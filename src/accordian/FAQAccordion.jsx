import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQAccordion = ({ title, faqs }) => {
  return (
    <section className="smart_accordian-section mt-5">
      <Container>
        <div className="sec_title text-center">
          <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">{title}</h2>
        </div>
        <div className="accourdian my-3 py-5">
          <Accordion>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index} className={`accordian-item item${index + 1}`}>
                <Accordion.Header className="bg-transparent">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body className="bg-dark">
                  <p className="text-white">{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQAccordion;
