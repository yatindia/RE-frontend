<script context="module">

    export function load({pramas}){

        return {
            props : {
                id : pramas.id
            }
        }
    }

</script>

<script>
    export let id
</script>


<h1>{id}</h1>