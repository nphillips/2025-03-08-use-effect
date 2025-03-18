const DetailsPanel = ({
  contacts,
  selectedContactId,
  setSelectedContactId,
}) => {
  const selectedContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );
  if (!selectedContact) {
    return <div>Contact not found</div>;
  }
  return (
    <>
      <div>
        <button onClick={() => setSelectedContactId(null)}>
          ← Return to menu
        </button>
      </div>
      <div className="details-panel">
        <h1>{selectedContact.name}</h1>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedContact.phone}
          </p>
          <p>
            <strong>Username:</strong> {selectedContact.username}
          </p>
          <p>
            <strong>Website:</strong> {selectedContact.website}
          </p>
          {selectedContact.address && (
            <div className="address-section">
              <h2>Address</h2>
              <p>
                {selectedContact.address.street},{" "}
                {selectedContact.address.suite}
              </p>
              <p>
                {selectedContact.address.city},{" "}
                {selectedContact.address.zipcode}
              </p>
            </div>
          )}
          {selectedContact.company && (
            <div className="company-section">
              <h2>Company</h2>
              <p>
                <strong>Name:</strong> {selectedContact.company.name}
              </p>
              <p>
                <strong>Catchphrase:</strong>{" "}
                {selectedContact.company.catchPhrase}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsPanel;
