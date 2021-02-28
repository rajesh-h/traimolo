<template>
    <ion-buttons slot="start"> 
                    <ion-back-button :default-href="defaultBackLink" style="color:white; padding-left:10px; padding-top:10px;" text="" :icon="back_button"></ion-back-button>
                </ion-buttons>
</template>
<script>
import {arrowBack} from 'ionicons/icons';
import { IonButtons, IonBackButton} from '@ionic/vue'
export default {
    props:['defaultBackLink'],
 components: {
     IonButtons, IonBackButton
    },

    data() {
    return {
        back_button: arrowBack
      };
  },
}
</script>