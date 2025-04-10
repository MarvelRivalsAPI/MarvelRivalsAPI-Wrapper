// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Items {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {string} type  Filter items by type. Possible values are emote, mvp, nameplate, spray.
	 * @param {integer} page The page number to fetch (defaults to 1).
	 * @param {integer} limit The number of items to return per page (defaults to 10).
	 */
    async getAllItems(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `items${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} query The unique ID or name of the item to search for.
	 */
    async getItem(query) {
        try {
            const params = `item/${query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Items;
