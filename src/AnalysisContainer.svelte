<script>
    import {download_csv_file} from "./js_scripts/export_csv";
    import {SfgSpectrum} from "./js_scripts/spectra";
    import {Plotter} from "./js_scripts/Plotter";
    import {currentSpecID} from "./stores";
    import {BackendConnector} from "./js_scripts/BackendConnector";
    import Toggle from "./components/Toggle.svelte";

    let multiModeToggle = false;
    let rawToggle = 1;
    let plotter = new Plotter([], "plotter")
    let conn = new BackendConnector()
    let currentSpectrum = "";
    let selectors = []
    let buffer = [];

    //$: if (spectrum !== "") {
    // plotSfg(spectrum, 'plotter', rawToggle);

    function makePlot(currentSpecID) {
        let url = "http://localhost:8080/sfg" + "/" + currentSpecID

        fetch(url).then(
            result => result.json()
        ).then(
            (data) => {
                if (!multiModeToggle) {
                    plot(data, rawToggle);
                } else {
                    let currentSpectrum = new SfgSpectrum().fromJson(data);
                    let temp = currentSpectrum.toTrace()
                    temp.name = currentSpectrum.name;
                    buffer.push(temp);
                    plotter.data = buffer;
                    plotter.layout["legend"]={"orientation": "h", "y": -0.2}
                    plotter.plot()
                }
            }
        )

    }

    function plot(data, toggle) {
        currentSpectrum = new SfgSpectrum().fromJson(data);
        if (toggle === 0) {
            plotter.data = [currentSpectrum.toTrace("sfg_intensity")];
            selectors.forEach(
                it =>
                    plotter.data.push(currentSpectrum.toTrace(it))
            )
            plotter.plot();
        } else {
            plotter.data = [currentSpectrum.toTrace()];
            plotter.plot();
        }

    }

    $: {
        makePlot($currentSpecID, rawToggle, selectors)
    }

    //}
    /*
    $: handlePlot()
    onMount(async () => {
            await handlePlot();

        }
    )*/
</script>

<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <div class="flex flex-row flex-wrap flex-grow mt-2">
        <div class="w-full md:w-2/3 p-3">
            <!--Graph Card-->
            <div class="bg-gray-900 border border-gray-800 rounded shadow">
                <div class="border-b border-gray-800 p-3">
                    <h5 class="font-bold uppercase text-gray-600" id="headline">{currentSpectrum.name}</h5>
                </div>
                <div class="p-5">
                    <div class="" id="plotter"></div>
                </div>
            </div>
            <!--/Graph Card-->
        </div>

        <div class="w-full md:w-1/3 px-1 py-3">
            <!--Menu Card-->
            <div class="bg-gray-900 border border-gray-800 rounded shadow">
                <div class="border-b border-gray-800 p-3">
                    <h5 class="font-bold uppercase text-gray-600">Menu</h5>

                </div>
                <div class="mb-1 p-3 text-gray-600">

                    <Toggle bind:multiModeToggle labelText="toggle multispec mode"/>


                    {#if !multiModeToggle}
                        <hr class="mt-2 border-solid border-gray-400">

                        <label>
                            <input type=radio bind:group={rawToggle} value={0}>
                            raw
                        </label>

                        <label>
                            <input type=radio bind:group={rawToggle} value={1}>
                            normalized
                        </label>

                        {#if rawToggle === 0}
                            <label>
                                <input type=checkbox bind:group={selectors} name="flavours" value="ir">
                                show IR
                            </label>
                            <label>
                                <input type=checkbox bind:group={selectors} name="flavours" value="vis">
                                show VIS
                            </label>
                        {/if}
                        <hr class="mt-2 border-solid border-gray-400">

                        <button on:click={() => download_csv_file(currentSpectrum)}
                                class="rounded px-4 bg-blue-600 p-3 mt-6  text-gray-800">
                            export CSV
                        </button>
                    {/if}
                </div>
            </div>
            <!--/Menu Card-->
        </div>
    </div>
</div>

