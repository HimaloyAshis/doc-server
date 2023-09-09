import { Server } from "socket.io";

import Connection from "./database/db.js";

import { getDocument, updateDocument } from "./controller/document-controller.js";

Connection()

const port = process.env.PORT || 9000

const io = new Server(port, {
    cors: {
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST']
    }
})

io.on('connection', socket => {

    socket.on('get-document', async documentId => {

        const document = await getDocument(documentId)
        socket.join(documentId)
        socket.emit('load-document', document.data)

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta)

        })

        socket.on('save-document', async data =>{
            return await updateDocument( documentId , data)
        })

    })


})
