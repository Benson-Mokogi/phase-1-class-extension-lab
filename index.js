// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides        
    }

    get countSides(){
        
        return this.sides.length;

    }

    get perimeter(){
        return this.sides.reduce((sum, side) => sum + side);
    }
}

const polygon = new Polygon([3,4,5,6])

class Triangle extends Polygon{
    constructor(...args){
        super(...args)
        
    }

    get isValidTriangle(){
        if (this.countSides === 3){
            return true;
        }
                    
    }
}

class Square extends Polygon{
    constructor(...args){
        super(...args)
       
    }

    get isValidSquare(){
        if(this.countSides == 4){
            return true;
        }            
       
    }

    get area(){
        return this.sides[0]**2;
    }
}
