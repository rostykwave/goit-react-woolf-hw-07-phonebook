import { Formik, ErrorMessage } from 'formik';
import {
  ErrorText,
  StyledInput,
  StyledForm,
  FormField,
  FormLabel,
  SubmitBtn,
} from './ContactForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().min(6).max(13).required(),
});

const initialValues = {
  name: '',
  phone: '',
};

//main form
export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(contactsOperations.addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <FormField>
          <FormLabel>Name</FormLabel>
          <StyledInput
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <FormError name="name" />
        </FormField>

        <FormField>
          <FormLabel>Phone number</FormLabel>
          <StyledInput
            type="tel"
            name="phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <FormError name="phone" />
        </FormField>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  );
};
