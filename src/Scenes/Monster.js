class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;

        this.rightArmX = 500;
        this.rightArmY = 370;

        this.leftArmX = 300;
        this.leftArmY = 370;

        this.rightLegX = 480;
        this.rightLegY = 430;

        this.leftLegX = 320;
        this.leftLegY = 430
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_darkA.png");
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_darkA.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.leftLeg.flipX = true;


        //Init the keys that will be pressed
        this.sKey = this.input.keyboard.addKey('S');
        this.fKey = this.input.keyboard.addKey('F');
        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');


        this.sKey.on('down', ()=> {
            console.log("The S key was pressed moved left");
        })

        this.fKey.on('down', ()=> {
            console.log("The F key was pressed moved right");
        })

        this.aKey.on('down', ()=> {
            console.log("The A key was pressed moved left");
            my.sprite.body.x -= 10;
            my.sprite.rightLeg.x -= 10;
            my.sprite.leftLeg.x -= 10;
            my.sprite.leftArm.x -= 10;
            my.sprite.rightArm.x -= 10;
        })

        this.dKey.on('down', ()=> {
            console.log("The D key was pressed moved right");
            my.sprite.body.x += 10;
            my.sprite.rightLeg.x += 10;
            my.sprite.leftLeg.x += 10;
            my.sprite.leftArm.x += 10;
            my.sprite.rightArm.x += 10;
        })

    

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}