import React from 'react'
import { Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import { StoreProvider } from './ContextPrvider'
// Pages
import MethodSelectionScreen from './screens/MethodSelection'
import PaymentDailsScreen from './screens/PaymentDetails'

// Components
import AppWrapper from './containers/AppWrapper'

const history = createBrowserHistory()

ReactDOM.render(
  <AppWrapper>
    <StoreProvider>
      <Router history={history}>
        <Route exact path='/' component={MethodSelectionScreen} />
        <Route
          exact
          path='/payment/tr_87kDx7NbuH'
          component={PaymentDailsScreen}
        />
      </Router>
    </StoreProvider>
  </AppWrapper>,
  document.querySelector('#root')
)
