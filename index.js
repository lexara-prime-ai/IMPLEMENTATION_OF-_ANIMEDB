/*
    curl 
        --request GET
        --url 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Attack%20on%20titan'
*/

/**
 * @author Irfan Ghat
 * 
 * @param {string} URL - Base url
 * @param {string} API_KEY - Private [API] key
 * @param {string} SEARCH_QUERY - Main input query
 * @param {string} _SEARCH_QUERY - Main input query
 * @param {string} GENRES - Genres -> comma seperated values
 * 
 */

// Selectors
const postWrapper = document.querySelector(".poster-wrapper");

class HttpClient {
    constructor() {
         this.SEARCH_QUERY = "fate zero";
         this.URL = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${this.SEARCH_QUERY}`;
         this.API_KEY = "XXXX-XXXX-XXXX-XXXX-XXXX";
         this.HOST = "anime-db.p.rapidapi.com";
         this.OPTIONS = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": `${this.API_KEY}`,
                "X-RapidAPI-Host": `${this.HOST}`
            }
         };
    }

    async req_GET_SHOW() {
        try {
            const response = await fetch(this.URL, this.OPTIONS);
            const result = await response.json();
            const data = result.data;
            console.log(data);

            for (let show of data) {
                postWrapper.innerHTML += `
                <img class="poster" src=${show.image} alt="poster">
            `;
            }

            
        } catch (error)
        {
            console.error(error);
        }
    }
}

const http = new HttpClient();
http.req_GET_SHOW();