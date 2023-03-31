export function Button(props) {
  return (
    <button
      data-testid="form-button"
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.buttonText}
    </button>
  );
}
