import React, {useState, useCallback} from 'react';
import {createUser} from '../services/API';
import {registrationForm, defaultRegistrationValues} from '../utilities/constants/form-data';
import {Button} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {authSlice} from '../store/reducers/auth';
import {useDispatch} from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const intialState = defaultRegistrationValues();
  const [basicState, setBasicState] = useState(intialState);
  const handleChange = (e) => {
    setBasicState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleRegister = async () => {
    console.log('a');
    const {data} = await createUser(basicState);
    if (!!data) {
      dispatch(authSlice.actions.register(data));
      localStorage.setItem('userId', data.id);
      toast.success('Login Succesful', {position: 'top-left'});
    } else {
      console.log('sdasd');
      toast.error('Login Data Invalid', {position: 'top-left'});
    }
  };

  const isDisabled = useCallback(() => {
    const required = registrationForm[0].formFields.map((a) => a.field.name);
    return !required.every((field) => basicState[field].length > 1);
  }, [basicState]);
  return (
    <>
      <form className="registration-form" id="register">
        {registrationForm.map(({groupName, formFields}) => (
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
        <Button onClick={handleRegister} variant="primary" disabled={isDisabled()}>
          {'Register'}
        </Button>
      </form>
    </>
  );
};
export default RegistrationForm;
