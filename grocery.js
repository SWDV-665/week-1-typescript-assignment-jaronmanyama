var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, glutenFree) {
        this.name = name;
        this.quantity = quantity;
        this.glutenFree = glutenFree;
        this.fullName = name + " " + quantity + " " + glutenFree;
    }
    return Grocery;
}());
function gstore(_item) {
    return "List item#1 :" + _item.name + " - " + " " + "Quantity: " + _item.quantity + " " + "Gluten Free:" + " " + _item.glutenFree;
}
function gstore2(_item2) {
    return "List item#2 : " + _item2.name + " - " + " " + "Quantity: " + _item2.quantity + " " + "Gluten Free:" + " " + _item2.glutenFree;
}
function gstore3(_item3) {
    return "List item#3 : " + _item3.name + " - " + " " + "Quantity: " + _item3.quantity + " " + "Gluten Free:" + " " + _item3.glutenFree;
}
function gstore4(_item4) {
    return "List item#4 : " + _item4.name + " - " + " " + "Quantity: " + _item4.quantity + " " + "Gluten Free:" + " " + _item4.glutenFree;
}
var itemDetails1 = new Grocery("BREAD", "1 Loaf;", "Yes");
var itemDetails2 = new Grocery("COOKIES", "3 Packs;", "No");
var itemDetails3 = new Grocery("PANCAKE MIX", "2 Boxes;", "Yes");
var itemDetails4 = new Grocery("TORTILLA CHIPS", "4 Bags;", "Yes");
document.getElementById("list").innerHTML = gstore(itemDetails1);
document.getElementById("list2").innerHTML = gstore2(itemDetails2);
document.getElementById("list3").innerHTML = gstore3(itemDetails3);
document.getElementById("list4").innerHTML = gstore4(itemDetails4);
