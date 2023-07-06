# workspacesapp
Another poc for possible modular app using yarn workspaces

A small sample app which aims to demonstrate a possible approach to a modular app, this uses the Expo framework with react navigation for nav.

The app contains four modules Feature 1, Feature 2, Feature 3, Common.

the base of the app is just a navigation stack defined in app.js which defines a set of bottom tabs

each tab is linked to a ‘feature’ via react navigation, where each of ‘features’ is a module, a package of its own which could have its own navigation, tests, dependencies, resources and so on.

In this case each of the three features aims to test a different thing:

Feature 1 - imports and uses a dependency (expo-image)

Feature 2 - imports and uses another internal module as a dependency (common)

Feature 3 - navigates between modules / uses a nested navigator to move between screens within the the module.

Common - provides common resources (in this case some test helper functions)


Setup

run yarn install

run npx expo start and tap i or a to start a sim

