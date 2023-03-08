import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomeEcommerce } from './app/modules/home-ecommerce/HomeEcommerce';
import { theme } from './app/shared/controls/theme/Theme';

function App() {
  
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeEcommerce} />
        </Switch>
      </Router>
    </ThemeProvider>

  
  );
}

export default App;
