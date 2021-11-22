import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppContainer from './src/navigation';
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppContainer />
    </ApplicationProvider>
  );
};
export default App;
