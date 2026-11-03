import http from "http";
import dotenv from "dotenv";

// console.log(http)

dotenv.config()

const PORT = process.env.PORT || 3000

const app = http.createServer()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)   
})

