/**
 * Created by Administrator on 2016/12/20.
 */
// 构造函数
function ColorBall(option) {
    this._init(option);
}

// 构造函数原型库
ColorBall.prototype = {
    constructor : ColorBall,
    _init: function (option) {
        var option = option || {};
        // 必要的属性
        this.parentId = option.parentId;
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = 60;
        this.bgColor = option.bgColor || 'cyan';
        
        // 变化的属性
        this.dx = _.random(-5,5);
        this.dy = _.random(-5,5);
        this.dr = _.random(1,2);
    },

    // 绘制
    render: function () {
        var parentNode = document.getElementById(this.parentId);
        var childNode = document.createElement('div');
        parentNode.appendChild(childNode);

        parentNode.style.position = 'relative';
        childNode.style.position = 'absolute';

        childNode.style.left = this.x + 'px';
        childNode.style.top = this.y + 'px';
        childNode.style.width = this.r + 'px';
        childNode.style.height = this.r + 'px';
        childNode.style.borderRadius = '50%';
        childNode.style.backgroundColor = this.bgColor;
    },
    
    
    // 动画
    animate: function () {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
        
        if (this.r < 0){
            this.r = 0;
            // 清除掉半径为零的小球
            ballArr = _.without(ballArr,this);
        }
    }
}