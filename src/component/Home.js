 
import Carousel from 'react-bootstrap/Carousel'
 
 
import Product from './Product';

function  Home () {
    return ( 
     <>
 <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imges/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5> </h5>
      <p> .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imges/4.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5> </h5>
      <p> .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imges/6.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 > </h5>
      <p> .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Product/>
 
     </>
    )
}
 export default Home ;



  
 