var clamp = function(x, min, max) {
    return x < min ? min : (x > max ? max : x);
};

var Q = Quintus()
    .include("Sprites, Anim, Input, Touch, Scenes, UI")
    .setup({
        width: 800,
        height: 480
    })
    .touch();

Q.input.touchControls({
    controls: [
        ['left', '<'],
        ['right', '>'],
        [],
        [],
        [],
        [],
        ['fire', 'a']
    ]
});

Q.controls();

Q.Sprite.extend("Player", {
    init: function(p) {
        this._super(p, {
            sprite: "boy",
            sheet: "boy",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            speed: 10
        });
        var count = 0;
        
        this.on("hit.sprite", function(col) {
           
            if (col.obj.isA("Shot1") && ((col.obj.p.type & Q.SPRITE_ENEMY) == Q.SPRITE_ENEMY)) {
                Q.stage().insert(new Q.Plus({ x: col.obj.p.x, y: col.obj.p.y - 50, speed: 200}));
                col.obj.destroy();
                count++;
                 var labelis = ""+count+""
                Q.stageScene("score", 1, {
                    label: labelis
                });
            }
            if (col.obj.isA("Shot") && ((col.obj.p.type & Q.SPRITE_FRIENDLY) == Q.SPRITE_FRIENDLY)) {
                Q.stage().insert(new Q.Minus({ x: col.obj.p.x, y: col.obj.p.y - 50, speed: 200}));
                col.obj.destroy();
                count--;
                 var labelneg = ""+count+""
                Q.stageScene("score", 1, {
                    label: labelneg
                });
            }
           

            if (count === 5) {
                this.destroy();
                col.obj.destroy();
                Q.stageScene("endGame", 1, {
                    label: "CodeBase:https://github.com/tanjagadde/Fun-Game"
                });
            }

             if (count === -5) {
                this.destroy();
                col.obj.destroy();
                Q.stageScene("endGame", 1, {
                    label: "You Lost!!"
                });
            }

        });

    },
    step: function(dt) {
        if (Q.inputs['left'])
            this.p.x -= this.p.speed;
        if (Q.inputs['right'])
            this.p.x += this.p.speed;

        this.p.x = clamp(this.p.x, 0 + (this.p.w / 2), Q.el.width - (this.p.w / 2));

        this.stage.collide(this);
    }
});


Q.Sprite.extend("Plus", {
     init: function (p) {
        this._super(p, {
            sprite: "plus",
            sheet: "plus",
            speed: 200
        });
    },
    step: function (dt) {
        this.p.y -= this.p.speed * dt;
        
        if (this.p.y > Q.el.height || this.p.y < 0) {
            this.destroy();
        }
    }
});

Q.Sprite.extend("Minus", {
     init: function (p) {
        this._super(p, {
            sprite: "minus",
            sheet: "minus",
            speed: 200
        });
    },
    step: function (dt) {
        this.p.y -= this.p.speed * dt;
        
        if (this.p.y > Q.el.height || this.p.y < 0) {
            this.destroy();
        }
    }
});



Q.Sprite.extend("Alien", {
    init: function(p) {
        this._super(p, {
            sprite: "computer",
            sheet: "computer",
            x: Q.el.width / 2,
            speed: 200
        });

        this.p.y = this.p.h;
        this.add("BasicAI");

    }
});

Q.Sprite.extend("Shot1", {
    init: function(p) {
        var badSpriteArray = ["aj", "react","java","js","css","html","python"];
        var choiceIndex = Math.floor(Math.random() * badSpriteArray.length);
        this._super(p, {
            sprite: badSpriteArray[choiceIndex],
            sheet: badSpriteArray[choiceIndex],
            speed: 200,
            type: Q.SPRITE_ENEMY
        });
    },
    step: function(dt) {
        this.p.y -= this.p.speed * dt;
        if (this.p.y > Q.el.height || this.p.y < 0) {
            this.destroy();
        }
    }
});

Q.Sprite.extend("Shot", {
    init: function(p) {
        var goodSpriteArray = ["aolmail", "gmail","yahoo","hotmail"];
        var choiceIndex = Math.floor(Math.random() * goodSpriteArray.length)
        this._super(p, {
            sprite: goodSpriteArray[choiceIndex],
            sheet: goodSpriteArray[choiceIndex],
            speed: 200
        });

    },
    step: function(dt) {
        this.p.y -= this.p.speed * dt;
        
        if (this.p.y > Q.el.height || this.p.y < 0) {
            this.destroy();
        }
    }
});

Q.component("BasicAI", {
    added: function() {
        this.entity.changeDirections();
        this.entity.on("step", "move");
        this.entity.on("step", "tryToFire");
        this.entity.add("Gun");
    },
    extend: {
        changeDirections: function() {
            var entity = this;
            var numberOfSeconds = Math.floor((Math.random() * 5) + 1);
            setTimeout(function() {
                entity.p.speed = -entity.p.speed;
                entity.changeDirections();
            }, numberOfSeconds * 1000);
        },
        move: function(dt) {
            var entity = this;
            entity.p.x -= entity.p.speed * dt;
            if (entity.p.x > Q.el.width - (entity.p.w / 2) || entity.p.x < 0 + (entity.p.w / 2)) {
                entity.p.speed = -entity.p.speed;
            }
        },

        tryToFire: function() {
            var entity = this;
            var player = Q("Player").first();
            if (!player)
                return;
            if (player.p.x + player.p.w > entity.p.x && player.p.x - player.p.w < entity.p.x) {
                this.fire(Q.SPRITE_FRIENDLY_ENEMY);
            }
        }
    }
});

Q.component("Gun", {
    added: function() {
        this.entity.p.shots = [];
        this.entity.p.canFire = true;
        this.entity.on("step", "handleFiring");
    },

    extend: {
        handleFiring: function(dt) {
            var entity = this;

            for (var i = entity.p.shots.length - 1; i >= 0; i--) {
                if (entity.p.shots[i].isDestroyed) {
                    entity.p.shots.splice(i, 1);
                }
            }
        },

        fire: function(type) {
            var entity = this;

            if (!entity.p.canFire)
                return;

            var shot;
            var goodshot = new Q.Shot({
                x: entity.p.x,
                y: entity.p.y + entity.p.h - 20,
                speed: -200,
                type: Q.SPRITE_DEFAULT | Q.SPRITE_FRIENDLY
            });
            var badshot = new Q.Shot1({
                x: entity.p.x,
                y: entity.p.y + entity.p.h - 20,
                speed: -200
            })
            var shots = [goodshot, badshot]
            var choiceIndex = Math.floor(Math.random() * shots.length)
            shot = Q.stage().insert(shots[choiceIndex]);

            entity.p.shots.push(shot);
            entity.p.canFire = false;
            setTimeout(function() {
                entity.p.canFire = true;
            }, 500);

        }
    }
});

Q.scene("mainLevel", function(stage) {
    Q.gravity = 0;
    stage.insert(new Q.Player());
    stage.insert(new Q.Alien());
});

Q.scene("endGame", function(stage) {
    var container = stage.insert(new Q.UI.Container({
        x: Q.width / 2,
        y: Q.height / 2,
        fill: "#FFFFFF"
    }));

    var button = container.insert(new Q.UI.Button({
        x: 0,
        y: 0,
        fill: "#CCCCCC",
        label: "Play Again"
    }));

    container.insert(new Q.UI.Text({
        x: 10,
        y: -10 - button.p.h,
        label: stage.options.label
    }));
    button.on("click", function() {
        Q.clearStages();
        Q.stageScene("mainLevel");
    });
    container.fit(30);
});


Q.scene("startGame", function(stage) {
    var container = stage.insert(new Q.UI.Container({
        x: Q.width / 2,
        y: Q.height / 2,
        fill: "#FFFFFF"
    }));

    var button = container.insert(new Q.UI.Button({
        x: 0,
        y: 0,
        fill: "#CCCCCC",
        label: "Start Game"
    }));

    button.on("click", function() {
        Q.clearStages();
        Q.stageScene("mainLevel");
    });
    container.fit(20);
});

Q.scene("score", function(stage) {
    var container = stage.insert(new Q.UI.Container({
        x: Q.width *3/4 ,
        y: Q.height / 8,
        fill: "#FFFFFF"
    }));

    container.insert(new Q.UI.Text({
        x: 5,
        y: 5,
        label: stage.options.label
    }));
   
    container.fit(20);
});

Q.load(["boy.png", "computer.png", "java.png", "js.png", "aj.png", "react.png", "aolmail.png", "css.png", "gmail.png", "html.png", "hotmail.png", "python.png", "yahoo.png", "minus.png", "plus.png",
    "boy.json", "computer.json", "player.json", "java.json", "js.json", "aj.json", "react.json", "aolmail.json", "css.json", "gmail.json", "html.json", "hotmail.json", "python.json", "yahoo.json", "minus.json", "plus.json"
], function() {
    Q.compileSheets("boy.png", "boy.json");
    Q.compileSheets("computer.png", "computer.json");
    Q.compileSheets("java.png", "java.json");
    Q.compileSheets("js.png", "js.json");
    Q.compileSheets("aj.png", "aj.json");
    Q.compileSheets("react.png", "react.json");
    Q.compileSheets("aolmail.png", "aolmail.json");
    Q.compileSheets("css.png", "css.json");
    Q.compileSheets("gmail.png", "gmail.json");
    Q.compileSheets("html.png", "html.json");
    Q.compileSheets("hotmail.png", "hotmail.json");
    Q.compileSheets("python.png", "python.json");
    Q.compileSheets("yahoo.png", "yahoo.json");
    Q.compileSheets("plus.png", "plus.json");
    Q.compileSheets("minus.png", "minus.json");
    Q.stageScene("startGame");
});