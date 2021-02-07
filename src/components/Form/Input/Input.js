import "./Input.css"

const Input = (props) => {

    return (
      <div class="input__item">
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
      </div>
    );
}

export default Input