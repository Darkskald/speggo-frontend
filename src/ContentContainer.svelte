<script>
    import GraphCard from "./GraphCard.svelte";
    import AnalysisContainer from "./AnalysisContainer.svelte";
    import InfoCards from "./InfoCards.svelte";
    import HomeDash from "./HomeDash.svelte";
    import SpectraUpload from "./UploadDialog.svelte";
    import DbManage from "./DbManage.svelte";

    export let state;
</script><!--Container-->
<div class="container w-full mx-auto pt-20">

    {#if state === "analysis"}
        <AnalysisContainer/>
    {:else if state === "home"}
        <HomeDash/>
    {:else if state === "db"}
        <DbManage/>
    {/if}

</div>
<!--/container-->