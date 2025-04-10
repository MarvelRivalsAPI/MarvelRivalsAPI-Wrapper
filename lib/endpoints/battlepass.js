// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Battlepass {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {integer} season The season number to fetch the battlepass data for. Defaults to current if not provided.
	 */
    async getBattlepass(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `battlepass${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Battlepass;
