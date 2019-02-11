'use strict';

function MenuItem(name, kCal, gluten, lactose) {
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.burger = function() {
        return name;
    };
    this.calories = function() {
        return kCal;
    };
    this.isGluten = function() {
        return gluten;
    };
    this.isLactose = function() {
        return lactose;
    };
}