<script src="//ossweb-img.qq.com/images/js/jquery/jquery-1.11.3.min.js"></script>
<script src="//ossweb-img.qq.com/images/js/title.js"></script>
<script src="//ossweb-img.qq.com/images/js/foot.js"></script>
<script src="//ossweb-img.qq.com/images/js/comm/showDialog.min.js"></script>
<script src="js/share.js"></script>
<script>
TGshare({
 iconSize : 16, //分享图标的大小,16为16px X 16px，24为24px X 24px
 snsModule : ['wechat','qq','sina','buluo'],
 //分享类型 wechat,qq,qzone,weibo,pengyou,sina,douban,kaixin,renren
 //默认全部加载
 title :'2018年度策略大作火爆预约',
 //需要自定义标题时才用到，默认拉取页面标题
 url : location.href,
 //需要自定义页面url时才用到，默认拉取页面url
 picUrl : 'http://b.gtimg.com/res/2014/06/13/0/058e8b5f7aa4e83d.jpg',
 //需要自定义主题图片才用到，默认拉取页面中第一张图片
 snsID :'tg-sns',//自定义SNS容器ID
 isWindow : true, //分享打开类型，true为弹窗打开，false为新页面打开，默认为弹窗打开
 tcss : true //是否添加点击流，true为添加，false为不添加，默认添加
})
//解决导航条在当前页面的问题. 如果非出现问题 禁止修改
 var nav={nav:document.querySelector('#nav ul.q')}
 var nav_lichide=nav.nav.children;
 var href=location.href.split('/')[location.href.split('/').length-1].split('.')[0];
 for(var i=0;i<nav_lichide.length-1;i++){
  var nav_li_achide=nav_lichide[i].children[0].href.split('/')[nav_lichide[i].children[0].href.split('/').length-1].split('.')[0];
  for(var q=0;q<nav_lichide[i].children.length;q++){
  if(nav_lichide[i].children[q].tagName.toLocaleLowerCase()=='ul'){
  for(var z=0;z<nav_lichide[i].children[q].children.length;z++){
  for(var l=0;l<nav_lichide[i].children[q].children[z].getElementsByTagName('a').length;l++){
  var childhref=nav_lichide[i].children[q].children[z].getElementsByTagName('a')[l].href.split('/')[nav_lichide[i].children[q].children[z].getElementsByTagName('a')[l].href.split('/').length-1].split('.')[0];
  if(childhref==href){addClass(nav_lichide[i],'on')}}}}}
  if(nav_li_achide==href){addClass(nav_lichide[i],'on')}}
  if(href==''){addClass(nav.nav.children[0],'on')}
function addClass(obj, cls){
 var obj_class = obj.className,//获取 class 内容.
 blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
 added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
 obj.className = added;//替换原来的 class.
}
function removeClass(obj, cls){
 var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
 obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
 removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
 removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
 obj.className = removed;//替换原来的 class.
}
function hasClass(obj, cls){
 var obj_class = obj.className,//获取 class 内容.
 obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
 x = 0;
 for(x in obj_class_lst) {
   if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
     return true;
   }
 }
 return false;
}
function add(ele,event,fn,bool){
  if(document.addEventListener){
      return ele.addEventListener(event,fn,bool)
  }else{
      return ele.attachEvent('on'+event,fn,bool)
  }
}

function showDia(div){
	showDialog.show({
		id:div, //需要弹出的id，如果是弹出页面上的div，则该选项为必选
		bgcolor:"#000",//弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
		opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
	});
}

</script>
