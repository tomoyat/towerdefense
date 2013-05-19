
var Monster = enchant.Class.create( enchant.Sprite, {
    initialize: function(game,scene) {
        enchant.Sprite.call(this, 32, 32);
        this.x = 32; 
        this.y = 32; 
        
        this.HP = 10;
        this.STR = 1;

        this.image = game.assets['images/chara6.png'];
        this.frame = 0;
        this.state = "walk";
        scene.addChild(this);

        this.on(enchant.Event.TOUCH_START, function() {
            this.HP = 0;
        } );
        this.on('enterframe', function() {
            console.log(this.HP);
            if(this.state == "walk") {
                this.move();
            }
            if (this.HP == 0){
                scene.removeChild(this);
            }
        });
    },
    move: function() {
        this.y += 0.5;
    },
    setState: function(state) {
        this.state = state;
    },
    receiveDamage: function(damage) {
        this.HP -= damage;
    },
} );

