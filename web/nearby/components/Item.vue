<template>
    <div class="item" v-on:click="enterNewActivity">
        <img v-bind:src="item.imgUrl" alt="" />
        <div class="description">
            <h4 class="title">
                {{item.title}}
            </h4>
            <p>
                 {{item.distance}}米
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',

    props: {
        item: Object
    },

    methods: {
        enterNewActivity: function () {
            let item = this.$data.item;
            if (item.name !== undefined) {
                // item is plant
                android.webToast('plant');
                android.enterPlant(item._id);
            } else {
                android.webToast('scene');
                android.enterScene(item._id)
            }
        }
    }
}
</script>

<style media="screen">
    .item{
        width: 48%;
        display: inline-block;
        vertical-align: top;
        margin: 0.4rem 1%;
        background-color: #fff;
        border-radius: 1.5%;
        font-size: 0.9rem;
    }
    .description{
        padding: 1% 4%;
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
        right: .2rem;
        top: .25rem;
    }
</style>
