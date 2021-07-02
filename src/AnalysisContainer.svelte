<script>
    import {download_csv_file} from "./js_scripts/export_csv";
    import {SfgSpectrum} from "./js_scripts/spectra";
    import {Plotter} from "./js_scripts/Plotter";
    import {currentSpecID} from "./stores";
    import {BackendConnector} from "./js_scripts/BackendConnector";

    let multiModeToggle = false;
    let rawToggle = 1;
    let plotter = new Plotter([], "plotter")
    let conn = new BackendConnector()
    let currentSpectrum = "";
    let selectors = []

    $: alert(multiModeToggle)

    //$: if (spectrum !== "") {
    // plotSfg(spectrum, 'plotter', rawToggle);

    function makePlot(currentSpecID) {
        let url = "http://localhost:8080/sfg" + "/" + currentSpecID

        fetch(url).then(
            result => result.json()
        ).then(
            data => plot(data, rawToggle)
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

                    <div class="flex flex-row w-full">
                        <label class="switch p-3 mb-2">
                            <input type="checkbox" bind:checked={multiModeToggle}>
                            <span class="slider round"></span>
                        </label>
                        <div class="px-3">toggle mutli spec mode</div>
                    </div>
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
                            Export CSV
                        </button>
                    {/if}
                </div>
            </div>
            <!--/Menu Card-->
        </div>
    </div>
</div>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #0d6cb6;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #0d6cb6;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 30px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>