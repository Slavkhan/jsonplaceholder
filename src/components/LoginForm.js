import {Button} from 'react-bootstrap';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authSlice} from '../store/reducers/auth';
import {loginForm, defaultLoginValues} from '../utilities/constants/form-data';
import {login} from '../services/API';
import {toast} from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();
  const intialState = defaultLoginValues();
  const [basicState, setBasicState] = useState(intialState);

  const handleChange = (e) => {
    setBasicState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleLogin = async () => {
    const {data} = await login(basicState.email);
    console.log(data);
    if (!!data.length) {
      dispatch(authSlice.actions.login(data[0]));
      localStorage.setItem('userId', data[0].id);
      toast.success('Login Succesful', {position: 'top-left'});
    } else {
      console.log('sdasd');
      toast.error('Login Data Invalid', {position: 'top-left'});
    }
  };
  return (
    <>
      <form className="registration-form" id="register">
        {loginForm.map(({groupName, formFields}) => (
          <div key={groupName} className="registration-form-group">
            <h3 key={groupName} className="registration-form-group-title">
              {groupName}
            </h3>
            {formFields?.map?.(({label, field}) => (
              <label key={field.name} className={label.className}>
                <p>{label.name}</p>
                <input
                  required={field.required}
                  type={field.type}
                  value={basicState[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  name={field.name}
                />
              </label>
            ))}
          </div>
        ))}
        <Button onClick={handleLogin} variant="primary">
          {'Log in'}
        </Button>
      </form>
    </>
  );
};
export default LoginForm;
