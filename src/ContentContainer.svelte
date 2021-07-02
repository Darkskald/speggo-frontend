<script>
    import GraphCard from "./GraphCard.svelte";
    import AnalysisContainer from "./AnalysisContainer.svelte";
    import InfoCards from "./InfoCards.svelte";
    import HomeDash from "./HomeDash.svelte";

    export let state;
</script><!--Container-->
<div class="container w-full mx-auto pt-20">

    {#if state === "analysis"}
        <AnalysisContainer/>
    {:else if state === "home"}
        <HomeDash/>
    {/if}

</div>
<!--/container-->