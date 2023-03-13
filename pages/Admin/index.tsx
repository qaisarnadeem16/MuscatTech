import { useState } from 'react';
import style from '../../styles/admin.module.css'
import  { useRouter } from 'next/router';
import {login} from '../../Firebase/Auth'

// type Login={
//     email: string;
//     password: string;
// }
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
  
    const isLoggedIn = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await login(email, password);
        router.push("./Admin/Dashboard"); // Redirect to dashboard on successful login
      } catch (e:any) {
        setError(e.message);
      }
    };
    return (
        <div className={style.form}>

        <div className={style.container}>
            <form onSubmit={isLoggedIn} className={style.loginemail}>
                <p className="login-text" >Login</p>
                <div className={style.inputgroup}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className={style.inputgroup}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <div className="input-group">
                    <button type='submit' className={style.btn}>Login</button>
                </div>


            </form>
        </div>
        </div>
    );
}
