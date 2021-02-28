<template>
    <ion-page>
        <ion-split-pane content-id="main">
             <!--  the side menu  -->
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-menu>

 <ion-content fullscreen id="main">
            <slot />
        </ion-content>
        </ion-split-pane>
    </ion-page>
</template>
<script>
import {IonPage, 
IonSplitPane,
 IonHeader, 
 IonToolbar, 
 IonTitle, 
 IonContent, 
 IonMenu
// IonBackButton,
// IonButtons,
// IonIcon

} from '@ionic/vue'
export default {
    props:['pageTitle','defaultBackLink'],
    components: {
        IonPage, 
        IonSplitPane,
         IonHeader, 
         IonToolbar,
         IonTitle, 
        IonContent,
        IonMenu
        // IonBackButton,
        // IonButtons,
        // IonIcon
        
    }
    
}

</script>