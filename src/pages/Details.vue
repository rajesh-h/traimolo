<template>
    <base-layout :page-title="loadedName ? loadedName.name : 'loading..'" default-back-link="/landing">
            <h2 v-if="!loadedName">Could not find data</h2>
                <h2 v-else> This is Detail Layout</h2>
       </base-layout>
</template>

<script>

export default {
    data() {
        return {
            nameId : this.$route.params.id
        }
    },
    computed:{
        loadedName() {
        return this.$store.getters.name(this.nameId)
        }
    },
    // watch: {
    //     '$route' (currentRoute){
    //         this.nameId = currentRoute.params.id;
    //     }
    // }
    
}
</script>