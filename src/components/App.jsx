// import { useState, useEffect, useRef } from 'react';
// import { load, save } from '../utils/storage';

import { Container, Title, ContactsTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  //-----LOCAL STORAGE
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   const savedContacts = load('contacts');
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   save('contacts', contacts);
  // }, [contacts]);
  //-------------------------------

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList />
    </Container>
  );
};
