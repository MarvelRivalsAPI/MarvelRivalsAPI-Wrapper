// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class Player {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {string} query The username of the player
	 */
    async findPlayer(query) {
        try {
            if (!query) {
                throw new Error("Username is required.");
            }

            const params = `find-player/${query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} query The unique identifier of the player (could be uid or username).
	 */
    async getPlayerStats(query, filters = {}) {
        try {
            if (!query) {
                throw new Error("Username is required.");
            }

            let filterParams = await createQueryString(filters);

            const params = `player/${query}${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
    
	/**
	 * @param {string} query Update a player by their username or uid
	 */
    async updatePlayer(query) {
        try {
            if (!query) {
                throw new Error("Username is required.");
            }

            const params = `player/${query}/update`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Player;
