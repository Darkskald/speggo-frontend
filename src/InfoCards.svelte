<script>

    import {onMount} from "svelte";
    /*
    onMount(() => {
        let script = document.createElement('script');
        script.src = "https://cdn.plot.ly/plotly-latest.min.js"
        document.head.append(script);

        script.onload = function () {
            var data = [{
                values: [19, 26, 55],
                labels: ['SML', 'Artificial', 'DPPC'],
                type: 'pie'
            }];

            var layout = {
                width: 300,
                height: 300,

                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: 'rgb(180,180,199)',
                legend: {"orientation": "h"},
                autosize: true,
                yaxis: {
                    //automargin: true,
                },
                xaxis: {
                    //automargin: true,
                },

                margin: {
                    l: 50,
                    r: 50,
                    b: 10,
                    t: 50,
                    pad: 4
                },
            };
            var config = {responsive: true};
            // Plotly.newPlot('myDiv', data, layout, config);
            // Plotly.newPlot('myDiv2', data, layout, config);
        }
    })


*/
</script>


<div class="flex flex-wrap">
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fa fa-chart-area fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Total spectra</h5>
                    <h3 class="font-bold text-3xl text-gray-600">2500 <span class="text-green-500"><i
                            class="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>

        <!--/Metric Card-->
    </div>

    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-pink-600"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Total Users</h5>
                    <h3 class="font-bold text-3xl text-gray-600">249 <span class="text-pink-500"><i
                            class="fas fa-exchange-alt"></i></span></h3>
                </div>
            </div>
        </div>
        <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-blue-600"><i class="fas fa-upload fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Last upload</h5>
                    <h3 class="font-bold text-3xl text-gray-600">2021-06-22</h3>
                </div>
            </div>
        </div>
        <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-start">

                <div class=" text-left md:text-center">

                    <h3 class="font-bold text-3xl text-gray-600">SFG types</h3>
                </div>
            </div>
            <div id="myDiv">
            </div>
        </div>
        <!--/Metric Card-->
    </div>

    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-start">

                <div class=" text-left md:text-center">

                    <h3 class="font-bold text-3xl text-gray-600">Spectra types</h3>
                </div>
            </div>
            <div id="myDiv2">
            </div>
        </div>
        <!--/Metric Card-->
    </div>

    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
        <!--Metric Card-->
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">To Do List</h5>
                    <h3 class="font-bold text-3xl text-gray-600">7 tasks</h3>
                </div>
            </div>
        </div>
        <!--/Metric Card-->
    </div>

</div>