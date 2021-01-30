// Хуки
import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
// import { Notification } from "./notifications/Notification";

const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  });

  // const [alert, setAlert] = useState(false);
  // const [text, setAlertText] = useState("");

  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem("contacts");
  //   if (persistedContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistedContacts),
  //     });
  //   }
  // }

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts) {
      setState((prev) => ({
        ...prev,
        contacts: [...JSON.parse(localContacts)],
      }));
    }
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  // const getVisibleAlert = (text) => {
  //   setAlertText(text);
  //   setAlert(true);
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  //   setTimeout(() => {
  //     setAlertText("");
  //   }, 2700);
  // };

  const addContact = (newContacts) => {
    const contact = {
      id: uuidv4(),
      name: newContacts.name,
      number: newContacts.number,
    };

    if (!newContacts.name.length) {
      alert("Please, enter your name");
    } else if (!newContacts.number.length) {
      alert("Please, enter your number");
    } else {
      if (
        state.contacts.some(
          (contact) =>
            contact.name.toLowerCase() === newContacts.name.toLowerCase()
        )
      ) {
        alert(`${newContacts.name} is already in contacts.`);
      } else {
        setState((prev) => ({
          ...prev,
          contacts: [...state.contacts, contact],
        }));
      }
    }
  };

  const deleteContact = (e) => {
    const contactId = e.target.dataset.id;
    setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((item) => item.id !== contactId),
    }));
  };

  const onHandleFilter = (e) => {
    console.log(e.target.value);
    setState((prevState) => ({ ...prevState, filter: e.target.value }));
  };

  const getFilteredContact = () => {
    const { contacts, filter } = state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titlePhonebook}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      {state.contacts.length > 0 && (
        <div>
          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter filter={state.filter} onHandleFilter={onHandleFilter} />{" "}
        </div>
      )}
      <ContactList
        contacts={getFilteredContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
export default App;

//
//

//  Класові компоненти

// import React, { Component } from "react";
// import styles from "./App.module.css";
// import { v4 as uuidv4 } from "uuid";
// import ContactForm from "./contactForm/ContactForm";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const persistedContacts = localStorage.getItem("contacts");
//     if (persistedContacts) {
//       this.setState({
//         contacts: JSON.parse(persistedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (newContacts) => {
//     const contact = {
//       id: uuidv4(),
//       name: newContacts.name,
//       number: newContacts.number,
//     };

//     this.setState((prevState) => {
//       return prevState.contacts.find(
//         (contact) =>
//           contact.name.toLowerCase() === newContacts.name.toLowerCase()
//       )
//         ? alert(`${newContacts.name} is already in contacts.`)
//         : {
//             contacts: [...prevState.contacts, contact],
//           };
//     });
//   };

//   deleteContact = (e) => {
//     const id = e.target.dataset.id;
//     this.setState({
//       contacts: [...this.state.contacts.filter((item) => item.id !== id)],
//     });
//   };

//   // onHandleFilter = (e) => {
//   //   console.log(e.target.value);
//   //   this.setState({ filter: e.target.value });
//   // };
//   onHandleFilter = (value) => {
//     console.log(value);
//     this.setState({ filter: value });
//   };

//   getFilteredContact = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((item) =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const getFilteredContact = this.getFilteredContact();
//     return (
//       <div className={styles.wrapper}>
//         <h1 className={styles.titlePhonebook}>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         {contacts.length > 0 && (
//           <div>
//             <h2 className={styles.titleContacts}>Contacts</h2>
//             <Filter filter={filter} onHandleFilter={this.onHandleFilter} />{" "}
//           </div>
//         )}
//         <ContactList
//           contacts={getFilteredContact}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
