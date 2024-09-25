import * as cheerio from "cheerio"
import axios from "axios"

const LAPTOPS_WEBSITE_LINK = "https://webscraper.io/test-sites/e-commerce/static/computers/laptops"

// function splitDescriptionItems(description) {
//     return description.split(", ")
// }

async function scrapeAllLaptops() {
    const response = await axios.get(LAPTOPS_WEBSITE_LINK)
    const $ = cheerio.load(response.data)
    const laptopList = []

    $(".card-body").each((index, element) => {
        const price = $(element).find(".price").text().trim()
        const title = $(element).find("[title]").attr("title")
        const description = $(element).find(".description").text().trim()
        const rating = $(element).find("[data-rating]").attr("data-rating")
        const reviewCount = $(element).find(".review-count").text().trim().split(" ")[0]
        //const descriptionItems = splitDescriptionItems(description)

        const laptop = {
            price,
            title,
            description,
            rating,
            reviewCount
        }

        laptopList.push(laptop)
    })

    return laptopList
}

export default scrapeAllLaptops