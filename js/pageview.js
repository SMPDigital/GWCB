// JavaScript Document


var url = window.location.pathname;
var filename = url.substr(url.lastIndexOf('/') + 1);


 var pagelist = [];
								pagelist[0] = "index.html";
								pagelist[1] = "sec01_the_business_of_education.html";
								pagelist[2] = "sec01_1the_vision_of_ralph_alles.html";
								pagelist[3] = "sec01_2the_early_years.html";
								pagelist[4] = "sec01_3a_new_name_a_new_school.html";
								pagelist[5] = "sec01_4branching_out_in_kandy.html";
								pagelist[6] = "sec01_5a_gateway_in_the_southern_suburbs.html";
								pagelist[7] = "sec01_6gateway_to_negombo.html";
								pagelist[8] = "sec01_7maturity.html";
								pagelist[9] = "sec01_8learning_beyond_the_classroom.html";
								pagelist[10] = "sec01_9a_gateway_for_ratmalana.html";
								pagelist[11] = "sec01_10education_in_the_pandemic.html";
								pagelist[12] = "sec01_11the_gateway_family.html";
								pagelist[13] = "sec01_epilogue_looking_back_looking_forward.html";
								pagelist[14] = "sec01_appendix_principals_staff_and_head_prefects.html";
								pagelist[15] = "sec02_1introduction.html";
								pagelist[16] = "sec02_2future_fashion.html";
								pagelist[17] = "sec02_3capZeus_asteroid_capturer.html";
								pagelist[18] = "sec02_4teleportation_plasma_beams_and_nuclear_fusion.html";
								pagelist[19] = "sec02_5our_views_on_art_and_entertainment.html";
								pagelist[20] = "sec02_6discover_vaccines.html";
								pagelist[21] = "sec02_7the_mystery_of_introkill.html";
								pagelist[22] = "sec02_8schizophrenia.html";
								pagelist[23] = "sec02_9anticipate_artificial_intelligence.html";
								pagelist[24] = "sec02_10unearthing_the_extra_terrestrial_year_2047.html";
								pagelist[25] = "sec02_11the_legend_craft.html";
								pagelist[26] = "sec02_12the_effects_of_climate_change_in_25_years.html";
								pagelist[27] = "sec02_13the_future_of_politics_and_conflict_year_2047.html";
								pagelist[28] = "sec02_14education_into_the_future.html";
								pagelist[29] = "sec02_15the_binary_descendant.html";
								pagelist[30] = "sec02_16virtual_reunion.html";
								pagelist[31] = "chairmans_message.html";

								
var minv = 0;
var maxv = 32;

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
   	if(pren == 2){pagetitle1 = "The Vision of Ralph Alles", pageurl1 =  '../chapters/' + pagelist[2]}
    if(nxtn == 2){pagetitle2 = "The Vision of Ralph Alles", pageurl2 =  '../chapters/' + pagelist[2]}
	if(pren == 3){pagetitle1 = "The Early Years", pageurl1 =  '../chapters/' + pagelist[3]}
    if(nxtn == 3){pagetitle2 = "The Early Years", pageurl2 =  '../chapters/' + pagelist[3]}
	if(pren == 4){pagetitle1 = "A New Name, a New School", pageurl1 =  '../chapters/' + pagelist[4]}
    if(nxtn == 4){pagetitle2 = "A New Name, a New School", pageurl2 =  '../chapters/' + pagelist[4]}
	if(pren == 5){pagetitle1 = "Branching out in Kandy", pageurl1 =  '../chapters/' + pagelist[5]}
    if(nxtn == 5){pagetitle2 = "Branching out in Kandy", pageurl2 =  '../chapters/' + pagelist[5]}
	if(pren == 6){pagetitle1 = "A Gateway in the Southern Suburbs", pageurl1 =  '../chapters/' + pagelist[6]}
    if(nxtn == 6){pagetitle2 = "A Gateway in the Southern Suburbs", pageurl2 =  '../chapters/' + pagelist[6]}
	if(pren == 7){pagetitle1 = "Gateway to Negombo", pageurl1 =  '../chapters/' + pagelist[7]}
    if(nxtn == 7){pagetitle2 = "Gateway to Negombo", pageurl2 =  '../chapters/' + pagelist[7]}
	if(pren == 8){pagetitle1 = "Maturity", pageurl1 =  '../chapters/' + pagelist[8]}
    if(nxtn == 8){pagetitle2 = "Maturity", pageurl2 =  '../chapters/' + pagelist[8]}
	if(pren == 9){pagetitle1 = "Learning beyond the Classroom", pageurl1 =  '../chapters/' + pagelist[9]}
    if(nxtn == 9){pagetitle2 = "Learning beyond the Classroom", pageurl2 =  '../chapters/' + pagelist[9]}
	if(pren == 10){pagetitle1 = "A Gateway for Ratmalana", pageurl1 =  '../chapters/' + pagelist[10]}
    if(nxtn == 10){pagetitle2 = "A Gateway for Ratmalana", pageurl2 =  '../chapters/' + pagelist[10]}
	if(pren == 11){pagetitle1 = "Education in the Pandemic", pageurl1 =  '../chapters/' + pagelist[11]}
    if(nxtn == 11){pagetitle2 = "Education in the Pandemic", pageurl2 =  '../chapters/' + pagelist[11]}
	if(pren == 12){pagetitle1 = "The Gateway Family", pageurl1 =  '../chapters/' + pagelist[12]}
    if(nxtn == 12){pagetitle2 = "The Gateway Family", pageurl2 =  '../chapters/' + pagelist[12]}
	if(pren == 13){pagetitle1 = "Looking Back, Looking Forward", pageurl1 =  '../chapters/' + pagelist[13]}
    if(nxtn == 13){pagetitle2 = "Looking Back, Looking Forward", pageurl2 =  '../chapters/' + pagelist[13]}
	if(pren == 14){pagetitle1 = "Principals, Staff and Head Prefects", pageurl1 =  '../chapters/' + pagelist[14]}
    if(nxtn == 14){pagetitle2 = "Principals, Staff and Head Prefects", pageurl2 =  '../chapters/' + pagelist[14]}
	if(pren == 15){pagetitle1 = "Introduction", pageurl1 =  '../chapters/' + pagelist[15]}
    if(nxtn == 15){pagetitle2 = "Introduction", pageurl2 =  '../chapters/' + pagelist[15]}
	if(pren == 16){pagetitle1 = "Future Fashion", pageurl1 =  '../chapters/' + pagelist[16]}
    if(nxtn == 16){pagetitle2 = "Future Fashion", pageurl2 =  '../chapters/' + pagelist[16]}
	if(pren == 17){pagetitle1 = "CapZeus: Asteroid Capturer", pageurl1 =  '../chapters/' + pagelist[17]}
    if(nxtn == 17){pagetitle2 = "CapZeus: Asteroid Capturer", pageurl2 =  '../chapters/' + pagelist[17]}
	if(pren == 18){pagetitle1 = "Teleportation, Plasma Beams, and Nuclear Fusion: The Fantastic Future of Transport", pageurl1 =  '../chapters/' + pagelist[18]}
    if(nxtn == 18){pagetitle2 = "Teleportation, Plasma Beams, and Nuclear Fusion: The Fantastic Future of Transport", pageurl2 =  '../chapters/' + pagelist[18]}
	if(pren == 19){pagetitle1 = "Our Views on Art &amp; Entertainment:  What Will the World be Like in 25 years?", pageurl1 =  '../chapters/' + pagelist[19]}
    if(nxtn == 19){pagetitle2 = "Our Views on Art &amp; Entertainment:  What Will the World be Like in 25 years?", pageurl2 =  '../chapters/' + pagelist[19]}
	if(pren == 20){pagetitle1 = "Discover Vaccines", pageurl1 =  '../chapters/' + pagelist[20]}
    if(nxtn == 20){pagetitle2 = "Discover Vaccines", pageurl2 =  '../chapters/' + pagelist[20]}
	if(pren == 21){pagetitle1 = "The Mystery of Introkill", pageurl1 =  '../chapters/' + pagelist[21]}
    if(nxtn == 21){pagetitle2 = "The Mystery of Introkill", pageurl2 =  '../chapters/' + pagelist[21]}
	if(pren == 22){pagetitle1 = "Schizophrenia", pageurl1 =  '../chapters/' + pagelist[22]}
    if(nxtn == 22){pagetitle2 = "Schizophrenia", pageurl2 =  '../chapters/' + pagelist[22]}
	if(pren == 23){pagetitle1 = "Anticipate Artificial Intelligence", pageurl1 =  '../chapters/' + pagelist[23]}
    if(nxtn == 23){pagetitle2 = "Anticipate Artificial Intelligence", pageurl2 =  '../chapters/' + pagelist[23]}
	if(pren == 24){pagetitle1 = "Unearthing the Extra-Terrestrial: Year 2047", pageurl1 =  '../chapters/' + pagelist[24]}
    if(nxtn == 24){pagetitle2 = "Unearthing the Extra-Terrestrial: Year 2047", pageurl2 =  '../chapters/' + pagelist[24]}
	if(pren == 25){pagetitle1 = "The Legend Craft", pageurl1 =  '../chapters/' + pagelist[25]}
    if(nxtn == 25){pagetitle2 = "The Legend Craft", pageurl2 =  '../chapters/' + pagelist[25]}
	if(pren == 26){pagetitle1 = "The Effects of Climate Change in 25 Years", pageurl1 =  '../chapters/' + pagelist[26]}
    if(nxtn == 26){pagetitle2 = "The Effects of Climate Change in 25 Years", pageurl2 =  '../chapters/' + pagelist[26]}
	if(pren == 27){pagetitle1 = "The Future of Politics and Conflict: Year 2047", pageurl1 =  '../chapters/' + pagelist[27]}
    if(nxtn == 27){pagetitle2 = "The Future of Politics and Conflict: Year 2047", pageurl2 =  '../chapters/' + pagelist[27]}
	if(pren == 28){pagetitle1 = "Education Into the Future", pageurl1 =  '../chapters/' + pagelist[28]}
    if(nxtn == 28){pagetitle2 = "Education Into the Future", pageurl2 =  '../chapters/' + pagelist[28]}
	if(pren == 29){pagetitle1 = "The Binary Descendant", pageurl1 =  '../chapters/' + pagelist[29]}
    if(nxtn == 29){pagetitle2 = "The Binary Descendant", pageurl2 =  '../chapters/' + pagelist[29]}
	if(pren == 30){pagetitle1 = "Virtual Reunion", pageurl1 =  '../chapters/' + pagelist[30]}
    if(nxtn == 30){pagetitle2 = "Virtual Reunion", pageurl2 =  '../chapters/' + pagelist[30]}
	if(pren == 31){pagetitle1 = "Chairman’s Message", pageurl1 =  '../chapters/' + pagelist[31]}
    if(nxtn == 31){pagetitle2 = "Chairman’s Message", pageurl2 =  '../chapters/' + pagelist[31]}
	
	
	

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


