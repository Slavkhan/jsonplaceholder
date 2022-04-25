import {Navbar, Dropdown, SplitButton} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ToggleSwitch from '../components/ToggleSwitch';
import {useDispatch, useSelector} from 'react-redux';
import {authSlice} from '../store/reducers/auth';

const links = [
  {
    location: '/users',
    label: 'Users',
  },
  {
    location: '/posts',
    label: 'Posts',
  },
  {
    location: '/photos',
    label: 'Photos',
  },
];

const UserMenu = ({name}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <div className="me-2">
      <SplitButton
        align={{lg: 'start'}}
        title={
          <>
            <img className="header-avatar-image" alt="avatar" src="../assets/image-avatar.jpg"></img>
            {name}
          </>
        }
        id="dropdown-menu-align-responsive-2"
      >
        <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout} eventKey="2">
          Log Out
        </Dropdown.Item>
      </SplitButton>
    </div>
  );
};

const Header = () => {
  const {currentUser} = useSelector((state) => state.auth);
  const Links = () =>
    links.map((link) => (
      <Link key={link.label} to={link.location}>
        {link.label}
      </Link>
    ));
  return (
    <>
      <Navbar className="header" sticky="top">
        <div className="header-logo">
          <img className="header-logo-image" src="../assets/logo.svg" alt="logo" />
        </div>

        <Links />
        <ToggleSwitch />
        {currentUser && <UserMenu name={currentUser.name} />}
      </Navbar>
    </>
  );
};
export default Header;
