const Achievements = require('../lib/endpoints/achievements');
const Balances = require('../lib/endpoints/balances');
const Battlepass = require('../lib/endpoints/battlepass');
const DevDiaries = require('../lib/endpoints/devdiary');
const Heroes = require('../lib/endpoints/heroes');
const Heroesv2 = require('../lib/endpoints/heroesv2');
const Hero = require('../lib/endpoints/hero');
const Items = require('../lib/endpoints/items');
const Maps = require('../lib/endpoints/maps');
const Map = require('../lib/endpoints/map');
const Match = require('../lib/endpoints/match');
const MatchHistory = require('../lib/endpoints/matchistory');
const MatchHistoryv1 = require('../lib/endpoints/matchistoryv1');
const PatchNotes = require('../lib/endpoints/patchnotes');
const Player = require('../lib/endpoints/player');
const Playerv2 = require('../lib/endpoints/playerv2');

class MarvelRivalsAPI {
    constructor(api_key) {
        this.api_key = api_key;

        this.achievements = new Achievements(api_key);
        this.balances = new Balances(api_key);
        this.battlepass = new Battlepass(api_key);
        this.devdiary = new DevDiaries(api_key);
        this.heroes = new Heroes(api_key);
        this.heroesv2 = new Heroesv2(api_key);
        this.hero = new Heroes(api_key);
        this.items = new Items(api_key);
        this.maps = new Maps(api_key);
        this.map = new Map(api_key);
        this.match = new Match(api_key);
        this.matchhistory = new MatchHistory(api_key);
        this.matchhistoryv1 = new MatchHistoryv1(api_key);
        this.patchnotes = new PatchNotes(api_key);
        this.player = new Player(api_key);
        this.playerv2 = new Playerv2(api_key);
    }
}

module.exports = MarvelRivalsAPI;