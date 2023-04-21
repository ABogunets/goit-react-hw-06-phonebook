export const getFilteredContacts = (filterValue, contacts) => {
  const normalizedFilter = filterValue.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const checkName = (name, contacts) => {
  const normalizedName = name.toLowerCase();
  const foundName = contacts.find(
    contact => contact.name.toLowerCase() === normalizedName
  );
  if (foundName) {
    alert(`${name} is already in contacts.`);
    return true;
  }
};
