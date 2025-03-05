import { useState, useRef } from "react";
import { Accordion } from "react-bootstrap";
import './FAQAccordion.css';

const FAQAccordion = ({ title, faqs }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <section className="py-5 accordian-sec mt-3">
      <div className="container">
        <div className="row">
          {title && <h1 className="text-center">{title}</h1>}
          <div className="pt-1">
            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key === activeKey ? null : key)} className="faq-accordion px-0">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                  <Accordion.Header className="faq-header">{faq.question}</Accordion.Header>
                  <Accordion.Body className="faq-body">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
