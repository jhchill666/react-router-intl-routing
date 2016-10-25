import { extendObservable } from 'mobx'
import en from '../../public/intl/en.json'
import './setup'

class Intl {
    constructor() {
        this.switchLocale = this.switchLocale.bind(this)
        extendObservable(this, {
            locale: 'en',
            loading: 'false',
            data: en
        });
    }

    /**
     * @param locale
     */
    switchLocale(locale = 'en') {
        const url = `/intl/${locale}.json`
        this.loading = true
        return fetch(url)
            .then(resp => resp.json())
            .then(json => this.setLocale(json))
    }

    /**
     * @param messages
     * @param local
     */
    setLocale(json) {
        this.locale = json.locale
        this.loading = false
        this.data = json
    }
}

let store = new Intl()
export default store