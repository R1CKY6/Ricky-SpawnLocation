const app = new Vue({
    el: '#app',

    data: {

        nomeRisorsa : GetParentResourceName(), 
        
        spawnSelected : false,

        point : []
    },

    methods: {
        setPoint(point) {
            for(const[k,v] of Object.entries(this.point)) {
                if(v.label == point.label) {
                    return v.position
                }
            }
        },

        updateSpawnSelected(point) {
            this.spawnSelected = point
        },

        updateImage(image) {
            return {
                backgroundImage : `url('./img/${image}')`
            }
        },

        spawn() {
            if(this.spawnSelected) {
                $.post(`https://${this.nomeRisorsa}/spawn`, JSON.stringify({point: this.spawnSelected}))
                this.spawnSelected = false
                $("#app").fadeOut(200)
            }
        }
    }

});


window.addEventListener('message', function(event) {
    var data = event.data;
    if (data.type === "OPEN") {
        $("#app").fadeIn(200)
        app.point = data.location
    }
})