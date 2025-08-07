import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return(
    <div>Hello i am the shopp</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
