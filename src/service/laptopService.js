import scrapeAllLaptops from "../scraper/laptopScraper.js"

function filterLaptopByBrand(laptops, brand) {
    if(!brand || typeof brand !== "string") {
        return laptops
    }

    return laptops.filter(laptop => laptop.title?.toUpperCase().includes(brand.toUpperCase()))
}

function orderLaptopByPrice(laptops, order) {
    if(order.toLowerCase() === "asc") {
        return laptops.sort((a, b) => a.price - b.price)
    } else if(order.toLowerCase() === "desc") {
        return laptops.sort((a, b) => b.price - a.price)
    } else {
        return laptops
    }
}

async function fetchLaptops() {
    try {
        const laptops = await scrapeAllLaptops()

        if(laptops && laptops.length > 0) {
            return { status: 200, data: laptops }
        } else {
            return { status: 404, data: [] }
        }
    } catch (error) {
        return { status: 500, data: [], error: error.message }
    }
}

export {
    fetchLaptops,
    filterLaptopByBrand,
    orderLaptopByPrice
}