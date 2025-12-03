// hero.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Hero {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v2/";
    }

    /**
     * Get a single hero by ID or name
     * Calls: GET /api/v2/heroes/hero/:query
     *
     * @param {string|number} query Hero id or name
     * @param {string|string[]} [fields] Optional comma list of fields
     *        e.g. "id,name,role" or ["id","name","role"]
     */
    async getHero(query, fields = null) {
        try {
            if (!query && query !== 0) {
                throw new Error("Hero query is required.");
            }

            // Build ?fields=a,b,c
            let filterParams = "";
            if (fields) {
                const list = Array.isArray(fields) ? fields.join(",") : String(fields);
                filterParams = await createQueryString({ fields: list });
            }

            const params = `heroes/hero/${encodeURIComponent(query)}${filterParams}`;  
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Hero;
