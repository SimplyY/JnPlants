<template>
    <div class="item">
        <img v-bind:src="item.plant" alt="" />
        <div class="description">
            <h4 class="title">
                {{item.title}}
            </h4>
            <p>
                {{item.distance}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',

    props: {
        item: Object
    }
}
</script>

<style media="screen">
    .item{
        width: 47%;
        display: inline-block;
        vertical-align: top;
        margin: 0.4rem 1%;
        background-color: #fff;
        border-radius: 1.5%;
    }
    .description{
        padding: 2% 4%;
        position: relative;
    }
    img {
        max-width: 100%;
    }
    p{
        display: inline-block;
        font-size: .8rem;
        color: #898888;
        position: absolute;
        right: .5rem;
        top: .3rem;
    }
</style>
