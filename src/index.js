import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router'
import { Provider } from 'mobx-react'
import IntlWrapper from './intl/IntlWrapper'
import intl from './intl/intl.store'
import App from './app/App'

import './index.css'

ReactDOM.render(
    <Provider { ...{ intl }}>
      <BrowserRouter>
        <IntlWrapper>
          <App />
        </IntlWrapper>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
