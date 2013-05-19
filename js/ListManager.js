
var ListManager = enchant.Class.create( enchant.Node, {
    initialize: function(scene) {
        enchant.Node.call(this);
        this.list = new Array();
        scene.addChild(this);
    },
    push: function(data) {
        this.list.push(data);
    },
    getLen: function() {
        return this.list.length;
    },
    get: function(idx) {
        return this.list[idx];
    },
    delete: function(idx) {
        this.list.splice(idx,1);
    }
} );