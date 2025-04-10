// blacklists.js
const { makeRequest, createQueryString } = require("../lib/utils/request");

class PatchNotes {
    constructor(api_key) {
        this.api_key = api_key;
        this.url = "https://marvelrivalsapi.com/api/v1/";
    }

	/**
	 * @param {integer} page The page number to fetch (defaults to 1).
	 * @param {integer} limit The number of patches to return per page (defaults to 10).
	 */
    async getAllPatchNotes(filters = {}) {
        try {
            let filterParams = await createQueryString(filters);
            const params = `patch-notes${filterParams}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key);
        } catch (error) {
            throw error;
        }
    }

	/**
	 * @param {string} query The unique ID or name of the patch note to search for.
	 */
    async getPatchNote(query) {
        try {
            const params = `patch-note/${query}`;
            return await makeRequest(this.url, params, null, "GET", this.api_key, this.store);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PatchNotes;
