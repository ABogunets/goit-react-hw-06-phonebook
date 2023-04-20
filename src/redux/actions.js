import { nanoid } from 'nanoid';

// const checkName = name => {

//   const normalizedName = name.toLowerCase();
//   const foundName = contacts.find(
//     contact => contact.name.toLowerCase() === normalizedName
//   );
//   if (foundName) {
//     alert(`${name} is already in contacts.`);
//     return true;
//   }
// };

// export const addContact = (name, number) => {
//   if (!checkName(name)) {
//     return {
//       type: 'tasks/addContact',
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// };

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const changeFilter = filterValue => {
  return {
    type: 'filter/changeFilter',
    payload: filterValue,
  };
};
