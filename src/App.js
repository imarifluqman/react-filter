import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './olxcard';
import Pdata from './pdata';
import FilterItem from './filteritem';

function App() {

  function Abc (val){
    return(
    <Card 
    
      pName = {val.name}
      des = {val.discpriton}
      img = {val.imge}
      pri = {val.price}
      />
    );
  }
  return (
    <>
    <p className="p">Product Card</p>
    <FilterItem />
    <div className="main">

    {Pdata.map(Abc)}

    </div>
    </>
  );
}

export default App;
