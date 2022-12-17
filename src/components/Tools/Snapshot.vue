<template>
    <div class="md-layout">
        <table>
            <tr>
                <td>
                    <div class="md-layout-item md-small-size-50 md-size-50">
                        <md-button @click="capture">
                            <md-icon>camera</md-icon>
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
            src : ''
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
                        setTimeout(this.pooler, 5000)
                    }
                })
        },
        pooler() {
            axios
                .get('/api/snapshot_inquiry?token=' + this.token)
                .then( r => {
                    if (r.data.state == 'pending')
                        setTimeout(this.pooler, 5000)
                    if (r.data.state == 'failed')
                        alert(r.data.result)
                    if (r.data.state == 'end')
                        this.src = r.data.result
                })
        }
    }
}
</script>