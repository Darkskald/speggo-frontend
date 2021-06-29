<script>
    import {download_csv_file} from "./js_scripts/export_csv";
    import {getContext, onMount, setContext} from "svelte";
    import {fetchSfg, plotSfg, visualizeSfg} from "./js_scripts/plotting";

    let spectrum = "";
    let rawToggle = 1;

    $: if (spectrum !== "") {
        plotSfg(spectrum, 'plotter', rawToggle);
    }


    onMount(async () => {
            const spec = await fetchSfg();
            spectrum = spec;
            plotSfg(spec, 'plotter', rawToggle)
        }
    )
</script>

<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <div class="flex flex-row flex-wrap flex-grow mt-2">
        <div class="w-full md:w-2/3 p-3">
            <!--Graph Card-->
            <div class="bg-gray-900 border border-gray-800 rounded shadow">
                <div class="border-b border-gray-800 p-3">
                    <h5 class="font-bold uppercase text-gray-600" id="headline">{spectrum.name}</h5>
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
                <div class="mb-1 p-3">
                    <label>
                        <input type=radio bind:group={rawToggle} value={0}>
                        raw
                    </label>

                    <label>
                        <input type=radio bind:group={rawToggle} value={1}>
                        normalized
                    </label>

                    <button on:click={() => download_csv_file(spectrum)} class="rounded px-4 bg-blue-800 p-3 mt-2">
                        Export CSV
                    </button>
                </div>
            </div>
            <!--/GMenu Card-->
        </div>
    </div>
</div>

