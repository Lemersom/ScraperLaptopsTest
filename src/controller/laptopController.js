import express from "express"
import scrapeAllLaptops from "../scraper/laptopScraper.js"

const laptopRouter = express.Router()

laptopRouter.get('/', async (req, res) => {
    const laptops = await scrapeAllLaptops()
    res.status(200).json(laptops)
})

export default laptopRouter