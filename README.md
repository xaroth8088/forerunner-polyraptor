# Fandom React Boilerplate
A reasonable starting point for a React application

## Why another boilerplate?
<a href="https://xkcd.com/927/"><img alt="xkcd - Standards" src="https://imgs.xkcd.com/comics/standards.png" /></a>

This project's goal is to enable a developer to quickly stand up the bones of a new React/Redux application.

To that end, this boilerplate should...
* have all the developer comforts, such as Hot Module Reloading and integration with the Redux Chrome extension
* use the minimum set of packages that are likely to be common to all projects
* support server-side rendering (SSR) with data pre-loading
* isolate the development environment
* make deployment simple

And - just as importantly - this boilerplate should not...
* be too opinionated about the application's structure
* prematurely optimize

Other existing boilerplates run the gamut from bare-bones to very heavy.  Each illustrate great aspects, but didn't quite fit our needs and usage patterns.

### Who is this for?
A developer at Fandom that wants to quickly stand up a basic React/Redux application.  With luck, you may find this boilerplate useful as well.

### Who is this not for?
Developers who are brand new to React/Redux may not find this intuitive to set up or use on its own, though they may find it useful in conjunction with other reading or learning.  This boilerplate follows reasonable best-practices, such as [splitting "Presentational" and "Container" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) and is cognizant of the [deliberate choice to include Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).

Developers who want something closer to a framework may be frustrated by the loose organization of libraries, and may prefer the excellent [Next.js](https://zeit.co/blog/next5) or [react boilerplate](https://www.reactboilerplate.com/).

## Features
* Basic "Hello, world!" React/Redux application
  * Includes a router, a container ("smart") component, a presentational ("dumb") component, a single reducer, a single action, and a single thunk
* Docker container, both for development and deployment
* Hot reloading, including React Hot Module Reloading
* Server-side rendering
* Immutable state
* Integration with the Redux Chrome extension
* Nginx proxy to the node server, and for serving static files
* Differential code compilation for the server and client (i.e. there's no sense compiling your server code to ES5)
* SCSS and CSS autoprefixing
* JavaScript and SCSS linting

## Non-features
Why doesn't this boilerplate include...
* testing - testing needs vary wildly between applications and teams, and we don't want to be prescriptive
* internationalization - i18n needs vary wildly between applications
* reselect - when your application needs this, you'll know it and can add it then
* offline applications / progressive web apps (PWA) - not every application needs this, and it's relatively straightforward to add after the fact when required
* `styled-components` or similar - a [BEM](http://getbem.com/introduction/)-like CSS naming scheme obviates the need for this application complexity in many cases
* deployment scripts - deployment environments and needs vary wildly between applications, so we stop at the container generation point

## Pre-requisites
* Docker
* yarn (preferred) or npm

## Getting Started
### Initial setup
Ensure you have Docker installed and running normally.

### Building the container
This is a one-time mandatory step.  It can safely be re-run anytime you want to update the container itself, as the container is separate from where the code lives.
`$ yarn container:build` or `$ npm run container:build`

### Developing
`$ yarn container:start` or `$ npm run container:start`

At this point, you can visit http://localhost:8080 to see the 502 error page served from nginx.

Once in the container:
`# yarn start`

Webpack will compile the application and start up the dev server.

Loading http://localhost:8080 to see the 'Hello, world!' app.

By default, the container publishes the node debugger on port 9876.

### Environment variables
* `FANDOM_BOILERPLATE_PORT` - which port nginx will listen on (default: 8080)
* `FANDOM_BOILERPLATE_DEBUG_PORT` - which port the node debugger will listen on (default: 9876)

## Something didn't work correctly
The most common problem you'll encounter is a port conflict on either 8080 or 9876.  Stop the container, then verify that nothing else is trying to listen on these ports.

If you suspect a bug, please [file an issue](/issues).
