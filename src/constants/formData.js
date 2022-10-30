export const formData = [
  {
    id: 'text',
    type: 'text',
    label: 'Text Field',
    value: '',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['name is required'],
      },
      {
        type: 'min',
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: 'max',
        params: [20, "name can't be more than 10 characters"],
      },
    ],
  },
  {
    id: 'number',
    type: 'number',
    label: 'Number Field',
    value: '',
    validationType: 'number',
    validations: [
      {
        type: 'required',
        params: ['number is required'],
      },
    ],
  },
  {
    id: 'date',
    type: 'date',
    label: 'Date Field',
    value: '',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['date is required'],
      },
    ],
  },
  {
    id: 'select',
    type: 'select',
    label: 'Select Field',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['select is required'],
      },
    ],
  },
  {
    id: 'radio',
    type: 'radio',
    label: 'Radio Field',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['radio is required'],
      },
    ],
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  {
    id: 'checkbox',
    type: 'checkbox',
    label: 'Checkbox Field',
    validationType: 'array',
    validations: [
      {
        type: 'required',
        params: ['checkbox is required'],
      },
      {
        type: 'min',
        params: [1, 'at least one checkbox must be selected'],
      },
    ],
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  {
    id: 'file',
    type: 'file',
    label: 'File Field',
    value: '',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['file is required'],
      },
    ],
  },
];
