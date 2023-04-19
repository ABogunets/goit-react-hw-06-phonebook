import { useSelector } from 'react-redux';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
} from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/contacts/constants';

export const ContactList = () => {
  // Отримуємо масив контактів із стану Redux
  const contacts = useSelector(getContacts);
  return (
    <ContactsWrapper>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsListItem key={contact.id}>
            <Contact contact={contact} />
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};
