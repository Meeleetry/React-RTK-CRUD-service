import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editUser } from "./Users/userSlice";
import Textfield from "../components/Textfield";

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store =>store.users);
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0]; 
    const [values, setValues] = useState({
        name,
        email
    });
    const navigate = useNavigate();
    const handleEditUser = () => {
        setValues({name:'', email:''});
       dispatch(editUser({
        id:params.id,
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
        <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}


export default EditUser;