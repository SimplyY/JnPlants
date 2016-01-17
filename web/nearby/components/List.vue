<template>
    <div class="list">
        <item v-for="item in items"
        :item="item">
        </item>
    </div>

</template>

<script>
import Item from './Item.vue'
import geo from 'node-geo-distance'
import util from '../util'

const apiUrl = 'http://121.40.224.83:8080/JnPlant/api';
const sceneUrl = apiUrl + '/scene/';
const plantUrl = apiUrl + '/plant/';
const showItemAmount = 14;

let urlParams = util.getQureyParams(document.URL);
const defaultLongitude = urlParams.longitude;
const defaultLatitude = urlParams.latitude;

function sortItemList(list, longitude, latitude) {
    list.forEach(function (item, index, array) {
        if (item.longitude && item.latitude) {
            let coord1 = {
                longitude: Number.parseFloat(longitude),
                latitude: Number.parseFloat(latitude)
            };
            let coord2 = {
                longitude: Number.parseFloat(item.longitude),
                latitude: Number.parseFloat(item.latitude)
            };

            item.distance = Math.floor(geo.haversineSync(coord1, coord2));
        } else {
            array.splice(index, 1);
        }
    });
    list.sort((a, b) => a.distance - b.distance);
    return list;
}


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
            data.forEach(function(plant, index, array){
                if (plant.hasChecked === false) {
                    array.splice(index, 1)
                }
                plant.title = plant.name;
                plant.imgUrl = plant.imgUrl.replace("400x", "200x");
            })

            listData = [...listData, ...data];

            if(count.isCounted()){
                let list = sortItemList(listData, defaultLongitude, defaultLatitude);
                list = list.slice(0, showItemAmount);
                resolve({items: list});
            }
        });

        $.get(sceneUrl, function (data) {
            count.scene = true;
            if(typeof data === "string"){
                data = JSON.parse(data);
            }
            data.forEach(function(scene, index, array){
                if (scene.hasChecked === false) {
                    array.splice(index, 1)
                }
                scene.imgUrl = scene.imgUrl.replace("400x", "200x");
            })

            listData = [...listData, ...data];
            if(count.isCounted()){
                let list = sortItemList(listData, defaultLongitude, defaultLatitude);
                list = list.slice(0, showItemAmount);
                resolve({items: list});
            }
        });

        let cycleTime = 100;
        setTimeout(function () {
            if (android === undefined) {
                return;
            }

            if (android.getCurrentLongitude() !== ""){
                let longitude = android.getCurrentLongitude();
                let latitude = android.getCurrentLatitude();
                android.webToast('定位成功,经纬度为：' + longitude + ',' + latitude);

                let list = sortItemList(listData, defaultLongitude, defaultLatitude);
                list = list.slice(0, showItemAmount);
                resolve({items: list})
            } else {
                setTimeout(arguments.callee, cycleTime);
            }
        }, cycleTime);
    }
}

</script>
<style media="screen">
    .list{
        width: 100%;
        margin: 0 1%;
    }
</style>
