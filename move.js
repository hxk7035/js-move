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
function startMove(obj,json,fn){
	clearInterval(obj.timer);
    obj.timer=setInterval(function(){
		var flag=true;       //用于控制所有运动是否全部完成的标识
		for(var attr in json)
		{
				var cur;             //该属性当前值
				if(attr == 'opacity')
				{
			    	cur=Math.round(parseFloat(getStyle(obj,attr)*100));
				}else{
					cur=parseInt(getStyle(obj,attr));
				}
				
				
				var speed=(json[attr]-cur)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
				if(cur!=json[attr])
				{
					flag=false;
					if(attr=='opacity')
					{
						obj.style.filter='alpha(opacity='+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}
					else
					{
						obj.style[attr]=cur+speed+'px';
					}
				}
				
					
				
		}
		if(flag)
		{	
			clearInterval(obj.timer);
			
			if(fn){
				fn();
			}
		}
		
		},30)
		
	
	}
	
	
