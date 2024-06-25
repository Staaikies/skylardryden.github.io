import { useState } from 'react';

const DoneCard = ({header, desc}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`done-card ${open ? "done-card--open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="done-card__header-wrapper">
        <h3 className="done-card__header">{header}</h3>
     
        <i className="done-card__icon"></i>
      </div>
      <p className="done-card__description">{desc}</p>
    </div>
  )
}

const WhatIveDone = () => {
  return (
    <section className="section  section--bordered-top  section--flex-centered">
      <div className="accolade accolade--done">
        <div className="accolade__heading-wrapper">
          <h2 className="accolade__heading">what<br aria-hidden="true" /> I've<br aria-hidden="true" /> done</h2>
        </div>
        <div className="accolade__content-wrapper">
          <DoneCard
            header="Yuppiechef"
            desc="Sole Front-end Developer reponsible for maintaining the Front-end of the website, warehouse and store POS interfaces."
          />
          <DoneCard
            header="Teach Me 2"
            desc="Was instrumental in redesigning the website in React.js and was involved in the early mobile development of their sister company product, Coachbit."
          />
          
          <div className="done-card">
            <a href="https://github.com/Staaikies" target="_blank" className="done-card__header-wrapper done-card__header done-card__header-link">GitHub Projects</a>
          </div>
        </div>
      </div>
  </section>
  )
}

export default WhatIveDone;