import React, {useState} from 'react';
import {registrationForm, defaultRegistrationValues} from '../utilities/constants/form-data';

const RegistrationForm = () => {
  const intialState = defaultRegistrationValues();
  const [basicState, setBasicState] = useState(intialState);

  const handleChange = (e) => {
    setBasicState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
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
      </form>
    </>
  );
};
export default RegistrationForm;
