import React from "react";

function InfoTooltip(props) {
  return (
    <secrion className={`popup popup_type_InfoTooltip ${props.isOpen ? 'popup_opened' : ''}`}  aria-label="Попап результата регистрации">
      <button type="button" className="popup__exit-btn" aria-label="Закрыть модальное окно" onClick={props.onClose}></button>
      <p>test</p>
    </secrion>
  )
}

export default InfoTooltip;
