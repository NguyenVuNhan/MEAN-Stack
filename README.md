# Video Player

This project is using the MEAN stack as the development enviroment. <br/>
The whole project are taken from the (MEAN Stack tutorial Series)[https://www.youtube.com/watch?v=vLvNr3Wa5YI&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9&index=1]

# Run

To run this, you will need to fill in your mongodb url in `/server/routes/api.js`

Run server with

```
$ node server
```

Then run angular app

```
$ ng serve -o
```

# Production

The angular need to build in production mode

```
$ ng build --prod
```

Then the server will be able to read the builed web app. Again, we need to run the server.

```
$ node server
```
