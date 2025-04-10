// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Balances {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {integer} page The page number to fetch (defaults to 1).
	 * @param {integer} limit The number of balances to return per page (defaults to 10).
	 */
    async getAllBalances(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `balances${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} query The unique ID or name of the balance to search for.
	 */
    async getBalance(query) {
        try {
            const params = `balance/${query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Balances;
