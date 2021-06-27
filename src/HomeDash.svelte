<script>
    import InfoCards from "./InfoCards.svelte";
    import GraphCard from "./GraphCard.svelte";
</script>
<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">

    <!--Console Content-->

    <InfoCards/>
    <!--Divider-->
    <hr class="border-b-2 border-gray-600 my-8 mx-4">
    <div class="flex flex-row flex-wrap flex-grow mt-2" id="card_container">
        <GraphCard/>
    </div>


    <!--/ Console Content-->
</div>