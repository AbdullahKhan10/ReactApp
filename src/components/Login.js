
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export default function LoginForm() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setUser('');
      setPwd('');
      
      navigate('/projects');
    };

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)} 
                        value={user} 
                        autoComplete="off" 
                        required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        onChange={(e) => setPwd(e.target.value)} 
                        value={pwd} 
                        required />
                </div>
                <button>Sign In</button>
            </form>
        </section>
    );
}