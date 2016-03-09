/**
 * Created by Administrator on 2016/3/8.
 */
//表示的是通过基本的选择器获取元素的节点
function $ID(id){
    return document.getElementById(id);
}
function $myClass(myclass){
    return document.getElementsByClassName(myclass);
}
function $Tagname(tagname){
    return document.getElementsByTagName(tagname);
}

//表示的是定义全局变量
var zanShou=$myClass("zanShou")[0];
var myimg=$myClass("myimg")[0];
var figcaption=$Tagname("figcaption")[0];
var touXiang1=$myClass("touXiang1")[0];
var zuoXiesanjiao=$myClass("zuoXiesanjiao")[0];
var figure_p=$myClass("figure_p")[0];
var figure_wenzi_span=$myClass("figure_wenzi_span")[0];
var xiaFang_fontface_i=$myClass("xiaFang_fontface_i");
var flag0=true;
var flag1=true;
var flag2=true;
var flag3=true;
var flag4=true;
var flag5=true;
var flag6=true;


function xuanZhuan(){
    if(flag0==true){
        zanShou.innerHTML="&#xe607;";
        zanShou.style.webkitTransform="rotate(-1080deg)";
        zanShou.style.top="68px";
        myimg.setAttribute("class","myimg2");
        figcaption.style.top="0px";
        touXiang1.setAttribute("class","touXiang2");
        zuoXiesanjiao.innerHTML="&#xe848;";
        zuoXiesanjiao.style.top="91px";
        setTimeout(wenzi1,300);
        flag0=false;
    }else{
        zanShou.innerHTML="&#xe65a;";
        zanShou.style.webkitTransform="rotate(1080deg)";
        zanShou.style.top="20px";
        myimg.removeAttribute("class","myimg2");
        figcaption.style.top="330px";
        touXiang1.removeAttribute("class","touXiang2");
        zuoXiesanjiao.innerHTML="&#xe601;";
        zuoXiesanjiao.style.top="314px";

        //setTimeout(myTwo,300);
        figure_p.style.webkitAnimation="";
        figure_p.style.visibility="hidden";
        figure_wenzi_span.style.webkitAnimation="";
        for(var i=0;i<xiaFang_fontface_i.length;i++){
            //console.log(1);
            xiaFang_fontface_i[i].style.webkitAnimation="";
            xiaFang_fontface_i[i].style.display="none";
        }
        flag0=true;
    }
}

//这是第一次单击的变化
function wenzi1(){
    figure_p.style.webkitAnimation="move1 .3s linear forwards";
    figure_p.style.visibility="visible";
    setTimeout(wenzi2,100);
}
function wenzi2(){
    figure_wenzi_span.style.webkitAnimation="move2 .3s linear forwards";
    setTimeout(fontface1,100);
}
function fontface1(){
    xiaFang_fontface_i[0].style.webkitAnimation="move3 .3s linear forwards";
    xiaFang_fontface_i[0].style.display="block";
    setTimeout(fontface2,100);
}
function fontface2(){
    xiaFang_fontface_i[1].style.webkitAnimation="move3 .3s linear forwards";
    xiaFang_fontface_i[1].style.display="block";
    setTimeout(fontface3,100);
}
function fontface3(){
    xiaFang_fontface_i[2].style.webkitAnimation="move3 .3s linear forwards";
    xiaFang_fontface_i[2].style.display="block";
    setTimeout(fontface4,100);
}
function fontface4(){
    xiaFang_fontface_i[3].style.webkitAnimation="move3 .3s linear forwards";
    xiaFang_fontface_i[3].style.display="block";
}

//封装模板
//第一个参数表示的是第几次单击，   flag
//第二个表示的是单机按钮的节点     myshijian
//第三个表示的是图片的节点  img
//第四个表示的是figcaption    myfigcaption
//第五个头像的加载   mytouXiang1
//第六个表示的是左下角的三角图标   myzuoXiesanjiao
//第七个表示的是myfigure下面的p   myfigure_p
//第八个表示的是myfigure_wenzi_span   myfigure_wenzi_span
//第九个表示的是下方的fontface        myxiaFang_fontface_i

function myMuban(flag,myshijian,img,myfigcaption,mytouXiang1,myzuoXiesanjiao,myfigure_p,myfigure_wenzi_span,myxiaFang_fontface_i){
    if(flag==true){
        myshijian.innerHTML="&#xe607;";
        myshijian.style.webkitTransform="rotate(-1080deg)";
        myshijian.style.top="68px";
        img.setAttribute("class","myimg2");
        myfigcaption.style.top="0px";
        mytouXiang1.setAttribute("class","touXiang2");
        myzuoXiesanjiao.innerHTML="&#xe848;";
        myzuoXiesanjiao.style.top="91px";
        //flag=false;
        //console.log(flag);
        setTimeout(wenzi1,100);
    }else{
        //console.log(2);
        myshijian.innerHTML="&#xe65a;";
        myshijian.style.webkitTransform="rotate(1080deg)";
        myshijian.style.top="20px";
        img.removeAttribute("class","myimg2");
        myfigcaption.style.top="330px";
        mytouXiang1.removeAttribute("class","touXiang2");
        myzuoXiesanjiao.innerHTML="&#xe601;";
        myzuoXiesanjiao.style.top="314px";

        //setTimeout(myTwo,300);
        myfigure_p.style.webkitAnimation="";
        myfigure_p.style.visibility="hidden";
        myfigure_wenzi_span.style.webkitAnimation="";
        for(var i=0;i<myxiaFang_fontface_i.length;i++){
            console.log(1);
            myxiaFang_fontface_i[i].style.webkitAnimation="";
            myxiaFang_fontface_i[i].style.display="none";
        }
        //flag=true;
    }
    function wenzi1(){
        myfigure_p.style.webkitAnimation="move1 .3s linear forwards";
        myfigure_p.style.visibility="visible";
        //console.log(1);
        setTimeout(wenzi2,100);
    }
    function wenzi2(){
        myfigure_wenzi_span.style.webkitAnimation="move2 .3s linear forwards";
        setTimeout(fontface1,100);
    }
    function fontface1(){
        myxiaFang_fontface_i[0].style.webkitAnimation="move3 .3s linear forwards";
        myxiaFang_fontface_i[0].style.display="block";
        setTimeout(fontface2,100);
    }
    function fontface2(){
        myxiaFang_fontface_i[1].style.webkitAnimation="move3 .3s linear forwards";
        myxiaFang_fontface_i[1].style.display="block";
        setTimeout(fontface3,100);
    }
    function fontface3(){
        myxiaFang_fontface_i[2].style.webkitAnimation="move3 .3s linear forwards";
        myxiaFang_fontface_i[2].style.display="block";
        setTimeout(fontface4,100);
    }
    function fontface4(){
        myxiaFang_fontface_i[3].style.webkitAnimation="move3 .3s linear forwards";
        myxiaFang_fontface_i[3].style.display="block";
    }
}

//第二张图片
function xuanZhuan1(){
    var shijian1=$ID("shijian1");
    var myImg1=$ID("myImg1");
    var figcaption1=$ID("figcaption1");
    var touXiang1=$ID("touXiang1");
    var zuoXiesanjiao1=$ID("zuoXiesanjiao1");
    var figure_p1=$ID("figure_p1");
    var figure_wenzi_span1=$ID("figure_wenzi_span1");
    var xiaFang_fontface_i1=$myClass("xiaFang_fontface_i1");
    //console.log(flag1);
    if(flag1==true){
        myMuban(true,shijian1,myImg1,figcaption1,touXiang1,zuoXiesanjiao1,figure_p1,figure_wenzi_span1,xiaFang_fontface_i1);
        flag1=false;
    }else{
        myMuban(false,shijian1,myImg1,figcaption1,touXiang1,zuoXiesanjiao1,figure_p1,figure_wenzi_span1,xiaFang_fontface_i1);
        flag1=true;
    }
}

//第三张图片
function xuanZhuan2(){
    var shijian2=$ID("shijian2");
    var myImg2=$ID("myImg2");
    var figcaption2=$ID("figcaption2");
    var touXiang2=$ID("touXiang2");
    var zuoXiesanjiao2=$ID("zuoXiesanjiao2");
    var figure_p2=$ID("figure_p2");
    var figure_wenzi_span2=$ID("figure_wenzi_span2");
    var xiaFang_fontface_i2=$myClass("xiaFang_fontface_i2");
    //console.log(flag1);
    if(flag2==true){
        myMuban(true,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag2=false;
    }else{
        myMuban(false,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag2=true;
    }
}


//第四张
function xuanZhuan3(){
    var shijian2=$ID("shijian3");
    var myImg2=$ID("myImg3");
    var figcaption2=$ID("figcaption3");
    var touXiang2=$ID("touXiang3");
    var zuoXiesanjiao2=$ID("zuoXiesanjiao3");
    var figure_p2=$ID("figure_p3");
    var figure_wenzi_span2=$ID("figure_wenzi_span3");
    var xiaFang_fontface_i2=$myClass("xiaFang_fontface_i3");
    //console.log(flag1);
    if(flag3==true){
        myMuban(true,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag3=false;
    }else{
        myMuban(false,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag3=true;
    }
}

//第五张
function xuanZhuan4(){
    var shijian2=$ID("shijian4");
    var myImg2=$ID("myImg4");
    var figcaption2=$ID("figcaption4");
    var touXiang2=$ID("touXiang4");
    var zuoXiesanjiao2=$ID("zuoXiesanjiao4");
    var figure_p2=$ID("figure_p4");
    var figure_wenzi_span2=$ID("figure_wenzi_span4");
    var xiaFang_fontface_i2=$myClass("xiaFang_fontface_i4");
    //console.log(flag1);
    if(flag4==true){
        myMuban(true,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag4=false;
    }else{
        myMuban(false,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag4=true;
    }
}

//第六张
function xuanZhuan5(){
    var shijian2=$ID("shijian5");
    var myImg2=$ID("myImg5");
    var figcaption2=$ID("figcaption5");
    var touXiang2=$ID("touXiang5");
    var zuoXiesanjiao2=$ID("zuoXiesanjiao5");
    var figure_p2=$ID("figure_p5");
    var figure_wenzi_span2=$ID("figure_wenzi_span5");
    var xiaFang_fontface_i2=$myClass("xiaFang_fontface_i5");
    //console.log(flag1);
    if(flag5==true){
        myMuban(true,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag5=false;
    }else{
        myMuban(false,shijian2,myImg2,figcaption2,touXiang2,zuoXiesanjiao2,figure_p2,figure_wenzi_span2,xiaFang_fontface_i2);
        flag5=true;
    }
}






