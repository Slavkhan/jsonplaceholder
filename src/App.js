import {Route, Routes} from 'react-router-dom';
import DrawerRegistration from './components/DrawerRegistration';
import Header from './layout/Header';
import HomeMenu from './components/Routes/HomeMenu';
import User from './components/Routes/User';
import Users from './components/Routes/Users';
import Posts from './components/Routes/Posts';
import Post from './components/Routes/Post';
import {ToastContainer} from 'react-toastify';
function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
