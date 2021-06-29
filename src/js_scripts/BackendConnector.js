export class BackendConnector {

    constructor() {
        this.baseUrl = "http://localhost:8080/";
        this.endpoints = {
            "sfg": "sfg",
            "sfg_fuzzy": "sfg/fuzzy"
        }
    }

    async fetchData(url) {
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
                return data
            }
        ).catch(
            error => {
                console.error('Error:', error);
            }
        )
    }

    /**
     * Convenience function to handle generic requests to the pre-configured endpoints.
     * @param epKey {String}
     * @param params {String}
     * @returns {Promise<T>}
     */
    async fetchFromEndpoint(epKey, params = "") {
        let url = this.baseUrl + this.endpoints + params
        return this.fetchData(url)

    }

    // todo list sfg
    // todo fetch fuzzy
    // todo fetch by id
}





