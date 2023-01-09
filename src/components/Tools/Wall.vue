<template>
    <div class="md-layout md-gutter" >
        <div v-for="snapshot in snapshots.slice(0,20)" 
            :key="snapshot.name" 
            class="md-layout-item 
                   md-xlarge-size-15 
                   md-large-size-20 
                   md-medium-size-20 
                   md-small-size-50 
                   md-xsmall-size-100">

            <md-card>
                <md-card-area>
                    <md-card-media>
                        <img :src="snapshot.href" />
                    </md-card-media>
                    
                        <div class=""><small>{{ snapshot.name }}</small></div>
                    
                </md-card-area>
            </md-card>

            
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            snapshots: []
        }
    },
    methods: {
        get_snapshot () {
            axios
                .get('/api/snapshots')
                .then(r => {
                    console.log(r.data)
                    if (r.data.success == true) {
                        this.snapshots = r.data.snapshots
                    }
                    if (r.data.success == false) {
                        this.$notification.error(r.data.message, { timer: 10 });
                    }
                })
        }
    },
    created ()
    {
        this.get_snapshot()
    }
    
}
</script>

<style scoped>
.jj {
    color: #ffffff !important;
  background-color: #00bcd4 !important;
  box-shadow: 0 2px 2px 0 rgba(0, 188, 212, 0.14),
    0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12);
  border: none;
}
</style>