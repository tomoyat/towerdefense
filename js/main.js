
enchant();


window.onload = function(){

    var game = new Core(320, 320);

    game.fps = 30;
    game.preload("images/chara1.png");
    game.preload("images/chara6.png");
    game.preload("images/chara5.png");
    


    game.onload = function(){
        var scene = new Scene();
        game.pushScene(scene);
        var monsters = new MonstersManager(scene);
        slime = new Monster(game,scene);
        hero  = new Hero(game,scene,monsters);
        monsters.push(slime);
    };

    /**
     * Core#start
     * ゲームを開始する。この関数を実行するまで、ゲームは待機状態となる。
     * 代わりに Core#debug を使うことで、デバッグモードで起動することができる。
     * Core#pause(); で一時停止し、 Core#resume(); で再開することができる。
     */
    game.start();
};
