import PropTypes from 'prop-types';
import { ContactData, BtnDelete } from 'components/Contact/Contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactData>
        {name}: {number}
      </ContactData>
      <BtnDelete onClick={onDeleteContact}>Delete</BtnDelete>
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
