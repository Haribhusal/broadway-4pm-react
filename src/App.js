import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import MyHeader from './components/header'
import CarouselComponent from './components/carousel';
import CardComponent from './components/cards/card';
import CardData from './services/data.json'
import PhotoAlbum from './components/Album';

function App() {
  return (
    <>
      <MyHeader />
      <CarouselComponent />
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">
                Our Services
              </h3>
            </div>
          </div>
          <div className="row">

            {CardData.slice(0, 4).map((item, index) => (
              <CardComponent key={index} title={item.title} desc={item.desc} imageUrl={item.imageUrl} buttonText={item.buttonText} />
            ))}

          </div>
        </div>
      </section>
      <PhotoAlbum />

    </>
  );
}

export default App;
