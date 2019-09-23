import React from 'react';
import logo from './logo.svg';
import '../src/sass/_positions.scss';
import '../src/sass/_header.scss';
import '../src/sass/_fonts.scss';
import '../src/sass/_welcome-page.scss'
import '../src/sass/_customButton.scss'
import '../src/sass/_Fidelizacion.scss';
import '../src/sass/_Responsive.scss';
import '../src/sass/_features.scss';
import '../src/sass/_MarketingPage.scss';
import '../src/sass/_FidelizacionMessage.scss';
import '../src/sass/_general.scss';

import HeaderIntelligence from './components/header/header'
import ViewInicio from './containers/_inicio';

function App() {
  return (
    <div>
    <HeaderIntelligence></HeaderIntelligence>
    <ViewInicio></ViewInicio>
    </div>
  );
}

export default App;
