export const registrationForm = [
  {
    groupName: 'Basic info',
    formFields: [
      {
        label: {
          name: 'Name',
          className: 'registration-form-input',
        },
        field: {
          type: 'text',
          required: true,
          name: 'name',
        },
      },
      {
        label: {
          name: 'Username',
          className: 'registration-form-input',
        },
        field: {
          type: 'text',
          required: true,
          name: 'userName',
        },
      },

      {
        label: {
          name: 'Email',
          className: 'registration-form-input',
        },
        field: {
          type: 'email',
          required: true,
          placeholder: 'e.g. email@example.com',
          name: 'email',
        },
      },
      {
        label: {
          name: 'Password',
          className: 'registration-form-input',
        },
        field: {
          type: 'password',
          required: true,
          name: 'pass',
        },
      },
    ],
  },
  // {
  //   groupName: 'Address info',
  //   formFields: [
  //     {
  //       label: {
  //         name: 'Street',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'street',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Suite',
  //         className: 'registration-form-input w-30',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'suite',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'City',
  //         className: 'registration-form-input w-30',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'city',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Zipcode',
  //         className: 'registration-form-input w-30',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'zipcode',
  //       },
  //     },
  //   ],
  // },
  // {
  //   groupName: 'Geo',
  //   formFields: [
  //     {
  //       label: {
  //         name: 'Latitude',
  //         className: 'registration-form-input w-45',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'lat',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Longitude',
  //         className: 'registration-form-input w-45',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'lng',
  //       },
  //     },
  //   ],
  // },
  // {
  //   groupName: 'Contact',
  //   formFields: [
  //     {
  //       label: {
  //         name: 'Phone',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'telephone',
  //         required: false,
  //         name: 'phone',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Website',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'website',
  //       },
  //     },
  //   ],
  // },
  // {
  //   groupName: 'Company',
  //   formFields: [
  //     {
  //       label: {
  //         name: 'Name',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'companyName',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Catch Phrases',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'catchPhrase',
  //       },
  //     },
  //     {
  //       label: {
  //         name: 'Services',
  //         className: 'registration-form-input',
  //       },
  //       field: {
  //         type: 'text',
  //         required: false,
  //         name: 'bs',
  //       },
  //     },
  //   ],
  // },
];
export const defaultRegistrationValues = () => {
  const initialValues = {};
  registrationForm.forEach(({formFields}) => {
    formFields.forEach(({field}) => {
      initialValues[field.name] = '';
    });
  });
  return initialValues;
};
export const loginForm = [
  {
    groupName: 'Enter your email and Password',
    formFields: [
      {
        label: {
          name: 'Email',
          className: 'registration-form-input',
        },
        field: {
          type: 'email',
          required: true,
          placeholder: 'e.g. email@example.com',
          name: 'email',
        },
      },
      {
        label: {
          name: 'Password',
          className: 'registration-form-input',
        },
        field: {
          type: 'text',
          required: true,
          name: 'pass',
        },
      },
    ],
  },
];
export const defaultLoginValues = () => {
  const initialValues = {};
  registrationForm.forEach(({formFields}) => {
    formFields.forEach(({field}) => {
      initialValues[field.name] = '';
    });
  });
  return initialValues;
};
