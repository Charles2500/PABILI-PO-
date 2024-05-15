import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'New User Voucher',
    price: '',
    features: ['P199 Minimum Spend', 'Free Delivery', '10% Discount for Selected Restaurant', 'Valid on Weekdays Only', 'Nationwide'],
    link: 'https://www.google.com'
  },
  {
    id: 2,
    plan: 'Holiday Discount',
    price: '',
    features: ['P599 Minimum Spend', 'Free Delivery', '25% Discount for any Restaurant', 'Valid on Holidays Only', 'Nationwide'],
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    plan: 'Membership Discount',
    price: '',
    features: ['P599 Minimun Spend', 'Free Delivery', 'Up to 10 - 15% discount for any Restaurant', 'Valid on Selected Days', 'Nationwide'],
    link: 'https://www.twitter.com'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>VOUCHER </h2>
          <div className="subtitle">order delicious foods &amp; cuisines with just a few clicks.</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Get Voucher</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;