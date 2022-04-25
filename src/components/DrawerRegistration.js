import {Offcanvas, Button} from 'react-bootstrap';
import {useState} from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
function DrawerRegistration() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setContent(event.target.value);
  };

  return (
    <>
      <Button variant="primary" value={'Register'} onClick={handleShow}>
        Register
      </Button>
      <Button variant="primary" value={'Login'} onClick={handleShow}>
        Login
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <h1>{content} User</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {content === 'Register' && <RegistrationForm />}
          {content === 'Login' && <LoginForm />}
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Button className="me-auto" variant="light" onClick={handleClose}>
            Cancel
          </Button>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  );
}

export default DrawerRegistration;
