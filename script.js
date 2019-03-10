//Share : nguyentri729 - J2TEAM Community
//github: https://github.com/nguyentri729/profoundly_scan
	var find_info_id = ''; 
	var ten ='';
	var avatar ='';
	function decode_msg(e){
		 return decodeURIComponent(JSON.parse('"' + e + '"'))
	}


	$('#find').click(function(a){
		a.preventDefault();

		$.getJSON('https://profoundly.thao.pw/GetAllMessages?playerId='+$('#findid').val()+'').done(function(e){
			$('tbody').html('');
			$.each(e, function( index, value ) {
				if(value.to == $('#findid').val()){
					var to = 'Tôi';
				}else{
					
					check_now = value.to;
					$.getJSON('https://profoundly.thao.pw/GetAllMessages?playerId='+value.to+'').done(function(z){
						$.each(z, function( x, zvl ) {
							if(zvl['from'] == value.to){
								$('#find_id_img_'+value.to+'').attr('src', zvl['image']);
								$('#find_id_name_'+value.to+'').html(decode_msg(zvl['name'])+"<br><code>"+value.to+"</code>");
								

								
							}
						});
					});
					
				}
				if(value.from == $('#findid').val()){
					var toi = '(Tôi)';
				}else{
					var toi = '(<code>'+value.from+'</code>)';
				}
				if(value.from == $('#findid').val()){
					$('#toi_g').append('<tr>\
			            <th scope="row">'+index+'</th>\
			            <td><img src="'+value['image']+'" alt="error" class="avatar" onerror="$(this).attr(\'src\', \'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png\')"> <a href="#">'+decode_msg(value['name'])+toi+'</a>\
			                <div class="speech-bubble">'+decode_msg(value['message'])+'</div>\
			            </td>\
			            <td class="text-center"><img src="https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png" alt="..." class="avatar" id="find_id_img_'+value.to+'" onerror="$(this).attr(\'src\', \'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png\')"><br> <a href="#" id="find_id_name_'+value.to+'">'+to+'</a></td>\
			    	 </tr>');
				}else{
					$('#toi_nh').append('<tr>\
			            <th scope="row">'+index+'</th>\
			            <td><img src="'+value['image']+'" alt="error" class="avatar" onerror="$(this).attr(\'src\', \'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png\')"> <a href="#">'+decode_msg(value['name'])+toi+'</a>\
			                <div class="speech-bubble">'+decode_msg(value['message'])+'</div>\
			            </td>\
			            <td class="text-center"><img src="https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png" alt="..." class="avatar" id="find_id_img_'+value.to+'" onerror="$(this).attr(\'src\', \'https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png\')"><br> <a href="#" id="find_id_name_'+value.to+'">'+to+'</a></td>\
			    	 </tr>');
				}
			 	


			});
		});	
	});
	function find_info(id){
	    find_info_id = id;
		$.getJSON('https://profoundly.thao.pw/GetAllMessages?playerId='+find_info_id+'').done(function(e){
			console.log(e);
		});
	}