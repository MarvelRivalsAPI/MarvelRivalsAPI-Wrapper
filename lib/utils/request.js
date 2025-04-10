// apiUtils.js
const axios = require("axios").default;
const deprecatedEndpoints = {
    "v1": {
        "invoices": "The 'invoices' endpoint in v1 is deprecated. It is HIGHLY recommended to use the and improved 'invoices' v2 endpoint instead.",
        "listings": "The V1 product endpoints are now deprecated, It is HIGHLY recommended to use the new and improved V2 product endpoints instead.",
    },
    "v2": {
        "products": "The 'products' endpoint currently does not support the price of the product. Use the v1 'listings' endpoint for easy pricing. or read our docs on how to get the pricing with the v2 'products' endpoint",
    },
};

async function makeRequest(url, params, body, method, apiKey, store) {
    let version = null;
    if (url.includes("/v1/")) {
        version = "v1";
    } else if (url.includes("/v2/")) {
        version = "v2";
    }

    if (version && deprecatedEndpoints[version] && deprecatedEndpoints[version][params]) {
        console.warn(`${deprecatedEndpoints[version][params]}`);
    }

    const requestOptions = {
        method: method ? method : "GET",
        url: url + params,
        headers: {
            "x-api-key": `${apiKey}`,
            "Content-Type": "application/json",
            // "X-STORE": store || ""
        },
        responseType: "json",
        proxy: false
    };

    try {
        const response = await axios(requestOptions);
        return response.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Convert filter object into query string format
 * @param {Object} filters Filters object (including optional season)
 * @returns {string} Formatted query string
 */
async function createQueryString(filters) {
    let queryString = '';
    if (Object.keys(filters).length > 0) {
        queryString = '?' + Object.keys(filters)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`)
            .join('&');
    }
    return queryString;
}

module.exports = {
    makeRequest,
    createQueryString
};
