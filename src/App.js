import './App.sass';
import { Header } from './components/Header';
import { MainContainer } from './components/MainContainer';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Offers } from './components/Offers';
import { InfoText } from './components/InfoText';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Header />
      <MainContainer>
        <Banner className="out-of-main-container section-gap" />
        <Offers className="section-gap" />
        <InfoText className="section-gap" />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
