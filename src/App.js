import {Route, Routes} from 'react-router-dom';
import DrawerRegistration from './components/DrawerRegistration';
import Header from './layout/Header';
import HomeMenu from './components/Routes/HomeMenu';
import User from './components/Routes/User';
import Users from './components/Routes/Users';
import Posts from './components/Routes/Posts';
import Post from './components/Routes/Post';
import {ToastContainer} from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUser} from './services/API';
import {authSlice} from './store/reducers/auth';

export const ThemeContext = React.createContext();
function App() {
  const dispatch = useDispatch();
  const id = localStorage.getItem('userId');
  useEffect(() => {
    const loginUser = async (id) => {
      const {data} = await fetchUser(id);
      dispatch(authSlice.actions.login(data));
    };
    id && loginUser(id);
  }, [id]);

  const [darkTheme, setDarkTheme] = useState(true);
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme', !darkTheme);
  };
  useEffect(() => {
    const lsTheme = JSON.parse(localStorage.getItem('darkTheme'));
    setDarkTheme(lsTheme);
  }, []);
  return (
    <>
      <ThemeContext.Provider
        value={{
          darkTheme,
          handleTheme,
        }}
      >
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
