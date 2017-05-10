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

}