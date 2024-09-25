import * as cheerio from "cheerio"
import axios from "axios"

const DEFAULT_URL = "https://webscraper.io/test-sites/e-commerce/static/computers/laptops"


async function scrapePage(page) {
    const response = await axios.get(`${DEFAULT_URL}?page=${page}`)
    const $ = cheerio.load(response.data)
    const laptops = []

    $(".card-body").each((index, element) => {
        const priceText = $(element).find(".price").text().trim()
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''))
        const title = $(element).find("[title]").attr("title")
        const description = $(element).find(".description").text().trim()
        const rating = $(element).find("[data-rating]").attr("data-rating")
        const reviewCount = $(element).find(".review-count").text().trim().split(" ")[0]

        const laptop = {
            title,
            price,
            description,
            rating,
            reviewCount
        }

        laptops.push(laptop)
    })

    return laptops
}

async function getLastPage() {
    const response = await axios.get(DEFAULT_URL)
    const $ = cheerio.load(response.data)

    const lastPage = parseInt($(".pagination .page-item a.page-link")
        .not('[rel="next"]')
        .last()
        .text()
        .trim(), 10)

    return lastPage
}

async function scrapeAllLaptops() {
    const laptopList = []
    const lastPage = await getLastPage()
    
    for(let currentPage = 1; currentPage <= lastPage; currentPage++) {
        const laptopsFromPage = await scrapePage(currentPage)
        laptopList.push(...laptopsFromPage)
    }

    return laptopList
}

export default scrapeAllLaptops