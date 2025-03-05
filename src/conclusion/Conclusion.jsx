import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Components/ServicesPage/Service.css';

const Conclusion = ({ title, description }) => {
  return (
    <section className="bg-section">
      <Container className="process_container_card">
        <Row className="d-flex flex-column">
          <div className="main-bg w-100">
            <div className="inside-main p-5 mt-1">
              <h2 className="text-center fs-1 mb-2">
                   {title}
              </h2>
              <div className="pt-2">
                <p className="p-3 text-white lh-lg fs-6 text-center">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Conclusion;


