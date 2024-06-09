import './App.css';
import Navigation from './customer/Navigation/Navigation';
import ProductOverView from './customer/ProductOverview/Overview';
import HomePages from './customer/Pages/Home/HomePages';

function App() {
  return (
    <div className="">
      <Navigation/>

      <div >
        <HomePages/>
      </div>
      {/* <ProductOverView/> */}

    </div>
  );
}

export default App;
