import areIntlLocalesSupported from 'intl-locales-supported';
import { addLocaleData } from 'react-intl';
import Intl from 'intl';

export const enabledLanguages = [
    'en',
    'fr',
    'de'
]

// here we need to bring in the 'Intl' browser polyfill, all Intl.~locale
// language specific polyfills, and react-intl's langauge specific data.
if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(enabledLanguages)) {
        // `Intl` exists, but it doesn't have the data we need, so load the
        // polyfill and patch the constructors we need with the polyfill's.
        global.Intl.NumberFormat = Intl.NumberFormat;
        global.Intl.DateTimeFormat = Intl.DateTimeFormat;
    }
} else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = Intl;
}

// the language specific Intl polyfills and react-intl language data are pretty
// small (~2k each), so we'll add to bundle and not worry about loading on demand.
// On the other hand, the language resource bundles for each language are pretty
// big, so we'll lazy load these as needed
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/fr';
import 'intl/locale-data/jsonp/de';

import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import de from 'react-intl/locale-data/de'

[en, fr, de].forEach(addLocaleData)

