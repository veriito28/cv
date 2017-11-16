$(document).ready(function() {
	var all = $("#all");
	var web = $("#web");
	var photo = $("#photo");
	var illustration = $("#illustration");
	var info = JSON.parse(workJson);
	for(var i in info) {
		var name = info[i].name;
		var description = info[i].description;
		var image = info[i].image;
		var category = info[i].category;

		var project = 
			'<div class="col-sm-3 w3_tab_img_left"><div class="demo">'+
			'<a class="cm-overlay" href="assets/img/'+image+'">'+
			'<figure class="imghvr-shutter-in-out-diag-2"><img src="assets/img/'+image+'" alt=" " class="img-responsive"/></figure></a></div>'+
			'<div class="agile-gallery-info">'+
			'<h5>'+name+'</h5>'+
			'<p>'+description+'</p>'+
			'</div></div>';

		if(category == "Web Design")
			web.append(project);
		if(category == "Photography")
			photo.append(project);
		if(category == "Illustration")
			illustration.append(project);
		all.append(project);
	}
});