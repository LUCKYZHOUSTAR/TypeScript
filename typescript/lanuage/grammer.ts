namespace grammer{


    var isDone:boolean=false;

    var initValue:number=6;
    var name:string="bob";
    var list:number[]=[1,2,3];
    var newlist:Array<number>=[1,2,3];
    /*Tuple元组
    * 元组类型允许表达固定数量的已知类型集合，但这些类型不必是相同的。例如，您可能想表示一个'string和number`组合的类型：*/
    var x:[string,number]=['hello',6];

    /*Any,表达不明确的变量的信息*/
    var notSure:any=4;
    notSure=false;
    /*void就像any的相反面，表示没有*/
    function warnUser():void{
        alert("this is my warning message");

    }





    enum Direction{
        Up=1,
        Down=2,
        Left,
        Right
    }

    let a=Direction.Down;

    
    interface LabelLedValue{
        label:string;
    }

    /**可选属性接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。*/
    interface SquareConfig{
        color?:string;
        width?:number;
    }

    class Greeter{
        greeting:string;
        constructor(message:string){
            this.greeting=message;
        }

        greet(){
            return "hello";
        }
    }


    class Animal extends Greeter{
        greet(){
            return "hi";
        }
    }

    class Chicken {
        public name: string;
        public constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    $(()=>new Greeter("hello"));
}