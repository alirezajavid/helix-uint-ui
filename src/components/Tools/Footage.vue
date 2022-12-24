<template>
    <div class="md-layout">
        <table width="100%" border="0">
            <tr>
                <td width="50%">

                    <div class="md-layout-item md-small-size-50 md-size-50">
                        <md-button  :disabled="in_progress" 
                            class="btn btn-warning mr-1 mb-1 jj"
                            @click="showDialog = true">
                            <md-icon v-show="!in_progress">emergency_recording</md-icon>
                            <md-progress-spinner class="md-accent" v-show="in_progress" :md-diameter="15" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
                            Create Footage
                        </md-button>
                    </div>

                    <md-table md-card>
                        <md-table-row style="height:42px">
                            <md-table-head><b>Footage</b></md-table-head>
                            <md-table-head><b>Play</b></md-table-head>
                        </md-table-row>
                        <md-table-row v-for="footage in footages" :key="footage.name">
                            <md-table-cell md-label="Footage">{{ footage.name }} </md-table-cell>
                            <md-table-cell md-label="Play">
                                <span @click=" show( footage.href, footage.name ) " style="cursor: pointer">
                                    <md-icon>video_camera_front</md-icon>
                                </span>
                            </md-table-cell>
                        </md-table-row>
                    </md-table>


                </td>
                <td width="50%">
                    <div class="player">
                        <h5> <b>Time:</b> {{datetime}}</h5>
                        <video width="100%" :src="src" controls>
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
                            <md-button 
                            class="btn btn-warning mr-1 mb-1 jj"
                                @click="capture"
                            >
                                <md-progress-spinner class="md-accent" v-show="in_progress" :md-diameter="15" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
                                <md-icon v-show="!in_progress">emergency_recording</md-icon>
                                Create Footage
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
            showDialog: false,
            in_progress: false,
            datetime: ''
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
                    this.in_progress = true;
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
                    this.$notification.error(r.data.message, {  timer: 10 });
                    
                        
                    if (r.data.state == 'end') {
                        this.src = r.data.result;
                        this.fetch_footages()
                    }
                    this.in_progress = r.data.state == 'pending'
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
        show (href, filename)
        {
            this.datetime=filename
            this.src = href
        }
    },
    created ()
    {
        this.fetch_footages()
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