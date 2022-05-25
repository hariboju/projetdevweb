<template>
        <footer>
            <div class="footer_text">Site réalisé par Julien Calabrese</div>
                <div class="hentai">
                <a href="https://nhentai.net/">Tu cherches un bon Hentai ?</a>
                </div>
        </footer>
</template>

<script>
    export default{
        name: 'Footer',
    }
</script>

<style>

footer{
    background-color: #ffffff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    position:fixed;
    bottom:0;
    width:100%;
}
.footer_text{
    font: normal 1em 'Playfair Display SC', serif;
    text-align:center;
}

.hentai{
    font: normal 0.5em 'Playfair Display SC', serif;
    text-align:center;
}


</style>