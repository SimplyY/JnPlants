<template>
    <div class="list">
        <item v-for="item in items"
        :item="item">
        </item>
    </div>
    <div class="loader">

    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components: {
        Item
    },

    data() {
        return {
            items: [{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'},{plant: 'http://7xkpdt.com1.z0.glb.clouddn.com/11.jpg?imageMogr2/thumbnail/400x/strip', title: '腊梅', distance: '1.5km'}]
        }
    }
}
</script>
<style media="screen">
    .list{
        width: 100%;
        margin: 0 1%;
    }
</style>
