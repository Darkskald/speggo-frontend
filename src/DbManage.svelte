<script>
    import UploadDialog from "./UploadDialog.svelte";
    import {Plotter} from "./js_scripts/Plotter";

    let plotter = new Plotter([], "plotter")

    function plotPreview(sfg_buffer = null) {
        if (sfg_buffer === null) {
            plotter.purge()
        } else {
            plotter.data = sfg_buffer.map(it => it.toTrace("sfg_intensity", true));
            plotter.layout["legend"] = {"orientation": "h", "y": -0.2}
            plotter.plot();
        }
    }
</script>
<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <div class="flex flex-row flex-wrap flex-grow mt-2">


        <div class="w-full md:w-2/3 p-3">
            <!--Graph Card-->
            <div class="bg-gray-900 border border-gray-800 rounded shadow">
                <div class="border-b border-gray-800 p-3">
                    <h5 class="font-bold uppercase text-gray-600" id="headline">Recent uploads: Preview</h5>
                </div>
                <div class="p-5">
                    <div class="" id="plotter"></div>
                </div>
            </div>
            <!--/Graph Card-->
        </div>
        <UploadDialog plot_callback={plotPreview}/>


    </div>
</div>