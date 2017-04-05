$(function(){
	// 折叠展开
	$(".Demo .con li>a").click(function(event) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().hide();
			$(this).parent().removeClass('xia');
			$(this).parent().addClass('shang');
		}else{
			$(".Demo .con li>a").removeClass('active');
			$(this).addClass('active');
			$(".sub").hide();
			$(this).next().show();
			$(".Demo .con li").removeClass('xia');
			$(".Demo .con li").addClass('shange');
			$(this).parent().addClass('xia');
		}
	});
	//添加id
	$(".Demo .con1 .sub a").each(function(i) {
		$(this).attr('draggable', true);
		$(this).attr('id', "drag1-"+i);
	});	
	//删除条件
	$(".boxWrap").on('click', 'a', function(event) {
		$(this).remove();
	});	
});

// 拖拽
var Dom = new Object();
function drag(event,obj) {
	Dom = obj;
	event.dataTransfer.setData("id", event.target.id);	
}
function allowDrop(event) {
	event.preventDefault();
}
function drop(event) {	
	event.preventDefault();	
	var data = event.dataTransfer.getData("id");	
	//判断指标还是维度	
	if($(Dom).parent().hasClass('weidu')){		
		//判断是否重复拖拽
		var flag = false;
		$("#box1 a").each(function(i) {			
			if($(this).attr('id').split("-")[1] == $(Dom).attr('id').split("-")[1]){
				flag = true;						
			}
		});		
		if(flag == false){
			if($("#box1 a").length >= 2){
				alert("最多可添加2个")
			}else{
				$(Dom).after($(Dom).clone());
				event.target.appendChild(document.getElementById(data));
			}			
		}
	}
}
function drop2(event) {	
	event.preventDefault();	
	var data = event.dataTransfer.getData("id");			
	//判断指标还是维度	
	if($(Dom).parent().hasClass('zhibiao')){		
		//判断是否重复拖拽
		var flag = false;
		$(".boxWrap a").each(function(i) {			
			if($(this).attr('id').split("-")[1] == $(Dom).attr('id').split("-")[1]){
				flag = true;						
			}
		});		
		if(flag == false){
			$(Dom).after($(Dom).clone());
			event.target.appendChild(document.getElementById(data));
		}
	}		
}





