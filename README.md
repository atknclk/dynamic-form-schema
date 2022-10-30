[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ridoansaleh/dynamic-form-json/blob/master/LICENSE)
[![dynamic-form-schema version](https://img.shields.io/badge/dynamic--form--schema-v1.0.0-green)](https://www.npmjs.com/package/dynamic-form-json)
[![npm version](https://img.shields.io/badge/npm-v8.19.2-green)](https://www.npmjs.com/package/dynamic-form-json)
[![yarn version](https://img.shields.io/badge/yarn-v1.22.19-green)](https://www.npmjs.com/package/dynamic-form-json)

# Dynamic Form Schema

`dynamic-form-schema` is a tiny project to generate a Form in React automatically based on certain array of object that passed as a props. This project use regular scss created from scratch, so user can customize it in the future. On top of it, i use [Formik](https://github.com/jaredpalmer/formik) and [Yup](https://github.com/jquense/yup) for form's skeleton and validations. When the form is submitted, a json file is created on the node js backend and the data of the inputs are added to it.


## Used technologies

**Client:** React

**Server:** Node, Express

  
## Run it on your computer

Clone the project

```bash
  git clone https://github.com/atknclk/dynamic-form-schema.git
```

Go to the project directory

```bash
  cd dynamic-form-schema
```

Install required packages

```bash
  yarn install
```

Run the server

```bash
  yarn start
```

Open a new terminal for backend,
go to the service directory

```bash
  cd api
```

Run the server

```bash
  yarn install
  yarn start
```
## Peer Dependencies

Remember you also need to install the peer dependencies of this package. They are `formik`, `yup`, `material-ui`, `fs`, `sass` and `react-toastify`.

  
## API Usage

#### Create Json File

```bash
  POST http://localhost:9000/setFormData
```

| Parameter | Type     | Explanation                |
| :-------- | :------- | :------------------------- |
| `data` | `string` | **Necessary**. JSON Data. |

  
## Features

- Create dynamic form
- Preview mode

  
## Supported Fields

Currently this library supports form input types such as:

- [x] Text

- [x] Number

- [x] Select

- [x] Radio

- [x] Date

- [x] Checkbox

- [x] Upload

### Fields

These are the properties you can pass to an Object in formData array to create TextField component. Not all of them are required. The properties required are id, and type.

| Name           | Description                                                                                                                                                                          | PropType                                              | Required | Default Props                                                                       |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- | :------- | :---------------------------------------------------------------------------------- |
| id             | This id will be put as the name of the field / input element                                                                                                                         | string                                                | true     | `""` / empty string                                                                 |
| label          | The label of the field                                                                                                                                                               | string                                                | false    | Id (uppercase the first letter of id props). Example: `id="text" => label="Text"` |
| type           | The type of the field                                                                                                                                                                | string <= enum["text", "password", "number", "email"] | true     | `""`                                                                                |
| value          | The default value of the field                                                                                                                                                       | string                                                | false    | `""`                                                                                |
| validationType | The validation type of the field. This is related to the type of data you'll enter in your field. If the data you will input to the field is number, you should make this as number. | string                                                | false    | `"string"`                                                                          |
| validations    | Validation rule for this field. This is similar to yup API because we used yup under the hood.                                                                                       | array                                                 | false    | `"[]"`                                                                              |