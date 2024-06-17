import { FC } from "react";
import { TextSection } from "./TextSection";
import { CarouselComponent } from './Carousel';
import { Col, Container, Row } from "react-bootstrap";
import { PlaceHolder } from "./Placeholder";

interface HeaderProps {
  title?: string;
  lead?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="page-header">
      <Container>
        <Row>
          <Col xs={6} className="pe-5">
            <TextSection title="¿Quiénes somos?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </TextSection>
          </Col>
          <Col className="py-5">
            <CarouselComponent />
          </Col>
        </Row>
        <Row className="mt-5 justify-content-between">
          <Col xs={4}><PlaceHolder width="100%" height="150px" /></Col>
          <Col xs={4}><PlaceHolder width="100%" height="150px" /></Col>
          <Col xs={4}><PlaceHolder width="100%" height="150px" /></Col>
        </Row>
      </Container>
    </header>
  );
}
