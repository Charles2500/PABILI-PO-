import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/F1.jpg'),
    time: '₱ 128',
    title: 'Lomi with shrimps',
    description: 'It has a shrimp with quail egg that are nutritious, and onion leaves with wild chili.',
  },
  {
    id: 2,
    image: require('../assets/images/F2.jpg'),
    time: '₱ 118',
    title: 'Special Palabok',
    description: 'The dish often includes a variety of ingredients such as boiled eggs, shrimp, pork cracklings (chicharon), smoked fish flakes (tinapa), tofu, green onions, and garlic.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/batangas-lumey.jpg'),
    time: '₱ 168',
    title: 'Special Batangas-Lumey',
    description: 'Batangas lumey has a tick noodles, Rich Brooth, and can add Toppings such as (Sliced pork, chicken, liver, shrimp, kikiam, and hard bioled eggs.).',
    link: 'https://www.twitter.com'
  },
  {
    id: 4,
    image: require('../assets/images/F4.jpg'),
    time: '₱ 258',
    title: 'Tomato with avocado',
    description: 'Pita wrap with a tomatoes and avocado with corn on the top.',
  },
  {
    id: 5,
    image: require('../assets/images/F5.jpg'),
    time: '₱ 108',
    title: 'Burger with fries',
    description: 'Fries, chopped up hamburger, cheese, lettuce, pickles, onions, tomatoes and finished off with ribbons of ketchup and mustard..',
    link: 'https://www.facebook.com'
  },
  {
    id: 6,
    image: require('../assets/images/sisig.jpg'),
    time: '₱ 138',
    title: 'Sisig with lemonsita',
    description: 'Crispy pork parts like ears, cheeks, and belly, seasoned with various spices and cooked until perfectly crispy.',
    link: 'https://www.twitter.com'
  }
]

function Appfood() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Foods</h2>
          <div className="subtitle">Best Seller</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                       
                      </Card.Body>
                    </Card>
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

export default Appfood;