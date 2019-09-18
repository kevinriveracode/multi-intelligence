import React from 'react';
import logo from './logo.svg';
import '../src/sass/_positions.scss';
import '../src/sass/_header.scss';
import '../src/sass/_fonts.scss';
import '../src/sass/_welcome-page.scss'
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
