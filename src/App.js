import './App.css';
import BrandsIntergration from './components/BrandsIntergration/BrandsIntergration';
import Footer from './components/Footer/Footer';
import Headers from './components/Header/Headers';
import InfoSection from './components/InfoSection/InfoSection';
import TopFold from './components/TopFold/TopFold';
import TrendingNfts from './components/TrendingNfts/TrendingNfts';

function App() {
  return (
    <div className="max-width">
      <Headers></Headers>
      <TopFold></TopFold>
      <BrandsIntergration></BrandsIntergration>
      <TrendingNfts></TrendingNfts>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
