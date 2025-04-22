import './App.css'
import Counter from './components/Counter'
import Cart from './components/E-commerce/Cart'
import ProductList from './components/E-commerce/ProductList'
import ExpensiveCal from './components/ExpensiveCal'


function App() {
 
  return (
    <div>
       <h1>Learn useMemo Hook </h1>
       {/* <Counter /> */}
       <ExpensiveCal />
       <ProductList />
       <Cart />
    </div>
  )
}

export default App
