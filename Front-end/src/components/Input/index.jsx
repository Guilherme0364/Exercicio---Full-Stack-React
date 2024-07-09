import './style.css';

function Input({ placeholder, ...props }) {
  return (
    <input type="text" placeholder={placeholder} {...props} />
  );
}

export default Input;
