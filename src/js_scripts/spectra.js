/**
 * Represents a single data set that may be passed to Plotly.
 */
export class Trace {
    constructor(name, x, y, mode = " 'lines+markers'") {
        this.x = x;
        this.y = y;
        this.mode = mode;
        // todo: label for x and y axis missing
    }

    /**
     * Normalize the y value array either to the provided factor or the its maximum.
     * @param scale {Number}
     * @returns {Array<Number>}
     */
    normalize(scale = null) {
        let finalScale = scale === null ? Math.max(...this.y) : scale;
        return this.y.map(value => value / finalScale);
    }

}

export class SfgSpectrum {

    constructor() {
        this.name = "";
        this.wavenumbers = [];
        this.sfg_intensity = [];
        this.ir = [];
        this.vis = [];
    }

    fromJson(data) {
        return Object.assign(this, data)
    }

    /**
     * Normalize the SFG spectrum to the product of infrared and visible laser intensities
     * @returns {Array<Number>}
     */
    normalizeSfgIntensity() {
        let result = this.sfg_intensity.map((currElem, index) =>
            currElem / (this.ir[index] * this.vis[index])
        )
        return (result)
    }

    /**
     * Convert the SFG spectrum to a plottable representation. The desired y value is selected with the ySelector.
     * @param ySelector {String}
     * @returns {Trace}
     */
    toTrace(ySelector = null) {
        let y = ySelector === null ? this.normalizeSfgIntensity() : this[ySelector]
        return new Trace(this.name, this.wavenumbers, y)
    }

    /**
     * Convert the spectrum to a csv-ready string.
     * @param sep {String}
     * @returns {String}
     */
    toCSV(sep = ";") {
        let csv = ['wavenumber', 'sfg', 'ir', 'vis'].join(sep) + '\n';
        for (let i = 0; i < this.wavenumbers.length; i++) {
            csv += [this.wavenumbers[i], this.sfg_intensity[i], this.ir[i], this.vis[i]].join(sep)
            csv += "\n";
        }
        return csv
    }

}


let data = {
    "name": "dummy",
    "wavenumbers": [1, 2, 3, 4,],
    "sfg_intensity": [1, 2, 3, 4,],
    "ir": [1, 2, 3, 4,],
    "vis": [1, 2, 3, 4,]
}

let sfg = new SfgSpectrum().fromJson(data)
console.log(sfg.toCSV())