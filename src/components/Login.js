import React from "react";
import '../index.css';

function Login(props) {
  return (
    <section className="login auth-page" aria-label="Авторизация">
        <form className="auth-page__form" name="login-form" noValidate={true} >
          <h2 className="auth-page__form-title">Вход</h2>
          <input type="email" className="auth-page__input" minLength="5" maxLength="40" name="user-email" placeholder="Email" required />
          <span className="auth-page__input-error user-email-error"></span>
          <input type="password" className="auth-page__input" minLength="6" maxLength="40" name="user-password" placeholder="Пароль" required />
          <span className="auth-page__input-error user-password-error"></span>
          <button type="submit" className="auth-page__submit-btn">Войти</button>
        </form>
    </section>
  )
}

export default Login;
