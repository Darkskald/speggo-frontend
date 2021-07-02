/**
 * Represents a single data set that may be passed to Plotly.
 */
export class Trace {
    constructor(name, x, y, mode = 'lines+markers') {
        this.name = name
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
        let temp = new Trace(this.getName(ySelector), this.wavenumbers, y);
        let color;
        if (ySelector === "ir") {
            color = "red";
        } else if (ySelector === "vis") {
            color = "green"
        }

        temp["marker"] = {'color': color};
        temp["line"] = {'color': color}
        return temp;
    }

    getName(selector) {
        if (selector === null) {
            return "normalized"
        } else if (selector === "sfg_intensity") {
            return "raw"
        } else return selector.toUpperCase()
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
