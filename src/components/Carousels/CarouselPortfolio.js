import React, { useState } from 'react'
import { Carousel  } from 'react-bootstrap'
import MyImage from '../Images/img1.jpg'
import MyImage1 from '../Images/img2.jpg'
import MyImage2 from '../Images/img3.jpg'

export default function CarouselPortfolio() {
    const [index, setIndex ] = useState(0)
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
    return (
        <div>
            <Carousel  activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MyImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MyImage1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MyImage2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </div>
    );
}
