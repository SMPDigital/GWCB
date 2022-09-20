// JavaScript Document


var url = window.location.pathname;
var filename = url.substr(url.lastIndexOf('/') + 1);


 var pagelist = [];
								pagelist[0] = "index.html";
								pagelist[1] = "the_business_of_education.html";
								pagelist[2] = "introduction.html";
								pagelist[3] = "chairmans_message.html";


								
								
var minv = 0;
var maxv = 5;

function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
  }


var scrnwidth = window.innerWidth;

if (scrnwidth > 480) {
	
}

function pageDet(pren,nxtn){
	
	var pagetitle1 = '';
	var pagetitle2 = '';
	var pageurl1 = '';
	var pageurl2 = '';

	if(pren == 1){pagetitle1 = "The Business of Education", pageurl1 = '../chapters/' + pagelist[1]}
    if(nxtn == 1){pagetitle2 = "The Business of Education ", pageurl2 = '../chapters/' + pagelist[1]}
   	if(pren == 2){pagetitle1 = "Introduction", pageurl1 =  '../chapters/' + pagelist[2]}
    if(nxtn == 2){pagetitle2 = "Introduction", pageurl2 =  '../chapters/' + pagelist[2]}
	if(pren == 3){pagetitle1 = "Chairmans Message", pageurl1 =  '../chapters/' + pagelist[3]}
    if(nxtn == 3){pagetitle2 = "Chairmans Message", pageurl2 =  '../chapters/' + pagelist[3]}
	
	

	return [pagetitle1,pageurl1,pagetitle2,pageurl2];
	
}

pid = arraySearch(pagelist,filename);

var pren = pid - 1;
var nxtn = pid + 1;

var getvalset = pageDet(pren,nxtn);


if((pren) && (pren > minv)){
	
	
preval = '<a href="'+getvalset[1]+'"><div class="featured-item feature-icon icon-hover icon-hover-blue icon-circle icon-outline"><div class="icon"><img src="../images/left_blk.png" alt=""></div><div class="desc"><h2>Previous Page</h2><p>'+getvalset[0]+'</p></div></div</a>';
	$('#prelink').html(preval);
	
	
	}

	
if((nxtn)&& (nxtn < maxv)){

	nextval ='<a href="'+getvalset[3]+'"><div class="featured-item feature-icon icon-hover icon-hover-blue icon-circle icon-outline"><div class="icon"><img src="../images/right_blk.png" alt=""></div><div class="desc"><h2>Next Page</h2><p>'+getvalset[2]+'</p></div></div></a>'
	$('#nextlink').html(nextval);

	}


