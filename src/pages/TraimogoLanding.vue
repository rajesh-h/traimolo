<template>
    <base-layout page-title="Traimolo" default-back-link="/landing">
           <div class="landing-container" :style="{ backgroundImage: 'url(' + require('@/assets/traimogo_landing_2.png') + ')'}">
                   <div style="padding-top:200px; padding-bottom:20px">
                   <ion-img class="landing-image" border-radius="50%" :src="traimogo_logo" alt="traimolo" style="height:auto;width:250px;"></ion-img>
                    </div>
                    
                    <p class="text-center landing-text" >Send documents/small packages within the city with our oGoRiders</p>
                    <div style="padding-bottom:100px;">
                    <ion-button router-link="/traimogo" shape="round" fill="outline" class="landing-button">Enter</ion-button>
                </div>
                </div>
       </base-layout>
</template>

<script>
import {IonImg, IonButton} from '@ionic/vue'
import {computed } from 'vue'
export default {
    components: {
        IonImg ,
        IonButton   
    },
   computed:{
       names() {
          return this.$store.getters.names
       }
   },
     setup() {
    const traimolo_landing = computed(() => require('../assets/traimolo_landing.png'))
    const traimogo_landing = computed(() => require('../assets/traimogo_landing.png'))
    const traimolo_logo = computed(() => require('../assets/traimolo_logo.png'))
    const traimogo_logo = computed(() => require('../assets/traimogo_logo.png'))
    return {
      traimolo_landing, traimogo_landing, traimolo_logo, traimogo_logo
    }
  }
    
}
</script>
<style>
.landing-container{
    position: relative;
    text-align: center;
    background-repeat: no-repeat;
  

}

.landing-image{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
.landing-text{
    padding-left: 50px;
    padding-right: 50px;
    left: 50%;
    font-size: 12px;
    padding-bottom: 20px;
    color:white;
}
.landing-button{
    
    --border-color:white;
    color:white;
}
</style>