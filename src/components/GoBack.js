import {useNavigate} from 'react-router-dom';
import IconArrowLeft from '../icons/IconArrowLeft';

export default function GoBack() {
  const history = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    history('/');
  };
  return (
    <>
      <a href="/home" className="go-back" onClick={handleNavigate}>
        <IconArrowLeft />
        <h3>Go back</h3>
      </a>
    </>
  );
}
