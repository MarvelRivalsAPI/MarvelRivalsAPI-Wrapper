// maps.js
const { makeRequest } = require("../lib/utils/request");

class Map {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v2/";
    }

    /**
     * @param {string|number} id The ID of the map
     */
    async getMap(id) {
        try {
            if (!id && id !== 0) {
                throw new Error("Map ID is required.");
            }

            const params = `map/${id}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Map;
