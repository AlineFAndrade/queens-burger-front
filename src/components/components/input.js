import "../../styles/input.css"

export function Input(props) {
  console.log(props);
  return (
      <input 
          name={props.name}
          id={props.id}
          type={props.type}
          autoComplete={props.autoComplete}
          value ={props.value}
          onChange={props.onChange}
          className={props.className}
      />
  )
}