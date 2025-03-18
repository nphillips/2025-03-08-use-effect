import ContactRow from "./ContactRow";

const ContactList = ({ setSelectedContactId, contacts }) => {
  return (
    <table className="contact-list">
      <caption>Contact List</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
