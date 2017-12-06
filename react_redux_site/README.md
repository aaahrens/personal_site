## adamahrens.me
**installation**

cd into the installed directory

    yarn install

or, if  you do not have yarn

    npm i

# documentation

Run as an SPA

    npm run start

Run as isomorphic

    npm run start:server

note: start:deployment just runs node in production

#### code
   * the server folder contains the isomorphic rendering scheme, using express and renderToString
   * there are both global reducers and container specific reducers (for large containers), showing
     how to organize data and stateful code in order to scale
   * **styles** are written in sass and transcompiled to one large css file
   * folder management for styles also included
   * this project was initally boostrapped with create-react-app

#### features
* dynamic hamburger menu and drawer, fixed and hidden on desktop
* dynamic context menu in top right, expanded on desktop
* mobile styling with very few media queries, using flexbox and viewports
* mobile-specific code (not just smaller screen)
* routing with 404 fallthrough

## deployment

I like to name my deployment scripts runner, an example one for scaleway
is provided within the project. Something similar could be done for the aws.

...maybe when aws gets those bare metal instances up and running.


## credits:
* [react-toolbox](https://react-toolbox.io)
* [react-toolbox-themr](https://github.com/evilstreak/markdown-js)
* [create-react-app](https://github.com/evilstreak/markdown-js)

