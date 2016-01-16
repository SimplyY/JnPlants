<template>
    <div class="list">
        <item v-for="item in items"
        :item="item">
        </item>
    </div>

</template>

<script>
import Item from './Item.vue'

const apiUrl = 'http://121.40.224.83:8080/JnPlant/api';
const sceneUrl = apiUrl + '/scene/';
const plantUrl = apiUrl + '/plant/';

export default {
    components: {
        Item
    },

    data() {
        return {
            items:[]
        }
    },

    asyncData: function(resolve, reject){
        let listData = [];
        let count = {
            plant: false,
            scene: false,
            isCounted: function(){
                return count.plant && count.scene;
            }
        };

        $.get(plantUrl, function (data) {
            count.plant = true;
            if(typeof data === "string"){
                data = JSON.parse(data);
            }
            data.forEach(function(plant){
                plant.title = plant.name;
                plant.imgUrl = plant.imgUrl.replace("400x", "200x");
            })

            listData = [...listData, ...data];
            if(count.isCounted()){
                resolve({items: listData});
            }
        });

        $.get(sceneUrl, function (data) {
            count.scene = true;
            if(typeof data === "string"){
                data = JSON.parse(data);
            }
            data.forEach(function(scene){
                scene.imgUrl = scene.imgUrl.replace("400x", "200x");
            })
            listData = [...listData, ...data];
            if(count.isCounted()){
                resolve({items: listData});
            }
        });
    }
}

</script>
<style media="screen">
    .list{
        width: 100%;
        margin: 0 1%;
    }
</style>
