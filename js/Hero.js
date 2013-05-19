
var Hero = enchant.Class.create( enchant.Sprite, {
    initialize: function(game,scene,monsters) {
        enchant.Sprite.call(this, 32, 32);
        this.x = 32; 
        this.y = 100; 
        
        this.HP = 10;
        this.STR = 1;

        this.image = game.assets['images/chara5.png'];
        this.frame = 27;

        this.attackFrame = 33;
        this.attackFrameLen = 3;
        this.attackFrameSpeed = 15;


        this.touchSubX = 0;
        this.touchSubY = 0;
        
        this.monsters = monsters;
        
        this.attackRate = 15;
        this.attackWait = 0;
        
        this.state = 'wait';
        this.motion = 'wait';
        this.motionflg = 0;
        this.motionframe = 0;

        this.on('enterframe', function() {
            this.state = 'wait';
            for (var i = 0; i < this.monsters.getLen(); i++){
                if (this.within(this.monsters.get(i)) ){
                    this.monsters.get(i).setState("battle");
                    if (this.age % this.attackRate == 0){
                        this.monsters.get(i).receiveDamage(this.STR);
                        this.motion = 'attack';
                        this.motionflg = 2;
                    }
                    this.state = 'battle';
                }
            }
            this.doMotion();
        });
        this.on(enchant.Event.TOUCH_START, function(e) {
            this.touchSubX = this.x - e.x;
            this.touchSubY = this.y - e.y;
        });
        this.on(enchant.Event.TOUCH_MOVE, function(e) {
            this.x = e.x + this.touchSubX;
            this.y = e.y + this.touchSubY;
        });
        scene.addChild(this);
    },
    move: function() {
    },
    doMotion: function() {
        if (this.motionflg == 0 ){
            this.frame = 27;
            return;
        }
        if (this.motionflg == 2) {
            this.motionflg = 1;
            this.motionframe = 0;
        } else if (this.motionflg == 1){
            if(this.motionframe == 15) {
                this.motionframe = 0;
                this.motionflg = 0;
            }
        } else {
        }
        if( this.motionframe < 5 ){
            this.frame = this.attackFrame;
        } else if (this.motionframe < 10){
            this.frame = this.attackFrame+1;
        } else {
            this.frame = this.attackFrame+2;
        }
        if(this.motionflg) {
            this.motionframe++;
        }
    },
} );