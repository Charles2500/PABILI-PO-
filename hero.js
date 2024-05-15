import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/vlog1.jpg'),
    title: 'ORDER NOW!',
    description: 'Behind every great meal, theres a chef who poured their heart and soul into creating it. Respect the craft, honor the effort, and savor every bite.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScJnYNFnKLtzSdAGMj_fulWq6l3Ri5_m3dGdCGubSJdFWvAQA/viewform?usp=sf_link'
  },
  {
    id: 2,
    image: require('../assets/images/vlog2.jpg'),
    title: 'ORDER NOW!',
    description: 'Success in the food service industry isnt just about serving delicious food—its about creating memorable experiences for your guests. Strive to exceed expectations and leave a lasting impression.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScJnYNFnKLtzSdAGMj_fulWq6l3Ri5_m3dGdCGubSJdFWvAQA/viewform?usp=sf_link'
  },  
  {
    id: 3,
    image: require('../assets/images/vlog3.jpg'),
    title: 'ORDER NOW!',
    description: 'Never underestimate the power of a kind word, a warm smile, or a thoughtful gesture. In the food service industry, hospitality is just as important as culinary skill. Treat every guest like a cherished friend, and theyll keep coming back for more.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScJnYNFnKLtzSdAGMj_fulWq6l3Ri5_m3dGdCGubSJdFWvAQA/viewform?usp=sf_link'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Contact Us <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;