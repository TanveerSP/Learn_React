import Counter from './components/Counter'
import Weather from './components/Weather'
import RandomGIF from './components/RandomGIF'
import "./App.css";

function App() {
  return(
   <div className='main'>
    Hello Je
    <div className='innerDiv'>
      {/* <Counter /> */}
      <Weather />
    </div>
   </div>
  )
}

export default App;
