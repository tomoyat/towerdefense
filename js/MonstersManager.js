var MonstersManager = enchant.Class.create( ListManager, {
    initialize: function(scene) {
        ListManager.call(this,scene);

        this.on('enterframe', function() {
            this.update();
        } );
    },
    update: function() {
        for(var i=0; i<this.getLen(); i++){
            if( this.get(i).HP <= 0 ){
                this.delete(i);
            }
        }
    },
} );