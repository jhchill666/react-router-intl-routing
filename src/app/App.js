import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Match, Link } from 'react-router'
import intl from '../intl/intl.store'
import './App.css';

const App = (props, { intl: { formatMessage }}) => (
    <div className="container">
        <header>
            <ul>
                <li>
                    <Link to="/"><FormattedMessage id="home" /></Link>
                </li>
                <li>
                    <Link to={`/${formatMessage({id: 'route-about'})}`}>
                        <FormattedMessage id="about" />
                    </Link>
                </li>
                <li>
                    <Link to={`/${formatMessage({id: 'route-topics'})}`}>
                        <FormattedMessage id="topics" />
                    </Link>
                </li>
            </ul>
            <select onChange={(e) => intl.switchLocale(e.currentTarget.value) }>
                {['en', 'fr', 'de'].map(locale => (
                    <option value={locale} key={locale}>
                        {formatMessage({id: locale})}
                    </option>
                ))}
            </select>
        </header>
        <section>
            <Match exactly pattern="/" component={Home} />
            <Match pattern={`/${formatMessage({id: 'route-about'})}`} component={About} />
            <Match pattern={`/${formatMessage({id: 'route-topics'})}`} component={Topics} />
        </section>
    </div>
)

export const Home = () => (
    <div>
        <h2><FormattedMessage id="home" /></h2>
    </div>
)

export const About = () => (
    <div>
        <h2><FormattedMessage id="about" /></h2>
    </div>
)

export const Topic = ({ params }) => (
    <div>
        <h3>{params.topicId}</h3>
    </div>
)

export const Topics = ({ pathname }) => (
    <div>
        <h2><FormattedMessage id="topics" /></h2>
        <ul>
            <li>
                <Link to={`${pathname}/rendering`}>
                    <FormattedMessage id="topics-rendering" />
                </Link>
            </li>
            <li>
                <Link to={`${pathname}/components`}>
                    <FormattedMessage id="topics-components" />
                </Link>
            </li>
            <li>
                <Link to={`${pathname}/props-v-state`}>
                    <FormattedMessage id="topics-propsVState" />
                </Link>
            </li>
        </ul>

        <Match pattern={`${pathname}/:topicId`} component={Topic}/>
        <Match pattern={pathname} exactly render={() => (
            <h3><FormattedMessage id="topics-selectTopic" /></h3>
        )}/>
    </div>
)

App.contextTypes = {
    intl: intlShape
}

export default App;
