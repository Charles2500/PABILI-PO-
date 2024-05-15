import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name:'Mission',
    description: 'To nourish our community with delicious, high-quality food sourced sustainably and prepared with care, while fostering connections and a sense of belonging through exceptional customer service and a welcoming atmosphere.',
    designation:'',
  },
  {
    id: 2,
    name:'Vision',
    description: 'To be the heart of our community, where people gather to enjoy good food, share memorable moments, and support local producers, while striving to continually innovate and elevate the culinary experience.',
    designation:'',
  },
  {
    id: 3,
    name: 'PABILI PO',
    description: '*P- Personalized Service, *A- Authentic Products, *B - Beneficial Community Engagement, *I - Integrity in Business, *L - Local Support, *I - Innovative Solutions, *P - Premium Quality, *O - Outstanding Customer Experience',
    designation: ''
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>MISSION, VISION, CORE VALUES</h2>
          <div className="subtitle"></div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;