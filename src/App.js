import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes , Route} from 'react-router-dom';
import Home from './Pages/Home/home';
import List from './Pages/List/list';
import Hermitage from './Pages/Hotels/Hermitage/hermitage';
import Ramada from './Pages/Hotels/Ramada/ramada';
import Sherpa from './Pages/Hotels/Sherpa/sherpa';
import Springburn from './Pages/Hotels/SpringBurn/springburn';
import SummitSwiss from './Pages/Hotels/SummitSwiss/summitswiss';
import TouristLodge from './Pages/Hotels/TouristLodge/touristlodge';
import Arcadia from './Pages/Hotels/Arcadia/arcadia';
import ValleyView from './Pages/Hotels/ValleyView/valleyview';
import Elgin from './Pages/Hotels/Elgin/elgin';
import BlueHorizon from './Pages/Hotels/BlueHorizon/bluehorizon';
import Sradhanjali from './Pages/Hotels/sradhanjali/sradhanjali';
import Lilac from './Pages/Hotels/Lilac/lilac';
import Itc from './Pages/Hotels/ITC/itc';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/hermitage' element={<Hermitage/>}/>
      <Route path='/hotels/ramada' element={<Ramada/>}/>
      <Route path='/hotels/sherpa' element={<Sherpa/>}/>
      <Route path='/hotels/springburn' element={<Springburn/>}/>
      <Route path='/hotels/summitswiss' element={<SummitSwiss/>}/>
      <Route path='/hotels/touristlodge' element={<TouristLodge/>}/>
      <Route path='/hotels/arcadia' element={<Arcadia/>}/>
      <Route path='/hotels/valleyview' element={<ValleyView/>}/>
      <Route path='/hotels/elgin' element={<Elgin/>}/>
      <Route path='/hotels/bluehorizon' element={<BlueHorizon/>}/>
      <Route path='/hotels/sradhanjali' element={<Sradhanjali/>}/>
      <Route path='/hotels/lilac' element={<Lilac/>}/>
      <Route path='/hotels/itc' element={<Itc/>}/>
    </Routes>
  );
}

export default App;
