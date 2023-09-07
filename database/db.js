import mongoose from "mongoose";

// pass = coK9IJ0RxlvXHII9
// name = LikhoDoc

const Connection = async () => {
    const URL = `mongodb+srv://LikhoDoc:coK9IJ0RxlvXHII9@cluster0.t0uxhcf.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true })
        console.log('database connected successfully')

    } catch (error) {
        console.log('Here is something error', error.message)

    }

}

export default Connection;