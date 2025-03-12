import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Components/ServicesPage/Service.css';

const Conclusion = ({ title, description }) => {
  return (
    <section className="bg-section mt-5">
      <Container className="process_container_card">
        <Row className="d-flex flex-column">
          <div className="row main-bg w-100">
            <div className="inside-main p-5 mt-1 col-md-8">
              <h2 className="conclusion_title mb-2">
                   {title}
              </h2>
              </div>
              <div className="pt-2 col-md-4">
                <p className="text-white lh-lg fs-6">
                  {description}
                </p>
              </div>
            
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Conclusion;


