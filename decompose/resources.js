class Resource {
    constructor(name, components) {
        this.name = name; //String: name of resource
        this.components = components; //Array: Components that make up the resource
    }

    //Debug method logging components of a resource
    logComponents() {
        if (this.components) {
            var components = this.components
            for (var i=0; i<this.components.length; i++) {
                console.log(components[i].resource.name + ' : ', components[i].amount);
            }
        } else {
            console.log('First order resource');
        }
    }
};

class Component {
    constructor(resource, amount) {
        this.resource = resource;
        this.amount = amount;
    }
}

//First order resources
const bedrock = new Resource("Bedrock", null);

const blaze_rod = new Resource("Blaze Rod", null);

const bone = new Resource("Bone", null);

const chorus_fruit = new Resource("Chorus Fruit", null);

const clay = new Resource("Clay", null);

const coal_ore = new Resource("Coal Ore", null);

const cobblestone = new Resource("Cobblestone", null);

const cobweb = new Resource("Cobweb", null);

const diamond_ore = new Resource("Diamond Ore", null);

const dirt = new Resource("Dirt", null);

const dragon_egg = new Resource("Dragon Egg", null);

const emerald_ore = new Resource("Emerald Ore", null);

const end_stone = new Resource("End Stone", null);

const glowstone_dust = new Resource("Glowstone Dust", null);

const gold_ore = new Resource("Gold Ore", null);

const grass_block = new Resource("Grass Block", null);

const gravel = new Resource("Gravel", null);

const ice = new Resource("Ice", null);

const ink_sac = new Resource("Ink Sac", null);

const iron_ore = new Resource("Iron Ore", null);

const lapis_lazuli_ore = new Resource("Lapis Lazuli Ore", null);

const lava = new Resource("Lava", null);

const monster_spawner = new Resource("Monster Spawner", null);

const mycelium = new Resource("Mycelium", null);

const netherrack = new Resource("Netherrack", null);

const nether_quartz_ore = new Resource("Nether Quartz Ore", null);

const nether_wart = new Resource("Nether Wart", null);

const obsidian = new Resource("Obsidian", null);

const packed_ice = new Resource("Packed Ice", null);

const podzol = new Resource("Podzol", null);

const prismarine_shard = new Resource("Prismarine Shard", null);

const redstone = new Resource("Redstone", null);

const slime_ball = new Resource("Slime Ball", null);

const stick = new Resource("Stick", null);

const string = new Resource("String", null);

const vines = new Resource("Vines", null);

//Second order resources: made of only raw materials
const blaze_powder = new Resource("Blaze Powder", new Component(blaze_rod, 1));

const bone_meal = new Resource("Bone Meal", [new Component(bone, 1)]);

const bone_block = new Resource("Bone Block", [new Component(bone_meal, 9)]);

const bow = new Resource("Bow", [new Component(stick, 3), new Component(string, 3)]);

const clay_block = new Resource("Clay", [new Component(clay, 4)]);

const coarse_dirt = new Resource("Coarse Dirt", [new Component(dirt, 2), new Component(gravel, 2)]);

const dark_prismarine = new Resource("Dark Prismarine", [new Component(prismarine_shard, 8), new Component(ink_sac, 1)]);

const end_stone_bricks = new Resource("End Stone Bricks", [new Component(end_stone, 4)]);

const glowstone_block = new Resource("Glowstone", [new Component(glowstone_dust, 4)]);

const magma_cream = new Resource("Magma Cream", [new Component(blaze_powder, 1), new Component(slime_ball, 1)]);

const moss_stone = new Resource("Moss Stone", [new Component(cobblestone, 1), new Component(vines, 1)]);

const nether_brick = new Resource("Nether Brick", [new Component(netherrack, 1)]);

const popped_chorus_fruit = new Resource("Popped Chorus Fruit", [new Component(chorus_fruit, 1)]);

const prismarine = new Resource("Prismarine", [new Component(prismarine_shard, 4)]);

const prismarine_bricks = new Resource("Prismarine Bricks", [new Component(prismarine_shard, 9)]);

//Third order resources: contains second order resources
const dispenser = new Resource("Dispenser", [new Component(cobblestone, 7), new Component(redstone, 1), new Component(bow, 1)]);

const magma_block = new Resource("Magma Block", [new Component(magma_cream, 4)]);

const nether_brick_block = new Resource("Netherrack Brick", [new Component(nether_brick, 4)]);

const purpur_block = new Resource("Purpur Block", [new Component(popped_chorus_fruit, 4)]);

const red_nether_brick = new Resource("Red Nether Brick", [new Component(nether_brick, 2), new Component(nether_wart, 2)]);