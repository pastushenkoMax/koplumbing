<script>
    export let props
</script>

<div class="card">
    <img src={props.image} alt="card_img">
    <section>
        <h3>
            {props.header}
        </h3>
        <p>
            {props.text}
        </p>
    </section>
</div>

<style>

    .card{
        width: 21.25rem;
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        padding: var(--gap-big);
        /* justify-content: space-between; */
    }

    .card img{
        /* flex: 1; */
        height: 290px;
    }

    section{
        /* flex: 1; */
        padding-top: var(--gap-big);
    }

    section h3{
        padding-bottom: var(--gap-big);
        font-weight: 900;
        font-size: 1.6rem;
        letter-spacing: 0.08em;
    }

    section p {
        font-weight: 900;
        letter-spacing: 0.08em;
        color: var(--secondery-fnt-clr);
    }





</style>