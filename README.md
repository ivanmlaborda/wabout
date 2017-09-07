[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Mongoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](http://mongoosejs.com/)
[![Socket.io](https://socket.io/assets/img/logo.svg)](https://socket.io/)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![Sass](https://github.com/MarioTerron/logo-images/blob/master/logos/sass.png)](https://sass-lang.com/)
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/)
[![Bootstrap](https://github.com/MarioTerron/logo-images/blob/master/logos/bootstrap.png)](https://getbootstrap.com/)
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![LeafletJS](http://ivansanchez.github.io/leaflet-vs-openlayers-slides/img/leaflet.svg)](http://leafletjs.com)

# [WABOUT](https://wabout.herokuapp.com)
##### DEMO [https://wabout.herokuapp.com](https://wabout.herokuapp.com)

### OVERVIEW
This is a responsive mobile app to geolocate your contacts in realtime.
This project has been developed as a final project in Skylab Coders Academy Bootcamp.


### Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3001
  ```

- Mongo Daemon path and database to use:

  ```
  DB_URI=mongodb://localhost:27017/NAME_DB
  ```

- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXXXXXXXXXXXXXX
  ```

##### Then type in the shell

  ```
  npm install
  ```

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically


### Built with:

- **Front-end**

  - angular: 1.6.6
    - angular-toastr: 2.1.1
    - angular-jwt: 0.1.9
    - angular-route: 1.6.6
    - angular-leaflet-directive: 0.10.0
    - checklist-model: 0.11.0  
  - socket.io": 2.0.3
  - socket.io-client: 2.0.3
  - Leaflet.label: 0.2.1
  - bootstrap: 3.3.7
  - font-awesome: 4.7.0

- **Back-end**

  - socket.io: 2.0.3
  - express: 4.15.4
  - mongoose: 4.11.9
  - bower: 1.8.0
  - body-parser: 1.17.2
  - path: 0.12.7
  - dotenv: 4.0.0
  - passport: 0.4.0
    - passport-jwt: 3.0.0
    - passport-local: 1.0.0
    - passport-local-mongoose: 4.2.1
  - jsonwebtoken: 7.4.3


### Authors

[Ivan Martinez Laborda](https://github.com/ivanmlaborda/)

### Acknowledgments

- [SkylabCoders](https://github.com/SkylabCoders)
- [JuanMa Garrido](https://github.com/juanmaguitar)
- [Manuel Barzi](https://github.com/manuelbarzi)
- [AlejandroDG](https://github.com/agandia9)
- [Simon Garmendia](https://github.com/sgarmendia)
