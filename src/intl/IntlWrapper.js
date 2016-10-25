import React, { PropTypes } from 'react'
import { IntlProvider } from 'react-intl'
import { observer } from "mobx-react"

const IntlWrapper = ({ children, intl }) => (
    <IntlProvider {...intl.data}>
        {children}
    </IntlProvider>
)

IntlWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    intl: PropTypes.object.isRequired
}

export default observer(['intl'], IntlWrapper)