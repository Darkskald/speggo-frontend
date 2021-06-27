<svelte:head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
    import {onMount} from 'svelte';

    const layout = {
        paper_bgcolor: 'rgb(180,180,199)',
        plot_bgcolor: 'rgb(180,180,199)',
        autosize: true,
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

    let spectrum = [];
    /*
    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        photos = await res.json();
    });
     */

    onMount(() => {
            let script = document.createElement('script');
            script.src = "https://cdn.plot.ly/plotly-latest.min.js"
            document.head.append(script);

            script.onload = function () {
                let data = [{
                    x: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000],
                    y: [0.1, 0.34, 0.22, 0.05, 0.06, 0.1, 0.12, 0.2, 0.1, 0.05, 0.01],
                    mode: 'lines+markers'

                }];
                let TESTER = document.getElementById('plotter');

                Plotly.newPlot(TESTER, data, layout, config);
            }



        }
    )
</script>


<div class="w-full md:w-1/2 p-3">
    <!--Graph Card-->
    <div class="bg-gray-900 border border-gray-800 rounded shadow">
        <div class="border-b border-gray-800 p-3">
            <h5 class="font-bold uppercase text-gray-600" id="headline">Graph</h5>
        </div>
        <div class="p-5">
            <div class="" id="plotter">

            </div>
        </div>
    </div>
    <!--/Graph Card-->
</div>
