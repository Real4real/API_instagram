window.onload = function () {
	$.ajax({
		type: "GET",
		url: "https://api.instagram.com/v1/users/self/?access_token=1427784712.5f0bf52.f95a7e3754fc4af3b83290247f2af6c1",
		success: function (data) {
			$(".gifspan").show();
			// console.log("My username is " + data.data.username);
			// $(".pic #profile").attr("src",data.data.profile_picture);
			setTimeout(function () {
	 			$(".gifspan").slideUp();
	 			$(".pic #profile").attr("src",data.data.profile_picture);
	 			console.log("36.6");
	 		},2000);

	 		$("#info-id").text("id - " + data.data.id);
	 		$("#info-username").text("username - " + data.data.username);
	 		$("#info-fullname").text("fullname - " + data.data.full_name);
	 		$("#info-bio").text("bio - " + data.data.bio);
		}
	})	
};

// $.ajax({
// 		type: "GET",
// 		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1427784712.5f0bf52.f95a7e3754fc4af3b83290247f2af6c1",
// 		success: function (data) {
// 			// console.log(data.data);
			
// 			// $(".pic img").attr("src",data.data.profile_picture);
// 		}
// 	});

// получаем фото
$("#btnGet").click(function () {
	$.ajax({
		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=1427784712.5f0bf52.f95a7e3754fc4af3b83290247f2af6c1",
		type: "GET",
		dataType: "json",
		success: function (data) {
			// console.log(data);
			$.each(data.data,function (index, item) {
				console.log(data.data[index].images.thumbnail.url);
				// $(".content").append(index + ": " + "filter - " + item.filter + "</br>")
				// $(".content").append(index + ": " + item.user.full_name + "</br>");
				$(".content").append('<p>id: '+ (index+1) +'</p>' );
				$(".content").append('<img src='+item.images.thumbnail.url+'>'+ '<hr>');

			});
		}
	});
});



