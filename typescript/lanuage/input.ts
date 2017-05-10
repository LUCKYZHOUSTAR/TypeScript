namespace Input {

    class UserInf {
        name: string;
        userId: string;
    }


    /*export可以把该类进行暴漏，别的明明空间就可以        let inputTest = new Input.input();
     访问*/
    export class input {
        private userInfo: UserInf;

        public setUserInfoName(userInfo: UserInf) {
            this.userInfo = userInfo;
        }

        constructor(msg: string) {
            console.log("init obj info");
            $("#submitBut").click(this.showMsg.bind(this));
        }

        public showMsg() {
            let msg = $("#name").val();
            alert(msg);
        }
    }


    /*页面都渲染不了，所以不能用这种形式*/
    // let inputObj = new input();
    $(() => new input(""));

}

/**
 * AJAX 请求静态方法接口(仅用于实现 $input 快捷对象)
 */
interface Window {
    $input: Input.input;
}
console.log("start to init")
/*相当于全局的声明，声明的变量在任何地方都可以用到,只是一个单纯的声明作用，还没有进行定义*/
declare var $input: Input.input;
console.log("end to init")
$input = new Input.input("");

