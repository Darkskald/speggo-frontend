export class Plotter {
    /**
     *
     * @param data {Array<Trace>}
     * @param targetDiv {String}
     */
    constructor(data, targetDiv) {
        this.data = data;
        this.targetDiv = targetDiv;
        this.layout = {
            width: 850,
            height: 600,
            paper_bgcolor: 'rgb(180,180,199)',
            plot_bgcolor: 'rgb(180,180,199)',
            //autosize: true,
            //margin: {l: 0.1, t: 0.1, r: 0.1, b: 0.1},
            yaxis: {
                automargin: true,
                title: 'norm SFG intensity/ arb.u.'
            },
            xaxis: {
                automargin: true,
                title: 'wavenumber / cm-1'
            }
        }
        this.config = {responsive: true}
    }

    plot() {
        let target = document.getElementById(this.targetDiv);
        Plotly.newPlot(target, this.data, this.layout, this.config);
    }

}