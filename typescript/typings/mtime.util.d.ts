declare namespace Mtime.Util {
    /**
     * Dispatcher
     */
    class Dispatcher {
        private attr;
        private events;
        constructor(attr?: string);
        /**
         * 创建一个 Dispatcher 并绑定事件到页面元素上
         *
         * @param elem
         * @param event
         * @returns {Dispatcher}
         */
        static bind(elem: string | JQuery | Element | Document, event?: string): Dispatcher;
        /**
         * 注册动作事件
         *
         * @param action
         * @param handler
         * @returns {Mtime.Util.Dispatcher}
         */
        on(action: string, handler: (e: JQueryEventObject) => any): Dispatcher;
        /**
         * 移除动作事件
         *
         * @param action
         * @returns {Mtime.Util.Dispatcher}
         */
        off(action: string): Dispatcher;
        /**
         * 绑定事件到页面元素上
         *
         * @param elem
         * @param event
         * @returns {Mtime.Util.Dispatcher}
         */
        bind(elem: string | JQuery | Element | Document, event?: string): Dispatcher;
        private handle(e);
    }
}
