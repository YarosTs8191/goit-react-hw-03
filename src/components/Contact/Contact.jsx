import css from "./Contact.module.css";
import { ImAddressBook } from "react-icons/im";
import { ImPhone } from "react-icons/im";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.grup}>
        <p className={css.name}>
          <ImAddressBook className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <ImPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
