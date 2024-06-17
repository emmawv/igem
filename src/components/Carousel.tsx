import Carousel from 'react-bootstrap/Carousel';
import { PlaceHolder } from './Placeholder';

export function CarouselComponent() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <PlaceHolder width={"100%"} height={"100%"}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <PlaceHolder width={"100%"} height={"100%"}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <PlaceHolder width={"100%"} height={"100%"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

