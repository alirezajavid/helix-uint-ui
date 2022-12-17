<template>
    
    <div class="md-layout">
        
        <table width="100%" border="0">
            <tr>
                <td width="50%">

                    <div class="md-layout-item md-small-size-50 md-size-50">
                        <md-button class="md-primary md-raised" @click="showDialog = true">Create Footage</md-button>
                    </div>

                    <md-table md-card>
                        <md-table-row>
                            <md-table-head>Footage</md-table-head>
                            <md-table-head>URL</md-table-head>
                        </md-table-row>
                        <md-table-row v-for="footage in footages" :key="footage.name">
                            <md-table-cell md-label="Footage">{{ footage.name }} </md-table-cell>
                            <md-table-cell md-label="URL">
                                <span @click=" show( footage.href ) " style="cursor: pointer">
                                    <md-icon>video_camera_front</md-icon>
                                </span>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>


                </td>
                <td width="50%">
                    <div class="player">
                        <video width="100%" :src="src">
                        </video>
                    </div>
                </td>
            </tr>

        </table>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Create Footage</md-dialog-title>
        
            <md-dialog-actions>
                <table>
                    <tr>
                        <td>
                            <md-datepicker v-model=" date ">
                                <label>Select date</label>
                            </md-datepicker>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <md-field>
                                <md-icon>access_time</md-icon>
                                <label>Time</label>
                                <md-input pattern="[0-9]{2}:[0-9]{2}" v-model=" time "></md-input>
                            </md-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <md-field>
                                <md-icon>timer</md-icon>
                                <label>Length (seconds)</label>
                                <md-input v-model="length" min="1" max="1800" type="number"></md-input>
                            </md-field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <md-button class="md-primary" @click=" capture ">
                                <md-icon>camera</md-icon>Create Footage
                            </md-button>
                        </td>
                    </tr>
                </table>
        
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data () {
        return {
            time:'12:00:00',
            date: new Date(),
            length: 20,
            src: '',
            footages: [],
            showDialog: false

        }
    },
    watch: {
   
    },
    computed: {
        from ()
        {
            return this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate() +  ' ' + this.time
        },
        player () {
            return this.$refs.videoPlayer.player;
        },
    },
    methods: {
        capture ()
        {
            axios
            .get('/api/footage_demand?start=' + this.from + '&len=' + this.length)
            .then( r => {
                if (r.data.success == true)
                {
                    this.token = r.data.token
                    setTimeout(this.pooler, 5000)
                }
                this.showDialog = false
            })
        },
        pooler() {
            axios
                .get('/api/footage_inquiry?token=' + this.token)
                .then(r =>
                {
                    if (r.data.state == 'pending')
                        setTimeout(this.pooler, 5000)
                    if (r.data.state == 'failed')
                        this.$notify({
                            message:r.data.result,
                            icon: "add_alert",
                            horizontalAlign: "center",
                            verticalAlign: "top",
                            type: "danger",
                            timeout: 7000,
                        });
                    if (r.data.state == 'end') {
                        this.src = r.data.result;
                        this.fetch_footages()
                    }
                })
        },
        fetch_footages ()
        {
            axios
                .get('/api/footages')
                .then(r =>
                {
                    if (r.data.success == true)
                        this.footages = r.data.footages
                })
        },
        show (href)
        {
            this.src = href
        }
    },
    created ()
    {
        this.fetch_footages()
    }
}
</script>