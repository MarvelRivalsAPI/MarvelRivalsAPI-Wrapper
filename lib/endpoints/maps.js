// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Maps {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {integer} page The page number to fetch (defaults to 1).
	 * @param {integer} limit The number of maps to return per page (defaults to 10).
	 */
    async getAllMaps(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `maps${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Maps;
