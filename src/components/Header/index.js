import React from 'react';
import coverImage from '../../assets/7738_Backlit_Saturn.webp';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Nigel LaRue</h1>
      <img src={coverImage} alt="Saturn backklit"></img>
      {props.children}
    </header>
  );
}

export default Header;
