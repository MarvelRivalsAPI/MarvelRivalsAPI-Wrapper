// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Heroes {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {integer} page The page number to fetch (defaults to 1).
	 * @param {integer} limit The number of achievements to return per page (defaults to 10).
	 */
    async getAllHeroes(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `heroes${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} query The unique ID or name of the hero to search for.
	 */
    async getHero(query) {
        try {
            const params = `heroes/hero/${query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} query The unique ID or name of the hero to search for.
	 */
    async getHeroStats(query) {
        try {
            const params = `heroes/hero/${query}/stats`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} query The unique ID or name of the hero to search for.
	 * @param {string} platform The platform for the leaderboard. Options are pc, ps, xbox. If not provided, defaults to pc.
	 */
    async getHeroLeaderboard(query, filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `heroes/leaderboard/${query}${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} query The unique ID or name of the hero to search for.
	 */
    async getHeroCostumes(query) {
        try {
            const params = `heroes/hero/${query}/costumes`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} query The unique ID or name of the hero to search for.
	 */
    async getHeroCostume(query, costume_query) {
        try {
            if (!query || !costume_query) {
                throw new Error("Both 'query' (hero name or ID) and 'costume_query' (costume name or ID) are required.");
            }

            const params = `heroes/hero/${query}/costume/${costume_query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Heroes;
