function Plant(name, age, plant_class) {
    name = name;
    age = age;
    plant_class = plant_class;

    this.getName = function () {
        return name;
    }

    this.setName = function (value) {
        name = value;
    }

    this.getAge = function () {
        return age;
    }

    this.setAge = function (value) {
        age = value;
    }

    this.getClass = function () {
        return plant_class;
    }

    this.setClass = function (value) {
        this.plant_class = value;
    }

    this.toString = function () {
        return this.getName() + " " + this.getAge() + " " + this.getClass();
    }
}

function Fern(name, age, leaf_size) {
    var plant_class = "Polypodiopsida";
    Plant.call(this, name, age, plant_class);
    leaf_size = leaf_size;

    this.getLeafSize = function () {
        return leaf_size;
    }

    this.setLeafSize = function (value) {
        leaf_size = value;
    }

    this.toStringFern = function () {
        return this.toString() + " " + this.getLeafSize();
    }
}

function Spruce(name, age, needle_length, cone_size) {
    var plant_class = "Pinopsida";
    Plant.call(this, name, age, plant_class);
    needle_length = needle_length;
    cone_size = cone_size;

    this.getNeedleLength = function () {
        return this.needle_length;
    }

    this.setNeedleLength = function (value) {
        needle_length = value;
    }

    this.getConeSize = function () {
        return cone_size;
    }

    this.setConeSize = function (value) {
        cone_size = value;
    }

    this.toStringSpruce = function () {
        return this.toString() + " " + this.getNeedleLength() + " " + this.getConeSize();
    }
}

function showInfo() {
    alert("INFO!");
}

//Орляк обыкновенный (папоротник)
var fern_usual = new Fern("Pterídium aquilínum", 83, '');
fern_usual.setLeafSize(32);

//Ель обыкновенная
var spruce_usual = new Spruce("Pícea ábies", 150, '', '');
spruce_usual.setNeedleLength(16);
spruce_usual.setConeSize(5);

console.log(fern_usual.toStringFern());
console.log(spruce_usual.toStringSpruce());