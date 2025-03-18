import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import DetailsPanel from "./components/DetailsPanel";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <>
      {selectedContactId ? (
        <DetailsPanel
          contacts={contacts}
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App;
