import React from 'react';
import './nonmain.css';
import ContactForm from './form';

const Contact = () => {
  return (
    <div className='page-struct'>
      <p className='text'>Have any thoughts or suggestions? You can contact the Chicago Moon-Times using the form below.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;