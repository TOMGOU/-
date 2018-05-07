var news = {
     newsul: document.getElementById('news').getElementsByTagName('ul'),
     news_nav: document.getElementById('news_nav').getElementsByTagName('li'),
     news_nava: document.getElementById('news_nav').getElementsByTagName('a')
   }
for (var i = 1; i < news.news_nav.length + 1; i++) {
    news.news_nav[i - 1].index = i - 1;
    add(news.news_nav[i - 1],'mouseover',function() {
        for (var i = 1; i < news.news_nav.length + 1; i++) {
            news.newsul[i].className = "news_list";
            news.news_nava[i - 1].className = ""
        }
        news.news_nava[this.index].className = 'cur';
        news.newsul[this.index + 1].className = "news_list cur"
    },false)
}
  var inif_intr={
   intr_li:document.querySelectorAll('.intr_li'),
   inif_list:document.querySelectorAll('.inif_list li')
  }
for(var i=0;i<inif_intr.inif_list.length-1;i++){
 inif_intr.inif_list[i].index=i;
 add(inif_intr.inif_list[i],'click',function(){
  for(var i=0;i<inif_intr.inif_list.length-1;i++){
   removeClass(inif_intr.intr_li[i],'on');
   removeClass(inif_intr.inif_list[i],'on');
  }
  addClass(this,'on');
  addClass(inif_intr.intr_li[this.index],'on')
 },false)
}

/*var introduction={
 sum_list:document.querySelectorAll('.sum_list li'),
 intr_child:document.querySelectorAll('.intr_child'),
 aux_list:document.querySelectorAll('.intr_child.on .aux_list li'),//兵种当前显示的子类
 aux:document.querySelectorAll('.intr_child.on .pos_obx')//兵种当前显示的父级
}
for(var i=0;i<introduction.sum_list.length;i++){
 introduction.sum_list[i].index=i;
 add(introduction.sum_list[i],'click',function(){
  for(var i=0;i<introduction.sum_list.length;i++){
   removeClass(introduction.intr_child[i],'on')
   removeClass(introduction.sum_list[i],'on')
  }
  addClass(introduction.intr_child[this.index],'on')
  addClass(this,'on')
  introduction.aux_list=document.querySelectorAll('.intr_child.on .aux_list li');//兵种当前显示的子类
  introduction.aux=document.querySelectorAll('.intr_child.on .pos_obx')//兵种当前显示的父级
  auxlist()
 },false)
}
auxlist()
function auxlist(){//点击切换不同兵种不同兵种的不同等级.
 for(var i=0;i<introduction.aux_list.length;i++){
  introduction.aux_list[i].index=i;
  add(introduction.aux_list[i],'click',function(){
   for(var i=0;i<introduction.aux_list.length;i++){
    removeClass(introduction.aux_list[i],'on');
    removeClass(introduction.aux[i],'on');
   }
   addClass(this,'on')
   addClass(introduction.aux[this.index],'on')
  },false)
 }
 for(var i=0;i<introduction.aux.length;i++){
  removeClass(introduction.aux[i],'on');
  removeClass(introduction.aux_list[i],'on')
 }
 addClass(introduction.aux[0],'on')
 addClass(introduction.aux_list[0],'on')
}*/
var startshare={
 strategy_nav:document.querySelectorAll('.strategy .strategynav li'),
 strategy_list:document.querySelectorAll('.strategy_content .strategy_list'),
 share_nav:document.querySelectorAll('.share .strategynav li'),
 share_list:document.querySelectorAll('.share_content .share_list')
}
navshow(startshare.strategy_nav,startshare.strategy_list)
navshow(startshare.share_nav,startshare.share_list)
function navshow(ele,dom){
 for(var i=0;i<ele.length;i++){
  ele[i].index=i;
  add(ele[i],'click',function(){
   for(var i=0;i<ele.length;i++){
    removeClass(ele[i],'on');
    removeClass(dom[i],'on');
   }
   addClass(this,'on');
   addClass(dom[this.index],'on');
  },false)
 }
}
var video_list=document.querySelectorAll('.videoside li');
for(var i=0;i<video_list.length;i++){
 video_list[i].index=i;
 add(video_list[i],'click',function(){
  for(var i=0;i<video_list.length;i++){
   removeClass(video_list[i],'on');
  }
  addClass(this,'on')
 })
}
  var mySwiper = new Swiper('#ggBox',{
    pagination: '#ggbox_switch',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    paginationElement:'li',
    speed:'800',
    autoplay:'3000',
    paginationClickable:true,
  })
  var mySwiper = new Swiper('.officer_roll',{
    pagination: '.roll_page',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    paginationElement:'li',
    speed:'1000',
    autoplay:'3000',
    paginationClickable:true,
  })

  play('y0510hvu0a7',false)
function play(vid,bool){
var player = new Txplayer({
 containerId: 'video',
 vid: vid,
 width: '992',
 height: '550',
 autoplay: bool
});
}
function playpop(vid,bool){
var player = new Txplayer({
 containerId: 'videopop',
 vid: vid,
 width: '992',
 height: '550',
 autoplay: bool
});
}

function showplaypop(div,vid,bool){
  showDia(div)
  playpop(vid,bool)
}











var navarr=['yuyue','release','datum','officer_feature','strategy_box','share_box','video_box','top']
var scrol=true;
var scrolTime=null;
var navfixed=document.querySelectorAll('#fixed-nav li');
  function rollset(){
      var sTop=document.body.scrollTop||document.documentElement.scrollTop,sHeight=document.documentElement.clientHeight;
  }
  window.onscroll=rollset;
  window.onresize=rollset;
  window.onload=rollset;
  var scroller={
      intval: function(v) {
          v = parseInt(v);
          return isNaN(v) ? 0 : v
      },
      getPos: function(e) {
          var l = 0;
          var t = 0;
          var w = scroller.intval(e.style.width);
          var h = scroller.intval(e.style.height);
          var wb = e.offsetWidth;
          var hb = e.offsetHeight;
          while (e.offsetParent) {
              l += e.offsetLeft + (e.currentStyle ? scroller.intval(e.currentStyle.borderLeftWidth) : 0);
              t += e.offsetTop + (e.currentStyle ? scroller.intval(e.currentStyle.borderTopWidth) : 0)-50;
              e = e.offsetParent
          }
          l += e.offsetLeft + (e.currentStyle ? scroller.intval(e.currentStyle.borderLeftWidth) : 0);
          t += e.offsetTop + (e.currentStyle ? scroller.intval(e.currentStyle.borderTopWidth) : 0)-50;
          return {
              x: l,
              y: t,
              w: w,
              h: h,
              wb: wb,
              hb: hb
          }
      },
      getScroll: function() {
          var t, l, w, h;
          if (document.documentElement && document.documentElement.scrollTop) {
              t = document.documentElement.scrollTop;
              l = document.documentElement.scrollLeft;
              w = document.documentElement.scrollWidth;
              h = document.documentElement.scrollHeight
          } else if (document.body) {
              t = document.body.scrollTop;
              l = document.body.scrollLeft;
              w = document.body.scrollWidth;
              h = document.body.scrollHeight
          }
          return {
              t: t,
              l: l,
              w: w,
              h: h
          }
      },
      clearScroll:function(){
          window.clearInterval(this.timer);
          window.clearInterval(scrolTime);
          scrolTime=null;
          this.timer = null;
      },
      init: function(el, duration) {
        scrol=false;
        for(var i=0;i<navfixed.length;i++){
          removeClass(navfixed[i],'on')
        }
          for(var i=1;i<navarr.length-1;i++){
            if(navarr[i]==el){
                addClass(navfixed[i],'on')
            }
          }
          this.clearScroll();
          scrolTime=setTimeout(function(){
            scrol=true;
          },550)
          if (typeof el != 'object') {
              el = document.getElementById(el)
          }
          if (!el) return;
          var z = this;
          z.el = el;
          z.p = scroller.getPos(el);
          z.s = scroller.getScroll();
          z.clear = function() {
              window.clearInterval(z.timer);
              z.timer = null
          };
          z.t = (new Date).getTime();
          z.step = function() {
              var t = (new Date).getTime();
              var p = (t - z.t) / duration;
              if (t >= duration + z.t) {
                  z.clear();
                  window.setTimeout(function() {
                      z.scroll(z.p.y, z.p.x)
                  },
                  13)
              } else {
                  st = (( - Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
                  sl = (( - Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
                  z.scroll(st, sl)
              }
          };
          z.scroll = function(t, l) {
              window.scrollTo(l, t)
          };
          z.timer = window.setInterval(function() {
              z.step()
          },
          13)
      }
  };

      window.onscroll=function(){
        var docum=document.body.scrollTop||document.documentElement.scrollTop;
        if(docum<300){
         document.querySelector('#fixed-nav').style.display='none'
        }else{
         document.querySelector('#fixed-nav').style.display='block'
        }
        if(scrol){
          for(var i=1;i<navarr.length-1;i++){
            if(docum>=( document.getElementById(navarr[i]).offsetTop+document.getElementById(navarr[i]).offsetHeight)&&docum<(document.getElementById(navarr[i]).offsetTop+ document.getElementById(navarr[i]).offsetHeight+document.documentElement.clientHeight)){
              for(var o=1;o<navarr.length-1;o++){
                  removeClass(navfixed[o],'on')
              }
             addClass(navfixed[i],'on')
             }
          }
        }
      }
var fixedtop=document.querySelector('.top');//返回顶部top
var scroll=null;
add(fixedtop,'click',function() {
    // PTTSendClick('fixedtop', 'top', '返回顶部' +  this.index);
    clearInterval(scroll);
    var  docum=document.body.scrollTop||document.documentElement.scrollTop;
    scroll = setInterval(function() {
        docum=document.body.scrollTop||document.documentElement.scrollTop;
        document.documentElement.scrollTop?document.documentElement.scrollTop-=200:document.body.scrollTop-=200;
        if (docum<= 10) {
            clearInterval(scroll)
        }
    }, 10)
},false)
