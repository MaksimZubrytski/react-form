import Button from "../Button/Button"
import Input from "./Input/Input"

const Form = (props) => {

    return (
    <form onSubmit={props.onSubmit}>
        <Input type="text" placeholder="name" onChange={props.onChangeName}/>
        <Input type="password" placeholder="password" onChange={props.onChangePassword}/>
        <Button />
    </form>
    );
}

export default Form