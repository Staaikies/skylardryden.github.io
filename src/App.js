import React from 'react';
import { Fragment } from 'react';
import './css/style.css';

import Landing from './components/landing';
import WhoIAm from './components/accolades/who-i-am';
import WhatIDo from './components/accolades/what-i-do';
import WhatIveDone from './components/accolades/what-ive-done';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
       <Landing />
        <main className="content">
            <WhoIAm />
            <WhatIDo />
            <WhatIveDone />
        </main>
        <Footer />
    </Fragment>
  );
}

export default App;
