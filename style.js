	//百度搜索
	function Search(){
//			1.选元素,设置url
			this.txt = document.getElementById("txt");
			this.ul = document.getElementById("list");
			this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
			
//			2.绑定事件
			this.addEvent();    //添加事件
		}
		Search.prototype.addEvent = function(){
			var that = this;
			         //键盘抬起时
			this.txt.onkeyup = function(){
//				3.保存输入框的内容
				that.val = this.value;
//				4.准备请求数据
				that.load()
			}
		}
		Search.prototype.load = function(){
			var that = this;
			jsonp(this.url,function(res){
//				5.将数据保存到将来的实例对象
				that.res = res;
//				6.请求成功之后,才能够去渲染页面
				that.display();
			},{
				_name:"cb",
				cb:"asdasgtdsa",
				wd:this.val
			})
		}
		Search.prototype.display = function(){
//			7.渲染页面
			var str= ""
			this.res.s.forEach(function(v){
				str += `<li>${v}</li>`;
			})
			this.ul.innerHTML = str;
			

		}
		
		new Search()
		
		