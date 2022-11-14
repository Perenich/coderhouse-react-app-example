import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='carousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Chevrolet_Onix_%28second_generation%2C_front_view%29.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src="https://noticias.coches.com/wp-content/uploads/2014/07/chevrolet_cruze-sport6-2012_r8.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src="https://i0.wp.com/www.motorwebargentina.com/wp-content/uploads/2021/09/Nissan-Versa-portada.jpg?fit=1024%2C768&ssl=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src="https://www.elcarrocolombiano.com/wp-content/uploads/2020/04/20200414-FIAT-MOBI-REDUCCION-DE-GAMA-EN-BRASIL-Y-AUMENTO-DE-PRECIO-EN-COLOMBIA-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          className="d-center w-75"
          src="https://1.bp.blogspot.com/-N5fyYDaqdwI/YQyUyvtvC3I/AAAAAAAAmj0/hTQA-AIC__4tweNAFgxnGj6QCNEL2RZfgCLcBGAsYHQ/s16000/Fiat-Cronos.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          className="d-center w-75"
          src="https://fotos.perfil.com/2021/11/10/volkswagen-gol-1267119.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          className="d-center w-75"
          src="https://img.remediosdigitales.com/bc31b7/volkswagen_fox_pepper_2/450_1000.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          className="d-center w-75"
          src="https://autotest.com.ar/wp-content/uploads/2019/08/peugeot-208.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <img
          className="d-center w-75"
          src="https://fotos.perfil.com/2021/10/15/ford-focus-2022-1246536.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Home;