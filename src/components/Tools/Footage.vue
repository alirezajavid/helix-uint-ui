<template>
    
<div class="md-layout">
    
    
    <md-datepicker v-model="date">
        <label>Select date</label>
    </md-datepicker>
    
    <md-field>
        <md-icon>access_time</md-icon>
        <label>Time</label>
        <md-input pattern="[0-9]{2}:[0-9]{2}" v-model="time"></md-input>
    </md-field>

    <md-field>
        <md-icon>timer</md-icon>
        <label>Length</label>
        <md-input v-model="length"></md-input>
    </md-field>


    <div class="md-layout-item md-small-size-50 md-size-50">
      <md-button @click="capture">
        <md-icon>camera</md-icon>
        Create Footage
      </md-button>
    </div>
</div>
</template>
 <script>
 import axios from "axios";

export default {
  data () {
    return {
        time:'12:00',
        date: new Date(),
        length: 20
    }
  },
  components: {
    
  },
  computed: {
    from() {
        return this.date.toJSON().substring(0,10) + ' ' + this.time
    }
  },
  methods: {
    capture() {
            axios
            .get('/api/footage_demand?start=' + this.from + '&len=' + this.length)
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
                .get('/api/footage_inquiry?token=' + this.token)
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