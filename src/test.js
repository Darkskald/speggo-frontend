let sfgUrl = "http://localhost:8080/sfg/1"


export async function fetchSfg() {
    const res = await fetch(sfgUrl);
    const data = await res.json();

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

export function visualizeSfg(divId) {

    fetch(sfgUrl, {})
        .then(res => res.json())
        .then(out => {
            console.log('Output: ', out);
            plotSfg(out, divId)
        }).catch(err => console.error(err));
}


export function plotSfg(sfg, divId, rawToggle) {
    const layout = {
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
    const config = {responsive: true}

    let y;

    if (rawToggle===0){
        y=sfg.sfg_intensity;
    }else {
        y=normalizeSfgIntensity(sfg);
    }

    let data = [{
        x: sfg.wavenumbers,
        y: y,
        mode: 'lines+markers'

    }];
    let TESTER = document.getElementById(divId);

    Plotly.newPlot(TESTER, data, layout, config);

}

function normalizeSfgIntensity(sfg) {
    let result = sfg.sfg_intensity.map((currElem, index) =>
        currElem / (sfg.ir[index] * sfg.vis[index])
    )
    return(result)
}