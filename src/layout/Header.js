import {Navbar, Dropdown, SplitButton, Nav, Container} from 'react-bootstrap';
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
    localStorage.removeItem('userId');
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

  return (
    <>
      <Navbar className="header" sticky="top" bg="dark" variant="dark">
        <Link to={'/'}>
          <Navbar.Brand className="header-logo">
            <img className="header-logo-image" src="../assets/logo.svg" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          {links.map((link) => (
            <Nav.Link as="div" key={link.label}>
              <Link to={link.location}>{link.label}</Link>
            </Nav.Link>
          ))}
        </Nav>
        <ToggleSwitch />
        {currentUser && <UserMenu name={currentUser.name} />}
      </Navbar>
    </>
  );
};
export default Header;
