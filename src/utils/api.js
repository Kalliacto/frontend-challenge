const API_KEY = 'live_x6whGXPT2acbw2x0wNJVtDyzTDX2h7M2ON6dutp0wPd2mcbMD3EdXOBsc9rNWzq0';

const config = {
    baseUrl: 'https://api.thecatapi.com/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
};

class Api {
    constructor(data) {
        this.baseUrl = data.baseUrl;
        this.headers = data.headers;
    }

    getCats() {
        return fetch(`${this.baseUrl}images/search?limit=20&api_key=${API_KEY}`)
            .then((res) => res.json())
            .catch((err) => console.log(err));
    }
}

export const api = new Api(config);
