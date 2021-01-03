Crawler WEB
====================

This frontend application responds to the requeriments of crawling websites URLs and listing the links retrieved.

The app is developed in Angular 9 using socket.io for living communication with the api server. Also uses the redux patter through ngrx libs.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

For testing, the project contains a first very simple configuration build in karma which will be extended in future realeases.

It already set for deployment as docker image. Check intructions above.

### Install packages and globals

`$ npm install`

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

#### Angular: Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Environment support

Currenty only one configuration is enabled: demo. This configuration replace the default environment file with the environment.[cfg] file, both stored in environments folder.
For deploying the webapp make sure to configure correctly the config associeated file (api base url, api path, etc.)

### Docker

At the root of the project is the `.dockerfile` describing the Docker image. This image uses an
_nginx_ server for static content delivery. This server's configuration is located at `./nginx.conf`.

**Build Image:**
Ensure to construct the Angular App with: ng build --configuration=[cfg]
`$ docker build -t [tag_name] .`

For example, a build for a *demo* environment would be:
ng build --configuration=[demo]
`$ docker build -t tracker/web:0.0.1 -f docker/dockerfile .`

**Creating and running the container:**

To run this image, a container must be created.

`$ docker run -d --name [container_name] -p [host_port]:[container_port] [tag_name]`

For the previous example, the final command would be:

`$ docker run -d --name trackerweb -p 80:443 tracker/web:0.0.1`

__
  
#### TO DO TASKS

**Running end-to-end tests with Protractor**

Pending

**Review configuration, adjust paramters and resolve Lint Errors Advices**

Pending

**Add versioning build**

Pending

