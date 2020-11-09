<template>
    <div class="map-container">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" :events="events" :mapStyle="mapStyle" :plugin="plugin">
        <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker"></el-amap-marker>
      </el-amap>
      <div class="toolbar">当前地址: {{ address }}</div>
    </div>
</template>
<script>

export default {
  data() {
    let self = this;
    return{
      zoom: 18,
      center: [113.941003, 22.52446],
      mapStyle:'dark',
      address: '',
      markers: [
         [113.941003, 22.52446]
      ],
      searchOption: {
        city: '深圳',
        citylimit: true
      },
      plugin: [{
        pName: 'MapType',
        defaultType: 0, 
        events: {
          init(instance) {
            // console.log(instance);
          }
        }
      },{
        pName: 'ToolBar',
        position: 'RB',
        events: {
          init(instance) {
            // console.log(instance);
          }
        }
      }],
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          // self.lng = lng;
          // self.lat = lat;
          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
          });        
          geocoder.getAddress([lng ,lat], function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });        
        }
      },
      lng: 0,
      lat: 0
    }
  },
  methods: {
    // 位置搜索
    onSearchResult(pois) {
      console.log(pois,'搜索结果');
      this.markers = [[pois[0].lng,pois[0].lat]];
      this.center = [pois[0].lng,pois[0].lat];
      this.address = pois[0].name;
    }
  },
}
</script>
<style lang="scss" scoped>
  .map-container{
    height: 100%;
    position: relative;
    .search-box {
      position: absolute;
      top: 25px;
      left: 20px;
    }
    .toolbar{
      background: #fff;
      line-height: 50px;
      position: absolute;
      bottom: 25px;
      left: 20px;
      padding: 0 20px;
      border-radius: 2px 3px 3px 2px;
    }
  }
</style>