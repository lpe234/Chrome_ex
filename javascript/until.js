/**
* dizzy
* 2014年4月26日21:46:32
*/

/* about me */
var about_title = "<a href=\"http:\/\/dizzyblog.duapp.com/\" target=\"_blank\">by Dizzy!<\/a>";

/* get obj */
var column1 = $('.column1');
var column2 = $('.column2');
var column3 = $('.column3');
var column4 = $('.column4');
var pause_ad = $('.pause-ad');



/* add mark */
var about = $('.down-mobile');

/* if has ads */
function hasAds(obj){
	return (obj.length>0);
}

/* hide ads */
function hideAds(obj){
	obj.css("display","none");
}

/* add mark */
function addMark(obj){
	obj.html(about_title);
}

/*-------------- to hide ads----------------*/
if(hasAds(column4)){
	hideAds(column4);
	addMark(about);
}else{
	alert("somethings wrong !");
}

/*--------------- reset -----------------*/

column2.css("right",360);
column3.css("right",0);
column3.css("width",360);

$('#lrcResize').css("z-index","-10");
column3.css("z-index",0);

/*--------------- add 2014年5月6日18:16:27 -----------------*/
$('.m-client-product').css("display","none");
$('.playlist-length-cloud').css("bottom","0px");
$('.leftbar-outer').css("height","100%");
