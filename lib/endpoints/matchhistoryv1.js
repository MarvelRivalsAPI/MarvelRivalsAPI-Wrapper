// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class MatchHistoryv1 {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {string} query The unique identifier of the player (could be uid or username).
	 * @param {integer} season The season to retrieve match history for. Defaults to current season.
	 * @param {integer} skip The number of matches to skip (pagination). Defaults to 20.
	 * @param {integer} game_mode The game mode to filter matches by. Defaults to 0.
	 * @param {integer} tiemstamp Filter matches by timestamp. Only includes matches after the given timestamp.
	 */
    async findPlayerMatchHistory(query, filters = {}) {
        try {
            if (!query) {
                throw new Error("Username is required.");
            }

            let filterParams = await createQueryString(filters);

            const params = `player/${query}/match-history${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = MatchHistoryv1;
