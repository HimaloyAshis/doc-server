import { Server } from "socket.io";

const port = process.env.PORT || 9000

const io  = new Server(port, {
    cors:{
        origin:'http://localhost:5173/',
        methods:['GET', 'POST']
    }
})

io.on('connection', {})
