import { useSelector } from 'react-redux';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
} from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

export const ContactList = () => {
  // Отримуємо масив контактів та стан фильтру із стану Redux
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ContactsWrapper>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactsListItem key={contact.id}>
            <Contact contact={contact} />
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};
