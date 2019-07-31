This IT logger project help us to do some normal daily tech log things, for example, you can creat a new log and add, edit, delete it from the log list, also same operation for technicians. 

## What you should install

You should install json-server and concurrently in your local.
### Concurrently
we can run multiple commands concurrently with `Concurrently`. In this case, we can run both front and back end.
    `"dev": "concurrently npm:start npm:json-server"`
    
### json-server
`"json-server": "json-server --watch db.json --port 5000"`
see more info here (https://github.com/typicode/json-server)
   
### proxy
install proxy to set a baseUrl and make our fetching more easy.

### moment and react-moment

formating the date (for example: MMMM Do YYYY, h:mm:ss a)

### redux-devtools-extension

a super powerful tool the developer should use when they are using redux. You should install it locally and Chromelly (lol, I mean the Chrome extension)

### `npm run dev`



