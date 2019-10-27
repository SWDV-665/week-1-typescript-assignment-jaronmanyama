class Grocery {
    fullName: string;
    constructor(public name: string, public quantity: string, public glutenFree: string) {
        this.fullName = name + " " + quantity + " " + glutenFree;
    }
}

interface groceryList {
    name: string;
    quantity: string;
    glutenFree: string;
}

interface groceryList2 {
    name: string;
    quantity: string;
    glutenFree: string;
}

interface groceryList3 {
    name: string;
    quantity: string;
    glutenFree: string;
}

interface groceryList4 {
    name: string;
    quantity: string;
    glutenFree: string;
}


function gstore(_item: groceryList) {
    return "List item#1 :" + _item.name + " - " + " " +  "Quantity: " + _item.quantity + " " + "Gluten Free:" + " " + _item.glutenFree; 

}

function gstore2(_item2: groceryList2) {
    return "List item#2 : " + _item2.name + " - " + " " +  "Quantity: " + _item2.quantity + " " + "Gluten Free:" + " " + _item2.glutenFree; 

}

function gstore3(_item3: groceryList3) {
    return "List item#3 : "  + _item3.name + " - " + " " +  "Quantity: " + _item3.quantity + " " + "Gluten Free:" + " " + _item3.glutenFree; 

}

function gstore4(_item4: groceryList4) {
    return "List item#4 : "  + _item4.name + " - " + " " +  "Quantity: " + _item4.quantity + " " + "Gluten Free:" + " " + _item4.glutenFree; 

}



let itemDetails1 = new Grocery("BREAD", "1 Loaf;", "Yes");

var itemDetails2 = new Grocery("COOKIES", "3 Packs;", "No");

var itemDetails3 = new Grocery("PANCAKE MIX", "2 Boxes;", "Yes");

var itemDetails4 = new Grocery("TORTILLA CHIPS", "4 Bags;", "Yes");


document.getElementById("list").innerHTML =  gstore(itemDetails1);
document.getElementById("list2").innerHTML =  gstore2(itemDetails2);
document.getElementById("list3").innerHTML =  gstore3(itemDetails3);
document.getElementById("list4").innerHTML =  gstore4(itemDetails4);



