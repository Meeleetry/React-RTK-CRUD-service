import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {v4 as uuidv4} from 'uuid';
import Textfield from "../components/Textfield";
import { addUser } from "./Users/userSlice";

const AddUser = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    const navigate = useNavigate();
    const handleAddUser = () => {
        setValues({name:'', email:''});
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }));
        navigate('/');     
    }
    return (
    <div className="mt-10 max-w-xl mx-auto">
        <Textfield 
        label='Name' value={values.name}
        onChange={(e) =>setValues({...values, name: e.target.value})}
        inputProps={{type:'text',
         placeholder:'John Sticks'}}/>
         <br/>
        <Textfield 
        label='Email'
        onChange={(e) =>setValues({...values, email: e.target.value})}
        value={values.email}
        inputProps={{type:'email', placeholder:'example@gmail.com'}}/>
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser;