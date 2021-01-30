import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={styles.listItem} key={id}>
              <h3>{name}:</h3>
              <p className={styles.contactText}>{number}</p>
              <button
                className={styles.deleteButton}
                type="button"
                data-id={id}
                onClick={deleteContact}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

//  класові компоненти

// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./ContactList.module.css";

// const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <ul className={styles.list}>
//       {contacts.map((item) => (
//         <li className={styles.listItem} key={item.id}>
//           <h3>{item.name}:</h3>
//           <p className={styles.contactText}>{item.number}</p>
//           <button
//             className={styles.deleteButton}
//             type="button"
//             data-id={item.id}
//             onClick={deleteContact}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
