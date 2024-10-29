
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import Register from './pages/login/Register';
import CreatePost from './components/create/CreatePost';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path = "/" element = {<Home /> } />
        <Route path ="/details/:id" element={<Details />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/account" element={<Account />} />
        <Route path = "/register" element={<Register />} />
        <Route path ="/create" element={<CreatePost />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
