#!/usr/bin/node
class Rectangle{
    constructor(w, h){
        if(h <= 0 || w <= 0 || h === undefined || w === undefined){
            return this;
        } else {
            this.width = w;
            this.height = h;

        }

    }
    print(){
        for (let count = 0; count<0; count++)
        {
            console.log('X'.repeat(this.width));
        }
    }
}
module.exports = Rectangle;