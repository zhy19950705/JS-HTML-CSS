// 1. 调用函数是会为其创建执行上下文，并压入执行环境栈的栈顶，执行完毕弹出，执行上下文被销毁，随之VO也被销毁

// 2. EC创建阶段分创建阶段和代码执行阶段

// 3. 创建阶段初始变量值为undefined，执行阶段才为变量赋值

// 4. 函数申明先于变量申明