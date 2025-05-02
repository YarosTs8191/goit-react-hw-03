import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.box}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
