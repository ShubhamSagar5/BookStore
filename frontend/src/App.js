import './App.css';

import {createBrowserRouter, Outlet} from 'react-router-dom'
import Home from './Pages/Home';
import Book from './Pages/Book';
import AddBook from './Pages/AddBook';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
 
  return (
    <div>
        <Navbar/> 
        <Outlet/>
        <Footer/>

    </div>
  )
 
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/book",
        element:<Book/>
      },
      {
        path:"/addBook",
        element:<AddBook/>
      }
    ]
  }
])


export default App;
