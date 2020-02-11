// 单例模式
const Instance = (function() {
    let instance = null;
    return function(F, ...params) {
        if (F instanceof Function === false) {
            throw new Error('参数必须是一个函数');
        }
        if (instance === null) {
            instance = new F(...params);
        }
        return instance;
    }
})();

const Persion = function(name) {
    this.name = name
}
Persion.prototype.sayHai = function() {
    console.log(`Hello i'm ${this.name}`)
}

let a = Instance(Persion, '张三')
let b = Instance(Persion, '李四')

console.log(a === b) // true
a.sayHai(); // 张三
b.sayHai(); // 张三
