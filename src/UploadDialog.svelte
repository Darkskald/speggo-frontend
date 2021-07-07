<script>
    let spec_types = ["VSFG", "LT", "IR", "Raman", "UV"];
    let selected = "VSFG";

    const clear = {};
    const submit = {};
    const load = {};


</script>
<div class="w-full md:w-1/3 px-1 py-3">
    <!--Menu Card-->
    <div class="bg-gray-900 border border-gray-800 rounded shadow">
        <div class="border-b border-gray-800 p-3">
            <h5 class="font-bold uppercase text-gray-600">Select files and type to upload</h5>

        </div>

        <div class="w-full p-5">
            <input type="file" id="upload" multiple class="text-gray-300">

            <select bind:value={selected} on:change={() => {}} class="pl-4">
                {#each spec_types as type}
                    <option value={type}>
                        {type}
                    </option>
                {/each}
            </select>
        </div>


        <hr class="mt-2 border-solid border-gray-400">
        <div class="mb-1 p-3 text-gray-600">

            <div class="w-full">
                <button on:click={() => {}}
                        class="rounded px-4 bg-blue-600 p-3 mt-6 text-gray-800">
                    Upload
                </button>
            </div>

            <div class="w-full">
                <button on:click={() => {}}
                        class="rounded px-4 bg-green-600 p-3 mt-6 text-gray-800 w-1/4">
                    Submit
                </button>

                <button on:click={() => {}}
                        class="rounded px-4 bg-red-800 p-3 mt-6 text-gray-800 w-1/4">
                    Clear
                </button>

            </div>
        </div>
    </div>
    <!--/Menu Card-->
</div>
