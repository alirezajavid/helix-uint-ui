<template>
    <div class="md-layout">
        <table>
            <tr>
                <td>
                    <div class="md-layout-item md-small-size-50 md-size-50">
                        <md-button 
                            @click="capture" 
                            :disabled="in_progress" 
                            class="md-warning">
                            <md-icon v-show="!in_progress">camera</md-icon>
                            <md-progress-spinner class="md-accent" v-show="in_progress" :md-diameter="15" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
                            Create Snapshot
                        </md-button>
                    </div>
                </td>
                <td>
                    <img :src="src" v-if="src != ''"/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            token: '',
            src : '',
            in_progress: false
        }
    },
    methods: {
        capture() {
            axios
                .get('/api/capture_snapshot')
                .then( r => {
                    if (r.data.success == true)
                    {
                        this.token = r.data.token
                        this.in_progress = true;
                        setTimeout(this.pooler, 3000)
                    }
                })
        },
        pooler() {
            axios
                .get('/api/snapshot_inquiry?token=' + this.token)
                .then( r => {
                    if (r.data.state == 'pending')
                        setTimeout(this.pooler, 3000)
                    if (r.data.state == 'failed')
                        this.$notification.error(r.data.message, {  timer: 10 });
                    if (r.data.state == 'end')
                        this.src = r.data.result
                    this.in_progress = r.data.state == 'pending'
                })
        }
    }
}
</script>
