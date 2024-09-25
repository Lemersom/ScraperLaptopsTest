import express from "express"
import laptopRouter from "./src/controller/laptopController.js"

const API_PORT = 3000
const API_HOST = "localhost"

const app = express()

app.use(express.json())

app.use('/api/laptop', laptopRouter)


app.get('/', async (req, res) => {
    res.send(`<p>Para a resolução do teste vá até: <a href="http://${API_HOST}:${API_PORT}/api/laptop">http://${API_HOST}:${API_PORT}/api/laptop</a></p>`)
})


app.listen(API_PORT, () => {
    console.log(`Server running on http://${API_HOST}:${API_PORT}`)
})