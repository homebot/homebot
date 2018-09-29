# homebot
IoT platform for developing smart environments. Smart assistant is the concept of a platform for home automatization, which provides rich potential for disabled and elderly people to improve the quality and ensures the independence of their lifestyle.

The platform uses a series of sensors to transmit and handle information about the state of the environment in the house and human health. Through voice control it allows to control the lighting and temperature in the room, helps to control the operation of household appliances, security systems and many other devices. 

The platform allows children and carers to control elderly people’s activity and recall promptly the necessity to complete prescribed actions and tasks.

## Getting started

### Prerequisites

You need to have a git client to clone the repository. You can get it from http://git-scm.com/.

Also you must to have node.js and npm (node.js package manager). You can get them from http://nodejs.org/.

In order to work with database, you should ave installed mongodb. Instructions on installation can be found here: https://docs.mongodb.com/manual/installation/.

### Development environment

Clone the `homebot` repository using git:

```
git clone https://github.com/snikitin-me/homebot.git
```

Next, you need to install packages and run the application. There are two options to do that.

#### Running local development environment

Install dependencies:

```
npm install
```

Run the application:
```
npm start  (or npm run win-start for windows)
```

Note: make sure that mongo db is up and running on your machines.

### Development database

TODO...

### Tests

TODO...

## API endpoints

Use this link to see the endpoint the API: http://localhost:9000/api-docs/

## References
 * [How to describe a RESTFul API using Swagger along with Node and Express](https://mherman.org/blog/2016/05/26/swagger-and-nodejs/)
 * [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#pagination)
 * [Best practices for Express app structure](https://www.terlici.com/2014/08/25/best-practices-express-structure.html)
 * [Keeping API Routing Clean Using Express Routers](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers)