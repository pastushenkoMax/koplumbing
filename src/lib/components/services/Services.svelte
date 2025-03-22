<script>
    import SectionTitle from "../SectionTitle.svelte"
    import Card from "../Card.svelte"
    import heater_service from "./heater_service.svg"
    import residential_service from "./residential_service.svg"
    import construction_service from "./construction_service.svg"
    import cube_red_blue from "./cube_red_blue.svg"
    import cube_red from "./cube_red.svg"

    export let id = ""

    let title = {
        section:"Our Services",
        slogan:"Reliable Professional Affordable",
        id
    }
    let cards = 
    [
        {
            image: heater_service,
            header: "Water Heaters",
            text:`Installation Boilers, Water heaters and Furnaces. 
                Repair fireplaces, freeze breaks. 
                Winterize homes, clogged drains, freeze breaks, & fireplace`,
        },
        {
            image: residential_service,
            header: "Residential Plumbing",
            text:`Inspection and RepairLeaks, clogged drains and other plumbing issue.
                Install pipes, fixtures and appliances.`,
        },
        {
            image: construction_service,
            header: "New Construction",
            text:`Install water supply lines, sewage system, gas lines, and drainage system. 
                Follow blue prints and building plans to ensure proper installation. `,
        },
    ]
</script>

<section class="services-container">
    <SectionTitle props={title}/>
    <div class="card-container">
        {#each cards as c}
            <Card props={c}/>
        {/each}
    </div>
    <img src={cube_red_blue} class="cube blue_red" alt="cube"/>
    <img src={cube_red} class="cube red" alt="cube"/>
</section>

<style>
    .card-container{
        display: flex;
        justify-content: space-between;
        padding: calc(var(--gap-xbig) * 5) calc(var(--gap-xbig) * 2);
        background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(219, 235, 245, 0.5) 70%, #DAEAF5 90%, #DAEAF5 100%);
        box-shadow: 0 -1.25rem 1.25rem #DAEAF5;
    }
    
    .services-container{
        position: relative;
    }

    .blue_red{
        top: 76%;
        right: 0%;

    }

    .red{
        top: 82%;
        left: -2%;
    }
</style>