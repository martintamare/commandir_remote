// Global power option, needed to tune remote, set in my_password.js
remote_code = freebox_code;

function handle_power(div_id){
	key = div_id.substr(6);
	if(key=="freebox")
	{
		query = "http://hd1.freebox.fr/pub/remote_control?code=" + remote_code + "&key=power";
	}else if(key=="ampli"){
		query = "../cgi-bin/yamaha_power.cgi"
	}else if(key=="tv"){
		query = "../cgi-bin/tv_power.cgi"
	}else if(key=="xbmc"){
		query = "../cgi-bin/xbmc_power.cgi"
	}
	$.ajax({
		url: query
	});		
}
function handle_xbmc(div_id){
	query="";
	if(div_id=="start"){
		$.ajax({
			url: "../cgi-bin/xbmc_power.cgi"
		});
	}else if(div_id=="reload"){
		// Test
		_data = '{"jsonrpc":"2.0", "method":"JSONRPC.Version", "id":"1"}';
		_XBMCHOST = "http://192.168.20.150:9090/jsonrpc";

		$.ajax({
			username: 'martin',
			password: '111aaa',
			dataType: 'jsonp',
			data: _data,
			jsonp: 'jsonp_callback',
			url: _XBMCHOST,
			type: 'post', //make this a post instead of a get
			success: function () {
				console.log( 'here here here');
			},

			error:function( result ){
				console.log( result );
				console.log('error!!!');
			}
		});

	}else if(div_id=="synchro"){
		$.ajax({
			url: "../cgi-bin/xbmc_synchro.cgi"
		});
	}
}
function handle_switching(div_id){
	key = div_id.substr(2);
	if(key=="freebox")
	{
		// TV ON
		$.ajax({
			url: "../cgi-bin/tv_on.cgi"
		});

		// AMPLI ON
		$.ajax({
			url: "../cgi-bin/yamaha_on.cgi",
			success: function(){
				// HDMI1
				$.ajax({
					url: "../cgi-bin/hdmi1.cgi"
				})
			}
		});

	}else if(key=="xbmc"){
		// TV ON
		$.ajax({
			url: "../cgi-bin/tv_on.cgi"
		});

		// AMPLI ON
		$.ajax({
			url: "../cgi-bin/yamaha_on.cgi",
			success: function(){
				// HDMI1
				$.ajax({
					url: "../cgi-bin/hdmi3.cgi"
				})
			}
		});
	}else if(key=="ps3"){

	}
}

function fire_freebox_event(div_id){
	key = div_id.substr(2);
	length = key.length;
	query = "http://hd1.freebox.fr/pub/remote_control?code=" + remote_code + "&key=";
	if(length!=2 || isNaN(parseInt(key)))
	{
		query += key;
		// alert(query);
		$.ajax({
			url: query
		});
	}else{
		firstkey = key.substr(0,1);
		query += firstkey + "&long=true"
		// alert(query);
		$.ajax({
			url: query
		});
		secondkey = key.substr(1);
		query2 = "fire_freebox_event(\"f_"+secondkey+"\")";
		setTimeout(query2,500);
	}
}

$(document).ready(function() {
	// Init handler for freebox, using the live function
	$(".freebox").live('click', function(event) {
		fire_freebox_event(event.currentTarget.id);
		event.stopPropagation();
	});

	// Init handler for power option
	$(".power").live('click', function(event) {
		handle_power(event.currentTarget.id);
		event.stopPropagation();
	});

	// switch class, when tapping on every onglet
	$(".switch").live('click', function(event) {
		handle_switching(event.currentTarget.id);
		event.stopPropagation();
	});

	// xbmc class
	$(".xbmc").live('click', function(event) {
		handle_xbmc(event.currentTarget.id);
		event.stopPropagation();
	});

	// Init handler for power option
	$(".ampli").live('click', function(event) {
		query = "../cgi-bin/" + event.currentTarget.id + ".cgi"
		$.ajax({
			url: query 
		});
		event.stopPropagation();
	});
});
