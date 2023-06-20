import React from "react";
import '../index.css';

function Register(props) {
  return (
    <section className="register auth-page" aria-label="Регистрация">
        <form className="auth-page__form" name="register-form" noValidate={true} >
          <h2 className="auth-page__form-title">Регистрация</h2>
          <input type="email" className="auth-page__input" minLength="5" maxLength="40" name="new-user-email" placeholder="Email" required />
          <span className="auth-page__input-error user-email-error"></span>
          <span className="auth-page__input-error user-password-error"></span>
          <input type="password" className="auth-page__input" minLength="6" maxLength="40" name="new-user-password" placeholder="Пароль" required />
          <button type="submit" className="auth-page__submit-btn">Зарегистрироваться</button>
        </form>
        <a href="#" className="auth-page__link">Уже зарегестрированны? Войти</a>
    </section>
  )
}

export default Register;
