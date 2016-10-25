react-router-intl-routing
====

An example repo demonstrating dynamic translation of the actual uri segments of the address bar.

Although I see a few examples of integrating [react-router](https://react-router.now.sh/) and [react-intl](https://github.com/yahoo/react-intl), these by and large, focus 
on dynamically re-rendering the page content for a chosen language.  

This takes this concept a step further, in that it demonstrates how simple it is to also have each uri segment in the address bar translated in your chosen language as well.  **Examples of this I've not found despite extensive searching!**

The example uses [Mobx](https://mobxjs.github.io/mobx/) to glue things together, and also [create-react-app](https://github.com/facebookincubator/create-react-app) as a sensible shortcut to get up and running.  As `create-react-app` does not - yet - support [decorators](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#can-i-use-decorators) or other experimental features not yet widely adopted from `babel` such as property-initializers`, I'm afraid you don't get the sugary sweetness with Mobx.


`npm start` to get started.

