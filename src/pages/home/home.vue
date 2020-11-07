<template>
    <div class="map-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" :events="events">
      </el-amap>
        <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
      </div>
    </div>
</template>
<script>

export default {
  data() {
    let self = this;
    return{
      zoom: 12,
      center: [114.07, 22.33],
      address: '',
      events: {
        click(e) {
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;

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
}
</script>
<style lang="scss" scoped>
  .map-container{
    height: 100%;
  }
</style>