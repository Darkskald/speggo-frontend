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

/**
 * Represents a single VSFG spetrum.
 */
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
     * @param realName {String}
     * @returns {Trace}
     */
    toTrace(ySelector = null, realName=false) {
        let y = ySelector === null ? this.normalizeSfgIntensity() : this[ySelector]
        let name = !realName ? this.getName(ySelector) : this.name;
        let temp = new Trace(name, this.wavenumbers, y);
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

/**
 * Represents a single Langmuir compression isotherm.
 */
export class LtIsotherm {
    constructor() {
        this.name = "";
        this.time = [];
        this.area = [];
        this.apm = [];
        this.surface_pressure = [];
    }

    fromJson(data) {
        return Object.assign(this, data)
    }

    /**
     * Convert the LT isotherm to a plottable representation. The desired x value is selected with the ySelector.
     * @param xSelector {String}
     * @returns {Trace}
     */
    toTrace(xSelector = null) {
        let x = xSelector === null ? this.area : this[xSelector]
        return new Trace(this.getName(xSelector), x, this.surface_pressure);
    }

    getName(selector) {
        if (selector === null) {
            return "area"
        } else return selector.split("_").join(" ")

    }
}
