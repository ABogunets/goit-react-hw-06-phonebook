import { useSelector } from 'react-redux';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
} from 'components/ContactList/ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { getFilteredContacts } from 'service-functions';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(filterValue, contacts);
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
