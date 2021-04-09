import React, { useState, useContext } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import { AccountContext } from './Accounts';
import '../../styles/Login.css'

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

  return (
    <section className="auth-wrapper">
        <section className="auth-inner">
            <section className="container">
                <form onSubmit={onSubmit} method="POST">
                    <h3>login</h3>
                    <section className="form-group">
                        <label>Email : </label>
                        <input onChange={event => setEmail(event.target.value)} className="form-control" type='email' placeholder='example@email.com' />
                    </section>
                    <section className="form-group">
                        <label>Password : </label>
                        <input onChange={event => setPassword(event.target.value)} className="form-control" type='password' placeholder='*****' />
                    </section>

                    <button /*onClick={this.renderHomePage}*/ className="btn btn-primary btn-block" type='submit'>LOGIN</button>
                    <Link className="btn btn-primary btn-block" to={{pathname:"/signup"}}>SIGNUP </Link>
                </form>
                
            </section>
        </section>
    </section>
);
};