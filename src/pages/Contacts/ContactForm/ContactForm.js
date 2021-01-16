import { useForm } from 'hooks/useForm';
import { useInput } from 'hooks/useInput';
import React, { createContext, useContext, useRef } from 'react';
import { StyledContactForm } from './ContactForm.styles';

const IContactFormContext = {
  disabled: false,
  handleChange: (e) => {},
  formatNumber: (input) => {},
  handleSubmit: (e) => {},
};

const ContactFormContext = createContext(IContactFormContext);

const ContactFormCompound = ({
  onSubmit = (formValues = {}) => {},
  disabled = false,
  children,
  ...args
}) => {
  const { values, handleChange } = useForm();

  const { triggerInputChangeEvent } = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(values);
  };

  const formatNumber = (input) => {
    const numbersOnlyStr = ('' + input.value).replace(/\D/g, '');

    const match = numbersOnlyStr.match(
      /([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/
    );

    if (match) {
      triggerInputChangeEvent(
        input,
        `+7-${match[1]}-${match[2]}-${match[3]}-${match[4]}`
      );
    }
  };

  return (
    <ContactFormContext.Provider
      value={{
        ...IContactFormContext,
        handleChange,
        formatNumber,
        handleSubmit,
        disabled,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

const Form = React.forwardRef(({ children, ...args }, ref) => {
  const { handleSubmit } = useContext(ContactFormContext);

  return (
    <StyledContactForm {...args} onSubmit={handleSubmit} ref={ref}>
      {children}
    </StyledContactForm>
  );
});

const NameInput = ({ onChange = (e) => {}, ...args }) => {
  const { handleChange } = useContext(ContactFormContext);

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          id="contactName"
          name="name"
          placeholder="John Doe"
          required={true}
          onChange={(e) => {
            handleChange(e);
            onChange(e);
          }}
          {...args}
        />
      </label>
    </div>
  );
};

const PhoneInput = ({ onChange = (e) => {}, ...args }) => {
  const { handleChange, formatNumber } = useContext(ContactFormContext);

  return (
    <div>
      <label>
        Phone:
        <input
          type="tel"
          id="contactPhone"
          name="phone"
          placeholder="123-456-78-90"
          onChange={(e) => {
            handleChange(e);
            onChange(e);
          }}
          onBlur={(e) => {
            formatNumber(e.target);
          }}
          {...args}
        />
      </label>
    </div>
  );
};

const EmailInput = ({ onChange = (e) => {}, ...args }) => {
  const { handleChange } = useContext(ContactFormContext);

  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          id="contactEmail"
          name="email"
          placeholder="abc@qwerty.xyz"
          onChange={(e) => {
            handleChange(e);
            onChange(e);
          }}
          {...args}
        />
      </label>
    </div>
  );
};

const CommentInput = ({ onChange = (e) => {}, ...args }) => {
  const { handleChange } = useContext(ContactFormContext);

  return (
    <div>
      <label>
        Comment:
        <textarea
          name="comment"
          onChange={(e) => {
            handleChange(e);
            onChange(e);
          }}
          placeholder="My note about the contact"
          {...args}
        />
      </label>
    </div>
  );
};

const SubmitButton = ({ children, ...args }) => {
  const { disabled } = useContext(ContactFormContext);

  return (
    <button type="submit" disabled={disabled} {...args}>
      {children}
    </button>
  );
};

ContactFormCompound.Form = Form;
ContactFormCompound.NameInput = NameInput;
ContactFormCompound.PhoneInput = PhoneInput;
ContactFormCompound.EmailInput = EmailInput;
ContactFormCompound.CommentInput = CommentInput;
ContactFormCompound.SubmitButton = SubmitButton;

export default ContactFormCompound;
