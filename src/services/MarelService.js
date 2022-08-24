class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=9b98a7f33212ed00df7ad4ce75ee004b'

    getResource = async (url) =>{
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () =>{
        return this.getResource(`${this._apiBase}characters?${this._apiKey}`);
    }

    getCharacter = (id) =>{
        return this.getResource(`${this._apiBase}characters/${id}/?${this._apiKey}`);
    }
}

export default MarvelService