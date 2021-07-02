<script>
    import Tailwindcss from './Tailwindcss.svelte';

    export let name;

    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import ContentContainer from "./ContentContainer.svelte";
    import {currentSpecID} from "./stores";


</script>

<Tailwindcss/>
<main class="bg-black-alt font-sans leading-normal tracking-normal">
    <Header/>
    <ContentContainer/>
    <Footer/>
</main>

<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
</svelte:head>


<style>

    :global(body) {
        /* this will apply to <body> */
        margin: 0;
        padding: 0;
    }

    :global(button) {
        font-family: inherit;
        font-size: inherit;
        -webkit-padding: 0.4em 0;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 0px solid #ccc;
        border-radius: 0px;

    }

    :global(a:hover) {
        text-decoration: none;
    }


    .bg-black-alt {
        background: #191919;
    }

    .text-black-alt {
        color: #191919;
    }

    .border-black-alt {
        border-color: #191919;
    }

    /*
        main {
            text-align: center;
            padding: 1em;
            max-width: 240px;
            margin: 0 auto;
        }

        h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }*/

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
