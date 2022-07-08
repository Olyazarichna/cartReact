import {useState} from 'react';

const LoginForm = () => {
    const [login, setLogin]= useState('');
    const [password, setPassword] = useState('');

    const hanldeChangeLogin=(event)=> {setLogin(event.target.value);
        const hanldeChangePassword=(event)=> {setPassword(event.target.value);

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(login);
    console.log(password);

}
    }
    return(
        <form>
            <label>
                <span>Login</span>
                <input type="text" value={login} onChange={hanldeChangeLogin}></input>
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={password} onChange={hanldeChangePassword}></input>
            </label>
            <button type="submit" onChange={handleSubmit}>
Login
            </button>
        </form>
    )
};

export default LoginForm;