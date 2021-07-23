<script>
    import {SfgSpectrum} from "./js_scripts/spectra";

    export let plot_callback;
    let spec_types = ["VSFG", "LT", "IR", "Raman", "UV"];
    let selected = "VSFG";

    let isSelected = false;
    let spec_buffer = [];

    const clear = () => {
        isSelected = false;
        document.getElementById("upload").value = "";
        plot_callback();
        spec_buffer = [];
    };
    const upload = () => {
        isSelected = true;
        readSfgFile();
    };
    const load = {};

    function readSfgFile() {
        let promises = [];
        const fileList = document.getElementById('upload').files;


        for (let file of fileList) {
            let filePromise = new Promise(resolve => {
                let fileName = file.name;
                let lastMod = file.lastModified;
                let reader = new FileReader();
                reader.readAsText(file);
                reader.onload = () => resolve(processSfgInput(reader.result, fileName));
            });
            promises.push(filePromise);
        }
        Promise.all(promises).then(sfgs => {
            // fileContents will be an array containing
            // the contents of the files, perform the
            // character replacements and other transformations
            // here as needed
            spec_buffer = sfgs
            plot_callback(sfgs)
        });
        /*
        const numFiles = fileList.length;
        for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
            const file = fileList[i];
            let fileName = file.name;
            let lastMod = file.lastModified;

            let fr = new FileReader();
            fr.onload = function () {
                processSfgInput(fr.result, fileName)
            }
            fr.readAsText(file, 'UTF-8');
        }*/
    }

    function processSfgInput(input, name, delimiter = '\t') {
        let sfg_buffer = {name: name, wavenumbers: [], sfg_intensity: [], ir: [], vis: []}
        let lines = input.split('\n');
        for (let i = 0, numLines = lines.length; i < numLines; i++) {
            let line = lines[i];
            let entries = line.split(delimiter)
            if (entries.length === 5) {
                sfg_buffer.wavenumbers.push(Number(entries[0]));
                sfg_buffer.sfg_intensity.push(Number(entries[1]));
                sfg_buffer.vis.push(Number(entries[3]));
                sfg_buffer.ir.push(Number(entries[4]));
            }
        }
        let temp = new SfgSpectrum().fromJson(sfg_buffer);
        console.log(JSON.stringify(temp))
        return temp;
    }


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
            {#if !isSelected}
                <div class="w-full">
                    <button on:click={upload}
                            class="rounded px-4 bg-blue-600 p-3 mt-6 text-gray-800">
                        Upload
                    </button>
                </div>
            {:else }
                <div class="w-full">
                    <button on:click={() => {}}
                            class="rounded px-4 bg-green-600 p-3 mt-6 text-gray-800 w-1/4">
                        Submit
                    </button>

                    <button on:click={clear}
                            class="rounded px-4 bg-red-800 p-3 mt-6 text-gray-800 w-1/4">
                        Clear
                    </button>

                </div>
            {/if}
        </div>
    </div>
    <!--/Menu Card-->
</div>
