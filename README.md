<img src="https://marvelrivalsapi.com/rivals/discord/MarvelRivalsAPI.gif" align="right" width="74" height="74"/>

# MarvelRivalsAPI Wrapper
The Official Node.js Wrapper for [MarvelRivalsAPI.com](https://marvelrivalsapi.com/)

The Marvel Rivals API Wrapper is the official, Node.js library designed to interface with the [Marvel Rivals API](https://marvelrivalsapi.com/). It provides developers with a clean and intuitive interface for fetching real-time data related to player stats, match performance, heroes, costumes, and more.

Built with flexibility and modularity in mind, this wrapper simplifies the process of authenticating with the API, making requests, and handling responses—so you can focus on building apps, bots, dashboards, or tools that leverage Marvel Rivals game data. Whether you're looking to analyze performance across seasons, fetch costume details for a specific hero, or display leaderboard-style match stats, this wrapper makes it straightforward.

Key features include:

- Full support for key endpoints such as Player Stats, Match Stats, Heroes, and Costumes.

- Built-in support for query parameters like ``season``, ``costume_query``, ``username``, and more.

- Clean and modern async/await syntax.

- Easy extensibility for future endpoint support as the API evolves.

This wrapper is ideal for developers building community tools, stat tracking systems, Discord bots, or any project that requires data from the MarvelRivals ecosystem.

## Requirements

> [!IMPORTANT]  
> - MarvelRivals API Key ([Get it here](https://marvelrivalsapi.com/dashboard/settings))

## Installation

> [!IMPORTANT]  
> Install the package with npm:

```bash
npm install marvelrivalsapi
```


## Usage

```javascript
const MarvelRivals = require("marvelrivalsapi");
const API = new MarvelRivals.API("YOUR_API_KEY");

API.matchStats.getMatchDetails("match_id").then((res) => {
    console.log(res); // Fetches match details by match ID
});

API.playerStats.getPlayerStats("player_name").then((res) => {
    console.log(res); // Fetches player stats by username
});

API.heroes.getHeroCostume("hero_name", "costume_id").then((res) => {
    console.log(res); // Fetches hero details and specific costume details
});
```

## Endpoints & Examples of Usage
> [!IMPORTANT]
> [Documentation](https://docs.marvelrivalsapi.com/)
