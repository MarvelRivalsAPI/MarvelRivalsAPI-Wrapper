// heroes.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Heroesv2 {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v2/";
    }

    /**
     * Get the full heroes list
     * Calls: GET /api/v2/heroes
     */
    async getHeroes() {
        try {
            const params = "heroes";
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get a single hero by id or name
     * Calls: GET /api/v2/heroes/hero/:query?fields=...
     *
     * @param {string|number} query  Hero id or name (same value you pass to the route)
     * @param {string|string[]} [fields] Optional list of fields to return
     *        e.g. "id,name,role" or ["id","name","role"]
     */
    async getHero(query, fields) {
        try {
            if (!query && query !== 0) {
                throw new Error("Hero query is required.");
            }

            const filters = {};

            if (fields) {
                filters.fields = Array.isArray(fields)
                    ? fields.join(",")
                    : String(fields);
            }

            const filterParams = await createQueryString(filters);
            const params = `heroes/hero/${encodeURIComponent(query)}${filterParams}`;

            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Heroesv2;
