import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    // const name = e.target.name;
    // this.setState({ [name]: e.target.value });
    // console.log("value", value);
    // console.log("name", name);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addContact({
      ...state,
      // name: state.name,
      // number: state.number,
    });
    setState({ name: "", number: "" }); //як висипати стейт по іншому
  };

  // const { name, number } = state;
  return (
    <>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.inputName}
            type="text"
            placeholder="Enter Name"
            value={state.name}
            name="name"
            onChange={onHandleChange}
          />
          {/* <label key={uuidv4()}> */}
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.inputNumber}
            type="text"
            placeholder="xxx-xx-xx"
            value={state.number}
            name="number"
            onChange={onHandleChange}
          />
        </label>

        <button className={styles.buttonAddContacts} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
export default ContactForm;
//  класові компоненти

// import React, { Component } from "react";
// import styles from "./ContactForm.module.css";

// export default class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//     // const name = e.target.name;
//     // this.setState({ [name]: e.target.value });
//     // console.log("value", value);
//     // console.log("name", name);
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addContact({
//       ...this.state,
//       // name: this.state.name,
//       // number: this.state.number,
//     });
//     this.setState({ name: "", number: "" }); //як висипати стейт по іншому
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.onHandleSubmit} s>
//         <label className={styles.label}>
//           Name
//           <input
//             className={styles.inputName}
//             type="text"
//             placeholder="Enter Name"
//             value={name}
//             name="name"
//             onChange={this.onHandleChange}
//           />
//           {/* <label key={uuidv4()}> */}
//         </label>
//         <label className={styles.label}>
//           Number
//           <input
//             className={styles.inputNumber}
//             type="text"
//             placeholder="xxx-xx-xx"
//             value={number}
//             name="number"
//             onChange={this.onHandleChange}
//           />
//         </label>

//         <button className={styles.buttonAddContacts} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
