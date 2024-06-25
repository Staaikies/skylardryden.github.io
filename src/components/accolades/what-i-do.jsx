import { useState } from 'react';

import { Button, ToggleButton } from '../buttons/buttons';

import ProfilePhoto from '../../assets/portfolio_image.jpeg';
import BlockedProfile from '../../assets/svgs/blocked.svg';


const WhatIDo = () => {
  const [cardName, setCardName] = useState("Skylar Dryden");
  const [cardDesc, setCardDesc] = useState("This card is dynamic and responsive! Feel free to play around with the settings to test it.");
  const [darkMode, setDarkMode] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDarkModeClick = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }

  const handleLargeTextClick = () => {
    largeText ? setLargeText(false) : setLargeText(true);
  }

  const handleBlockClick = () => {
    blocked ? setBlocked(false) : setBlocked(true);
  }

  const handleEditMode = () => {
    editMode ? setEditMode(false) : setEditMode(true);

    if (blocked) {
      setBlocked(false);
    }
  }

  return (
    <section className="section  section--bordered-top  section--flex-centered">
      <div className="accolade  accolade--do">
        <div className="accolade__heading-wrapper">
          <h2 className="accolade__heading">what I do</h2>
          <p className="accolade__paragraph">I specialise in component design with a keen eye for responsiveness and accessibility.</p>
        </div>
        <div className="accolade__content-wrapper">
        <div className={`card-component card-component--${darkMode ? "dark" : "light"} ${largeText ? "card-component--large-font" : ""}`}>
          <div className="card-component__header">
            <img src={blocked ? BlockedProfile : ProfilePhoto} className="card-component__image" alt="Profile photo of Skylar Dryden" />
            {editMode
            ? 
            <input value={cardName} onChange={(e) => setCardName(e.target.value)} className="form-input form-input--large-font" style={{color: darkMode ? "white" : "#252525"}} maxLength={36} />
            :
            <h3 className="card-component__heading">
              {blocked ? "Someone that you used to know" : cardName} 
              <span className="card-component__subtext">{ blocked ? "Irrelevant amount of followers" : "57k followers"}</span>
            </h3>
            }
            
          </div>
          {editMode 
            ? <textarea value={cardDesc} onChange={(e) => setCardDesc(e.target.value)} className="form-textarea" style={{color: darkMode ? "white" : "#252525"}} maxLength={190} />
            : <p className={`card-component__copy ${blocked ? "card-component__copy--hide" : ""}`}>{cardDesc}</p>
          }
        </div>
          <div className="card-component-controls__settings-wrapper">
            <ToggleButton text="Dark mode" checked={darkMode} onChange={handleDarkModeClick} customClass="card-component-controls__control" disabled={editMode} />
            <ToggleButton text="Large text" checked={largeText} onChange={handleLargeTextClick} customClass="card-component-controls__control" disabled={editMode} />
          </div>
          <div className="card-component-controls__settings-wrapper">
            <ToggleButton text="Block" checked={blocked} onChange={handleBlockClick} customClass="card-component-controls__control" disabled={editMode} />
            <Button onClick={handleEditMode} customClass="card-component-controls__control" full={true}>{editMode ? "Save changes" : "Edit card"}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo;