var isM=false;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))isM=true;var scriptUrl='https:\/\/www.youtube.com\/s\/player\/8d287e4d\/www-widgetapi.vflset\/www-widgetapi.js';try{var ttPolicy=window.trustedTypes.createPolicy("youtube-widget-api",{createScriptURL:function(x){return x}});scriptUrl=ttPolicy.createScriptURL(scriptUrl)}catch(e){}if(!window["YT"])var YT={loading:0,loaded:0};if(!window["YTConfig"])var YTConfig={"host":"https://www.youtube.com/embed/"};if(!YT.loading){YT.loading=1;(function(){var l=[];YT.ready=function(f){if(YT.loaded){f()}else l.push(f)};window.onYTReady=function(){YT.loaded=1;for(var i=0;i<l.length;i++)try{l[i]()}catch(e$0){}};YT.setConfig=function(c){for(var k in c)if(c.hasOwnProperty(k))YTConfig[k]=c[k]};var a=document.createElement("script");a.type="text/javascript";a.id="www-widgetapi-script";a.src=scriptUrl;a.async=true;var c=document.currentScript;if(c){var n=c.nonce||c.getAttribute("nonce");if(n)a.setAttribute("nonce",n)};var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()};function sY(d){var P=new YT.Player(d,{videoId:d.dataset.id,height:'100%',width:'100%',playerVars:{start:d.dataset.skip,end:d.dataset.end,controls:1,autoplay:1,Lp:0,modestbranding:1,playsinline:1,enablejsapi:1,iv_load_policy:3,rel:0},events:{'onReady':function(event){P.playVideo()},'onStateChange':function(event){switch(event.data){case 0:P.seekTo(d.dataset.skip);P.pauseVideo();break;case-1:case 1:case 2:case 3:case 5:default:break}}}})}
function iY(){var e=document.getElementsByClassName('yay');for(var n=0;n<e.length;n++){var id=e[n].dataset.id,S=(e[n].dataset.skip!==undefined)?e[n].dataset.skip:0,E=(e[n].dataset.end!==undefined)?e[n].dataset.end:null,d=document.createElement('div');d.setAttribute('data-id',id);d.setAttribute('data-skip',S);d.setAttribute('data-end',E);var t=document.createElement('img');switch(id){case'7sp56Llh9iI':case'pG8FU7tGC5w':case'Ue__E5UiGjg':t.src='https://img.youtube.com/vi/ID/maxresdefault.jpg'.replace('ID',id);break;default:t.src='https://img.youtube.com/vi/ID/hqdefault.jpg'.replace('ID',id);break};d.appendChild(t);var b=document.createElement('div');b.setAttribute('class','play');d.appendChild(b);d.onclick=function(){sY(this)};e[n].appendChild(d)}};document.addEventListener('DOMContentLoaded',iY);$(document).ready(function(){lg=$('#DM .logo');$(window).scroll(function(){if($(this).scrollTop()>120){lg.fadeIn()}else lg.fadeOut()});var Url=window.location,splits=Url.pathname.split("/"),pth=splits.pop()||splits.pop(),dir=splits.pop();if(pth.length<1){$('#F').children('.E').each(function(){if($(this).find('.featured').length==0)$(this).remove()});g=document.getElementById("G");function g2(i){I=i.querySelector('.I');if(I.classList.contains("empty")){i.style.gridRowEnd="auto"}else{R=I.getBoundingClientRect();if(I.querySelector('.b1')){fr=I.querySelector('.fr');h=Math.ceil(R.width)+238;fr.style.height=h+"px"};if(I.querySelector('.v169')){pr=I.querySelector('.pr');h=Math.ceil(R.width*0.5625);pr.style.height=h+"px"};if(I.querySelector('.v43')){pr=I.querySelector('.pr');h=Math.ceil(R.width*0.75);pr.style.height=h+"px"};H=parseInt(window.getComputedStyle(g).getPropertyValue('grid-auto-rows'));G=parseInt(window.getComputedStyle(g).getPropertyValue('grid-row-gap'));S=Math.ceil((i.querySelector('.I').getBoundingClientRect().height+G+48)/(H+G));i.style.gridRowEnd="span "+S}}
function g1(){is=g.querySelectorAll('.E');for(x=0;x<is.length;x++)g2(is[x])}
function more(){var m=$('main');if(m.find('#home').length){m.find('#more').remove();m.append('<div id="more"><p></p></div>')}};$('#G .E .I img').each(function(){var src=$(this).attr('src');img=new Image();img.src=src;img.onload=function(){$(this).remove()};mh=$('main #home');if(mh.length)mh.append('<img src='+src+'>')}).promise().done(function(){g1()});$(window).on('resize',function(){$.when(g1()).then(setTimeout(more(),1000))});$(window).on('load',function(){$.when(g1()).then(setTimeout(more(),1000))});function gtop(){if(lg.width()==96){lg.html('<h1 class="weak">David Leith</h1>');lg.removeClass("button")}else{lg.html('');lg.css('cursor','default');lg.css('background','none');lg.addClass("button")}};$(window).on('resize',function(){gtop()});$(window).on('load',function(){gtop()});gtop()}else{function tb(){if(lg.width()==96){lg.html('<h1><a class="snoop" href="/">David Leith</a></h1>');lg.removeClass("button")}else{lg.html('');lg.addClass("button");$('#DM .button').on('click',function(){window.location.href="/"})};h=$(window).height()+1000;$('main').css('height',h+'px')};$(window).on('resize',function(){tb()});$(window).on('load',function(){tb()});tb();var NAV1=/^work$/i,NAV2=/^collaborations$/i,NAV3=/^bio$/i,NAV4=/^contact$/i,w=0;if(NAV1.test(pth)){w=1}else if(NAV2.test(pth)){w=2}else if(NAV3.test(pth)){w=3}else if(NAV4.test(pth))w=4;var N=$('#nav #in'),x;if(w>0)switch(w){case 1:x=N.find("a:nth-child(1)");x.addClass("path");x.siblings().removeClass("path");break;case 2:x=N.find("a:nth-child(2)");x.addClass("path");x.siblings().removeClass("path");break;case 3:x=N.find("a:nth-child(3)");x.addClass("path");x.siblings().removeClass("path");if(!isM)m=$('main .content .moveable .icon'),m.addClass("pdf"),m.html('<a target="_blank" href="../images/david-leith-cv.pdf">CV (printable)</a>');break;case 4:x=N.find("a:nth-child(4)");x.addClass("path");x.siblings().removeClass("path");break;default:N.children().removeClass("path")};if(NAV1.test(dir)){var P=$('.content.post'),L=P.find('.left'),M=P.find('.moveable'),Fd=L.find('#with');if(Fd.text().length>0){Fd.prepend("Collaboration with ");Fd.append(".");if(Fd.text().indexOf(",")!=-1)Fd.append(" (By first name order)")};function S(){if(L.find('.b1').text().length>0){f=L.find('.fr');f.height(Math.ceil(f.width())+238)};if(L.find('#bbox').text().length>0){f=L.find('#bbox');f.height(Math.ceil(f.width()))}};S();$(window).on('load',function(){S()});$(window).on('resize',function(){S()});$('.pn').on('click',function(){var addr=$(this).attr("data-addr").replace("index.html","");window.location.href=window.location.href.replace(/\/work\/.+\//i,addr)});let sI=1;let AU=false;let Lp=0;let VP=$('.va .play');var to;function Bn(n){B1(sI=n)}
function B1(n){let i;let slides=document.getElementsByClassName("slide");let dots=document.getElementsByClassName("dot");if(n>slides.length)sI=1;if(n<1)sI=slides.length;for(i=0;i<slides.length;i++)slides[i].style.display="none";for(i=0;i<dots.length;i++)dots[i].className=dots[i].className.replace(" active","");slides[sI-1].style.display="block";dots[sI-1].className+=" active"}
function BN(){let i;let slides=document.getElementsByClassName("slide");let dots=document.getElementsByClassName("dot");for(i=0;i<slides.length;i++)slides[i].style.display="none";for(i=0;i<dots.length;i++)dots[i].className=dots[i].className.replace(" active","");sI++;if(sI>slides.length)sI=1;slides[sI-1].style.display="block";dots[sI-1].className+=" active";if(Lp==sI){AU=false;VP.fadeIn(1500);Lp=0}else{clearTimeout(to);to=setTimeout(function(){BN()},3000)}};var isSlides=$('#bbox').length;if(isSlides){B1(sI);$('.slide').on('click',function(){if(AU){AU=false;VP.fadeIn(1500);Lp=0;clearTimeout(to);Bn($(this).attr("data-num"))}else{AU=true;VP.fadeOut();clearTimeout(to);sI=$(this).attr("data-num");Lp=sI;to=setTimeout(function(){BN()},1000)}});$('.dot').on('click',function(){Bn($(this).attr("data-num"));AU=true;VP.fadeOut();Lp=sI;clearTimeout(to);to=setTimeout(function(){BN()},3000)})};if(!isM){$("main .content .left .Bv").append('<span id="q"><small>View this bigger</small></span>');$('body').prepend('<div id="full"><div id="X" class="btt"></div><div class="in"></div></div>');var FLL=$('#full'),box=FLL.find('.in'),ww=$(window).width(),wh=$(window).height();if(ww>2400){box.css("width",ww);box.css("height",ww)};if(wh>2400){box.css("width",wh);box.css("height",wh)};var sH=0;function getR(){var d=$(document).width(),b=box.width();if(d>b){return(b-ww)/2}else return(d-ww)/2}
function getB(){var d=$(document).height(),b=box.height();if(d>b){return(b-wh)/2}else return(d-wh)/2};if(isSlides){FLL.append('<div class="btt go pre"></div><div class="btt go aft"></div>');$('#full .pre').on('click',function(){Bn(parseInt(sI)-1);box.css("left","0");box.css("top","0");box.html('<img src="/images/discarded/sq'+sI+'.jpg">');window.scrollTo(getR(),getB())});$('#full .aft').on('click',function(){Bn(parseInt(sI)+1);box.css("left","0");box.css("top","0");box.html('<img src="/images/discarded/sq'+sI+'.jpg">');window.scrollTo(getR(),getB())});$('#q').on('click',function(){sH=$(window).scrollTop();FLL.css("display","block");$("body").addClass("nscrl");if(AU){AU=false;VP.fadeIn(1500);Lp=0;clearTimeout(to);Bn(sI)};box.html('<img src="/images/discarded/sq'+sI+'.jpg">');box.css("left","0");box.css("top","0");r=getR();b=getB();window.scrollTo(r,b);if(FLL.is(':visible'))box.draggable({containment:[-r,-b,r,b]})})}else $('#q').on('click',function(){sH=$(window).scrollTop();FLL.css("display","block");$("body").addClass("nscrl");str='<img src="/images/'+pth+'/sq'+$(this).parent().attr("data-bv")+'">';box.html(str);box.css("left","0");box.css("top","0");r=getR();b=getB();window.scrollTo(r,b);if(FLL.is(':visible'))box.draggable({containment:[-r,-b,r,b]})});$('#X').on('click',function(){box.css("left","0");box.css("top","0");box.html('');FLL.css("display","none");$("body").removeClass("nscrl");window.scrollTo(0,sH)});$(window).on('beforeunload',function(){window.scrollTo(0,sH);$("body").removeClass("nscrl")})}};if($('.content .noline .Fx').length){$('.content .noline .Fx .Fl .igu .desc').hover(function(){$(this).parent().find('.title').addClass("shine")},function(){$(this).parent().find('.title').removeClass("shine")});$('.content .noline .Fx .Fl .igu .desc').click(function(){var url=$(this).parent().find('.url').text().replace("index.html","");if(NAV1.test(pth)){window.location.href=window.location.href.replace("/work/",url)}else if(NAV2.test(dir)){var reg=/\/collaborations\/.*/;window.location.href=window.location.href.replace(reg,url)}else;})}};$('iframe').on("contextmenu",function(){return false})})