//获取元素的样式，避免边框之类的样式影响原样式的值
//用getStyle代替offset
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];   //针对IE浏览器
    }
    else{
        return getComputedStyle(obj,false)[attr];  //针对火狐浏览器
    }
}


//var timer=null;
function startMove(obj,target,fn){
	clearInterval(obj.timer);
    obj.timer=setInterval(function(){
			var speed=(target-parseInt(getStyle(obj,'width')))/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(getStyle(obj,'width')==target){
				clearInterval(obj.timer);
			}
			else{
				obj.style.width=parseInt(getStyle(obj,'width'))+speed+'px';
			}
		},30)
	if(fn){
		fn();
	}
	
}
