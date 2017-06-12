if (top.location !== self.location) {top.location=self.location;}
var count_IP_or_Domain='119.90.51.74';
function byID(id){return document.getElementById(id);}
function SHome(obj){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage('http://www.060s.com/');}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch(e){alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");}}else{alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将'http://www.060s.com/'设置为首页。");}}}
function getVar(showID,Value){var disp = byID(showID);disp.innerHTML = Value;}
function getHtml(showID,valueID){var disp = byID(showID);disp.innerHTML = byID(valueID).innerHTML;}
function addBookmark(){var title=document.title;var url=document.location.href;if (window.sidebar) window.sidebar.addPanel(title, url,"");else if( window.opera && window.print ){var mbm = document.createElement('a');mbm.setAttribute('rel','sidebar');mbm.setAttribute('href',url);	mbm.setAttribute('title',title);mbm.click();}else if( document.all ) window.external.AddFavorite(url, title);}
function SetCookie(name,value){var Days = 30;var exp  = new Date();exp.setTime(exp.getTime() + Days*24*60*60*1000);document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();}
function getCookie(name){var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr != null) return unescape(arr[2]); return null;}
function delCookie(name){var exp = new Date();exp.setTime(exp.getTime() - 1);var cval=getCookie(name);if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();}
var js_CTN;
function doPrint(){byID("header").style.display="none";byID("left_content").style.display="none";byID("footer").style.display="none";byID("ad_footer").style.display="none";byID("headermenu").style.display="none";byID("ad_top1").style.display="none";byID("ad_bottom").style.display="none";js_CTN=byID("js_CTN").innerHTML;byID("js_CTN").innerHTML='<table><tr><td align="right">此页面为打印预览页 【<a href="javascript:window.print();">打印</a>】【<a href="javascript:REdoPrint()">返回</a>】</td></tr></table>';}  
function REdoPrint(){byID("header").style.display="block";byID("left_content").style.display="block";byID("footer").style.display="block";byID("ad_footer").style.display="block";byID("headermenu").style.display="block";byID("ad_top1").style.display="block";byID("ad_bottom").style.display="block";getVar('js_CTN',js_CTN);}
function flashChecker(){var hasFlash=0;var flashVersion=0;var isIE=/*@cc_on!@*/0;if(isIE){var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');if(swf){hasFlash=1;VSwf=swf.GetVariable("$version");flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]);}}else{if (navigator.plugins && navigator.plugins.length > 0){var swf=navigator.plugins["Shockwave Flash"];if (swf){hasFlash=1;var words = swf.description.split(" ");for (var i = 0; i < words.length; ++i){if (isNaN(parseInt(words[i]))) continue;flashVersion = parseInt(words[i]);}}}}return {f:hasFlash,v:flashVersion};}
function changeSearchText(obj){var sNum = obj.options[obj.selectedIndex].value;if(sNum == 0){byID("MYse").action="http://www3.060s.com/forum/search.php?orderby=lastpost&ascdesc=desc&searchsubmit=yes";byID("srchtype").name="srchtxt";}else if(sNum == 1){document.MYse.action="http://www3.060s.com/forum/search.php?orderby=lastpost&ascdesc=desc&searchsubmit=yes"; byID("srchtype").name="srchuname";}else if(sNum == 3){document.MYse.action="http://new.060s.com/search/search.php"; byID("srchtype").name="word";}else if(sNum == 4){byID("MYse").action="http://new.060s.com/flash/flash_search.php"; byID("srchtype").name="name";} else {alert("    抱歉，系统错误!\n现在将自动转入按【帖子标题】搜索模式！");byID("srchtype").name="srchtxt";}}
function checkSearchData(){if(byID("srchtype").value.trim() == ""){alert("搜索的关键字不能为空！");byID("srchtype").select();return false;}}
String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g, "");}
String.prototype.ltrim=function(){return this.replace(/(^\s*)/g,"");}
String.prototype.rtrim=function(){return this.replace(/(\s*$)/g,"");}
function getCookie(name){var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr != null) return unescape(arr[2]); return null;}
function user_chck(){document.writeln('&nbsp;你好，欢迎光临小精灵儿童网站！');}
function ad_title1(){document.writeln('<div id="test_title"><br /><h1 style="text-align:center;width:960px;line-height:100%">小精灵儿童网站</h1></div>');var timeout=setTimeout("ad_title()",5000);}
function sih(obj){var new_image = new Image();new_image.src = obj;if (parseInt(new_image.height)>200){byID("ihffzz").style.height=(new_image.height+20)+"px";byID("ileft").style.height=(new_image.height+20)+"px";byID("iright").style.height=(new_image.height+20)+"px";}}
function gopage(aid,page){if (page=='c' && parseInt(aid)>0 && parseInt(aid)<9999){top.location='http://new.060s.com/news/mulu/'+parseInt(aid)+'/';return;} if (parseInt(aid)<1){return;} if (parseInt(page)>1) {top.location=parseInt(aid)+'.'+parseInt(page)+'.htm';}else{top.location=parseInt(aid)+'.htm';}}
function ad_title2(){
var now = new Date();var sec = now.getSeconds();var ad = sec % 2;
byID("test_title1").innerHTML ='<a target="_blank" href="http://www.060s.com/special/printforkids/"><img src="http://new4.060s.com/ad/b1.jpg" alt="幼儿学堂" border="0"></a><a target="_blank" href="http://www.060s.com/special/pschool/"><img src="http://new4.060s.com/ad/b2.jpg" alt="小学课堂" border="0"></a>';
}
function ad_title(){
var ads_468_60 = '<table border="0" cellspacing="0" cellpadding="0"><tr><td>';
ads_468_60 =ads_468_60 + '<table width=100%  border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" height=85px><tr><td width=230>';
ads_468_60 =ads_468_60 + '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="227" height="80"><param name="movie" value="http://new4.060s.com/ad/111.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed src="http://new4.060s.com/ad/111.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="227" height="80" wmode="transparent"></embed></object>';ads_468_60 =ads_468_60 + '</td><td align=left valign=top><table width=100%  border="0" cellspacing="0" cellpadding="0"><tr height="85px"><td width=150px align=center>';ads_468_60 =ads_468_60 + '<a href="http://new.060s.com/news/mulu/315/"><img src="http://new4.060s.com/ad/tougao.gif" height="60px" width="130px" border="0" alt="在线投稿"></a>';ads_468_60 =ads_468_60 + '</td><td width="485px">';
var now = new Date();var sec = now.getSeconds();var ad = sec % 2;
ads_468_60 =ads_468_60 + '<a target="_blank" href="http://www.060s.com/special/printforkids/"><img src="http://new4.060s.com/ad/b1.jpg" alt="幼儿学堂" border="0"></a><a target="_blank" href="http://www.060s.com/special/pschool/"><img src="http://new4.060s.com/ad/b2.jpg" alt="小学课堂" border="0"></a>';
ads_468_60 =ads_468_60 + '</td><td style="line-height:180%;font-size:13px">';
var index_ad = Math.floor(Math.random() * 2);var ad_page = new Array(2);var ad_title= new Array(2);
ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/maths/all.php" target="_blank">幼儿在线学汉字</a><br>';ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/maths/all.php" target="_blank">在线小学口算练习</a><br>';
ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/english/" target="_blank">在线背英语单词</a><br>';ads_468_60 =ads_468_60 + '</td></tr></table></td></tr></table></td></tr></table>';
document.writeln(ads_468_60);
}
function ad_title_index(){
var ads_468_60 = '<table border="0" cellspacing="0" cellpadding="0"><tr><td>';
ads_468_60 =ads_468_60 + '<table width=100%  border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" height=85px><tr><td width=230>';
ads_468_60 =ads_468_60 + '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="227" height="80"><param name="movie" value="http://new4.060s.com/ad/111.swf" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed src="http://new4.060s.com/ad/111.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="227" height="80" wmode="transparent"></embed></object>';ads_468_60 =ads_468_60 + '</td><td align=left valign=top><table width=100%  border="0" cellspacing="0" cellpadding="0"><tr height="85px"><td width=150px align=center>';ads_468_60 =ads_468_60 + '<a href="http://new.060s.com/news/mulu/315/"><img src="http://new4.060s.com/images/tougao.gif" height="60px" width="130px" border="0" alt="在线投稿"></a>';ads_468_60 =ads_468_60 + '</td><td width="485px">';
ads_468_60 =ads_468_60 + '<a href="http://www.060s.com/childrens/"><img src="http://new4.060s.com/ad/jr.gif" border="0" alt="儿童动画"></a>';
ads_468_60 =ads_468_60 + '</td><td style="line-height:180%;font-size:13px">';
var index_ad = Math.floor(Math.random() * 2);
ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/maths/all.php" target="_blank">在线数学练习题</a><br>';
ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/dzkb/" target="_blank">小学在线电子课本</a><br>';
ads_468_60 =ads_468_60 + '<a href="http://www3.060s.com/english/" target="_blank">在线背英语单词</a><br>';ads_468_60 =ads_468_60 + '</td></tr></table></td></tr></table></td></tr></table>';
document.writeln(ads_468_60);
}
function ad_banner(){
var how_many_ads = 3;var now = new Date();var sec = now.getSeconds();var ad = sec % how_many_ads;ad +=1;ad=3;
if (ad==3) {if (location.href.substr(19,9)=='/special/' || location.href.substr(19,8)=='/center/'){document.writeln('<iframe name="ablank" id="ablack" scrolling="no" frameborder="0" marginwidth="0" style="margin:0px;padding:0px;" marginheight="0"  width="980px" height="90px" src="http://new4.060s.com/ad/baidu_special1.htm?CFG"></iframe>');byID("header4").style.display="block";}}
if (ad==3){byID("header4").style.height="90px";}else byID("header4").style.height="60px";
}
function ad_bnr1(){
var adlh=parseInt(3*Math.random());
if (adlh==1){byID("header4").innerHTML='<div style="padding-top:15px"><a href="http://new.060s.com/news/mulu/795/"><img alt="图片频道" border=0 src="http://new4.060s.com/images/ok1.png"></a></div>';byID("header4").style.height="105px";byID("header4").style.display="block";}
else{byID("header4").innerHTML='<div style="padding-top:15px"><a href="http://www3.060s.com/english/"><img alt="在线背单词" style="border:1px solid #666666" src="http://new4.060s.com/images/980_70_zxbdc.gif"></a></div>';byID("header4").style.height="85px";byID("header4").style.display="block";}
}

var req060s;var req060s_state=0;var ShowDIV_name;var DebugState=0;
function createXHttp(){if (window.XMLHttpRequest){return new XMLHttpRequest();if(xmlhttp.overrideMimeType){xmlhttp.overrideMimeType("text/xml");}}else{var MSXML=['Microsoft.XMLHTTP','MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];for (var n  =   0 ; n  <  MSXML.length; n ++ ){try{return new ActiveXObject(MSXML[n]);}catch (e){}}}}
function getDiv(showID,path){if (req060s_state){setTimeout('getDiv("'+showID+'","'+path+'")',500);return;}req060s_state=1;ShowDIV_name=showID;req060s = createXHttp();if (req060s){req060s.onreadystatechange = handleSC;req060s.open("GET", path, true);req060s.send(null);}}
function handleSC(){if (req060s.readyState == 4){req060s_state=0;if (req060s.status == 200 ){if (DebugState)  alert("ok");byID(ShowDIV_name).innerHTML = req060s.responseText;}else if(req060s.status == 404){if (DebugState) alert("文件不存在");}else if(req060s.status == 403){if (DebugState) alert("没有权限");}else{if (DebugState) alert("status is " + XMLHttp.status);}}}
function seg(c)
{if ('eg1'!=c) {byID('eg1').style.display = 'none';byID('eg1a').style.background = '';}
if ('eg2'!=c) {byID('eg2').style.display = 'none';byID('eg2a').style.background = '';}
if ('eg3'!=c) {byID('eg3').style.display = 'none';byID('eg3a').style.background = '';}
if ('eg4'!=c) {byID('eg4').style.display = 'none';byID('eg4a').style.background = '';}
if ('eg5'!=c) {byID('eg5').style.display = 'none';byID('eg5a').style.background = '';}
byID(c).style.display = 'block';
byID(c+'a').style.background = '#fff2bf';}

var _hmt = _hmt || [];
(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?5319d444ace75d311ea456fce5e52506";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();

function get_user(){var cke=getCookie('uchome_loginuser_comm');var user_name='';
if (cke==null){return '<form id="login" method="post" name="login" action="http://www3.060s.com/site/batch.login.php?action=login" target="_self">&nbsp;用户名：<input type="text" name="username" id="username" style="vertical-align:middle;width:70px;height:15px;border: 1px solid  #ccc;" />&nbsp;密码：<input type="password" name="password" id="userpass" style="vertical-align:middle;width:70px;height:15px;border: 1px solid  #ccc;" /> <input type="submit" name="loginsubmit" id="dologin" value="登录" height="20px" style="vertical-align:middle;width:40px;height:20px;background:#ffeeee;border:1px solid #dddddd;font-size:14px">  <a href="http://www3.060s.com/forum/register.php?referer=http://www3.060s.com/site/index.php">注册</a></form>';}
else{return '&nbsp;你好，'+decodeURIComponent(getCookie('uchome_loginuser_comm'))+'&nbsp;&nbsp;<a target="_blank" href="http://www3.060s.com/forum/memcp.php">控制面板</a>&nbsp; | &nbsp;<a href="http://www3.060s.com/site/batch.login.php?action=logout">退出</a>'}}
function getDiv1(s1s,s2s){getDiv(s1s,'http://new.060s.com/htmldaan.php?s='+s2s);}
function closeS2(){document.getElementById('miniW2').style.display='none';document.getElementById('miniZ2').style.display='none';document.getElementById('miniW2').innerHTML='<p align center><img src="http://new4.060s.com/images/loding.gif" border=0 style="width:30px;height:30px"></p>';}
function showM2(widths,styles){try{var iW2 = document.documentElement.clientWidth;iH2 = document.documentElement.clientHeight;if (styles>1){var bgObj =document.getElementById('miniZ2');bgObj.style.height=Math.max(document.body.clientHeight, iH2)+'px';bgObj.style.display='block';}if (widths==0) widths=600;var tops=parseInt(parseInt(getIHeight())+(iH2-200)/2);if (iH2-200<0) tops=parseInt(getIHeight());	document.getElementById('miniW2').style.width=widths+'px';document.getElementById('miniW2').style.top=tops+'px';document.getElementById('miniW2').style.left=parseInt((iW2-widths)/2)+'px';document.getElementById('miniW2').style.display='block';}catch (e){}}
function getIHeight(){var scroll_top=0;if (document.documentElement && document.documentElement.scrollTop){scroll_top = document.documentElement.scrollTop;}else if (document.body){scroll_top = document.body.scrollTop;}return scroll_top;}

var stNm="";var letIE10=0;var letIE9=0;var letIE8=0;var letIE7=0;var letIE6=0;GetIE();
function I(id){return document.getElementById(id);}
function T(id){return document.getElementById(id).style;}
function N(id){return document.getElementsByTagName(id);}
function AddCss(str_css) {try {var style = document.createStyleSheet();style.cssText = str_css;} catch(e) {var style = document.createElement("style");style.type = "text/css";style.textContent = str_css;N("HEAD").item(0).appendChild(style);}}
function AddHtml(topId,subName,subID,subClass,subHtml){var div=I(topId);var sub=document.createElement(subName);sub.id=subID;sub.className=subClass;sub.innerHTML=subHtml;div.appendChild(sub);}
function hasClass(obj, cls) {return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));}  
function addClass(obj, cls) {if (!this.hasClass(obj, cls)) obj.className += " " + cls;}  
function removeClass(obj, cls) {if (hasClass(obj, cls)) {var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');obj.className = obj.className.replace(reg, ' ');}}  
function toggleClass(obj,cls){if(hasClass(obj,cls)){removeClass(obj, cls);}else{addClass(obj, cls);}}
function xA(sNameT){if (sNameT!=stNm && stNm!='') {xD(stNm);}stNm=sNameT;if (I('te'+stNm).value!='') I('te'+stNm).value='';clearIE8(T(stNm));var oBj=I(stNm);T(stNm).width="3px";var sX=GetObjPos(oBj).x;var sY=GetObjPos(oBj).y;var oX=sX-(document.documentElement.scrollLeft+document.body.scrollLeft);var oY=sY-(document.documentElement.scrollTop+document.body.scrollTop);var r=0;var mX=0;var mY=0;document.onmousemove = function (ev){var e = ev || window.event || event;oX=sX-(document.documentElement.scrollLeft+document.body.scrollLeft);oY=sY-(document.documentElement.scrollTop+document.body.scrollTop);mX=sX-oX+e.clientX;mY=sY-oY+e.clientY;r=Math.sqrt((mX-sX)*(mX-sX)+(mY-sY)*(mY-sY));var Dx=(mX-sX);var Dy=(mY-sY);reDrawLine(T(stNm),Dx,Dy,r);}}
function xB(id){document.onmousemove = null;document.onmouseup = null;if (stNm=='') return '';if ('e'+stNm==id){I('te'+stNm).value="v";}else{I('te'+stNm).value="";}clearIE8(T(stNm));var r=0;var myDiv=I(id);var mX=GetObjPos(myDiv).x+2;var mY=GetObjPos(myDiv).y+2;var oBj=I(stNm);var sX=GetObjPos(oBj).x;var sY=GetObjPos(oBj).y;r=Math.sqrt((mX-sX)*(mX-sX)+(mY-sY)*(mY-sY));var Dx=(mX-sX);var Dy=(mY-sY);reDrawLine(T(stNm),Dx,Dy,r);stNm='';}
function xD(id){document.onmousemove = null;document.onmouseup = null;var ToBj=T(id);clearIE8(ToBj);I('te'+id).value='';ToBj.width="3px";stNm='';}
function CPos(x, y){this.x = x;this.y = y;}
function GetObjPos(ATarget){var target = ATarget;var pos = new CPos(target.offsetLeft, target.offsetTop);var target = target.offsetParent;while (target){pos.x += target.offsetLeft;pos.y += target.offsetTop;target = target.offsetParent}return pos;} 
function clearIE8(ToBj){if (letIE8==1){ToBj.width='3px';ToBj.top=0;ToBj.left=0;ToBj.filter='progid:DXImageTransform.Microsoft.Matrix(rotation=0,sizingMethod="auto expand")';}}
function reDrawLine(ToBj,Dx,Dy,r){ToBj.width=r+2+'px';if (letIE8==1){if (Dx>0) ToBj.left='0px';else ToBj.left=Dx+'px';if (Dy>0) ToBj.top='0px';else ToBj.top=Dy+'px';ToBj.filter='progid:DXImageTransform.Microsoft.Matrix(M11='+(Dx/r)+', M12='+(0-Dy/r)+',M21='+(Dy/r)+', M22='+(Dx/r)+',sizingMethod="auto expand")';}else{ToBj.transform='matrix('+(Dx/r)+', '+(Dy/r)+','+(0-Dy/r)+', '+(Dx/r)+', 0,0)';ToBj.webkitTransform='matrix('+(Dx/r)+', '+(Dy/r)+','+(0-Dy/r)+', '+(Dx/r)+', 0,0)';}}
function GetIE(){var browser=navigator.appName;var b_version=navigator.appVersion;var version=b_version.split(";");if (version[1] !=undefined){var trim_Version=version[1].replace(/[ ]/g,"");if(browser=="Microsoft Internet Explorer"){switch(trim_Version){case 'MSIE6.0':{letIE6=1;letIE7=1;letIE8=1;letIE9=1;letIE10=1;break;}case 'MSIE7.0':{letIE7=1;letIE8=1;letIE9=1;letIE10=1;break;}case 'MSIE8.0':{letIE8=1;letIE9=1;letIE10=1;break;}case 'MSIE9.0':{letIE9=1;letIE10=1;break;}case 'MSIE10.0':{letIE10=1;break;}default:{}}}}}
function PcOrWap(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};
