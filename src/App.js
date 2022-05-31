import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav"
import Main from "./component/Main"
import data from "./component/data"


function App() {
  const info=data.map(item => {
    return (
      <Main 
      img={item.img}
      country={item.country}
      place={item.place}
      date={item.date}
      text={item.text}
             />
    )
  })
  
  
  return (
    <div>
      <Nav />
    {info}
    </div>
  );
}

export default App;
 