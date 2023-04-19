import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'tasks/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'tasks/deleteContact',
    payload: contactId,
  };
};
