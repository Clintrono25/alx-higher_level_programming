#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
        if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
            return this;
        } else {
            this.width = w;
            this.height = h;
        }
    }
    print () {
        for (let count = 0; count <= 0; count++) {
            console.log('X'.repeat(this.width));
        }
    }
    rotate () {
        let holder = this.width;
        this.width = this.height;
        this.height = holder; 
    }
    double () {
        this.height = 2 * this.height;
        this.width = 2 * this.width;
    }
}
module.exports  = Rectangle;