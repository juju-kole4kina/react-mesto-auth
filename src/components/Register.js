import React from "react";
import { auth } from "../utils/auth";
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function Register(props) {
  const navigate = useNavigate();

  const [isEmail, setEmail] = React.useState('');
  const [isPassword, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(isEmail, isPassword)
    .then((res) => {
      navigate('/sign-in', {replace: true});
    })
    .catch((err) => console.log(err));
  }

  return (
    <section className="register auth-page" aria-label="Регистрация">
        <form className="auth-page__form" onSubmit={handleSubmit} name="register-form" noValidate={true} >
          <h2 className="auth-page__form-title">Регистрация</h2>
          <input type="email" className="auth-page__input" value={isEmail} onChange={handleEmailChange} minLength="5" maxLength="40" name="new-user-email" placeholder="Email" required />
          <span className="auth-page__input-error user-email-error"></span>
          <span className="auth-page__input-error user-password-error"></span>
          <input type="password" className="auth-page__input" value={isPassword} onChange={handlePasswordChange} minLength="6" maxLength="40" name="new-user-password" placeholder="Пароль" required />
          <button type="submit" className="auth-page__submit-btn">Зарегистрироваться</button>
        </form>
        <p className="auth-page__question">Уже зарегистрированны? <Link to="sign-in" className="auth-page__link">Войти</Link></p>
    </section>
  )
}

export default Register;
