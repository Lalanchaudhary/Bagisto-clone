import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../Asset/image1.webp';
import Image from 'react-bootstrap/Image';
function UncontrolledExample() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <Image src="https://demo.bagisto.com/bagisto-common/storage/theme/1/4MR094BrW5hB2FkJzQLO5BYEP4oeYwwpQN1WPQTO.webp" width="100%" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://demo.bagisto.com/bagisto-common/storage/theme/1/TVGzGJ2i5SlTNHwpiVyl5TEDRV0JUoonkIv3pwu0.webp" width="100%" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://demo.bagisto.com/bagisto-common/storage/theme/1/j1hXES2WUs2AUuU0IxxewfJO6lyrbcvC20AetFGq.webp" width="100%" />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default UncontrolledExample;