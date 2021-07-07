<script>
    import UploadDialog from "./UploadDialog.svelte";
</script>
<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <div class="flex flex-row flex-wrap flex-grow mt-2">


        <div class="w-full md:w-2/3 p-3">
            <!--Graph Card-->
            <div class="bg-gray-900 border border-gray-800 rounded shadow">
                <div class="border-b border-gray-800 p-3">
                    <h5 class="font-bold uppercase text-gray-600" id="headline">Recent uploads</h5>
                </div>
                <div class="p-5">
                    <div class="" id="plotter"></div>
                </div>
            </div>
            <!--/Graph Card-->
        </div>
        <UploadDialog/>


    </div>
</div>