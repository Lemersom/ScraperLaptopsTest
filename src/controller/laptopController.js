import express from "express"
import { fetchLaptops, filterLaptopByBrand, orderLaptopByPrice } from "../service/laptopService.js" 

const laptopRouter = express.Router()

laptopRouter.get('/', async (req, res) => {
    const order = req.query.order
    const brand = req.query.brand

    let {status, data: laptops} = await fetchLaptops()

    if(laptops.length > 0 && brand) {
        laptops = filterLaptopByBrand(laptops, brand)
    }
    if(laptops.length > 0 && order) {
        laptops = orderLaptopByPrice(laptops, order)
    }

    res.status(status).json(laptops)
})

export default laptopRouter