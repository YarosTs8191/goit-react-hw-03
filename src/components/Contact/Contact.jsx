import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.grup}>
        <p className={css.name}> {name}</p>
        <p className={css.number}>📞{number}</p>
      </div>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
