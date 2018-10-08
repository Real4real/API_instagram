$('#btn1').click(function () {
	$("input").val("Hello World");
});

$('#btn2').click(function () {
	alert($("input").val());
});

$("input").click(function () {
	$("button").eq(0).css("background-color","red");
});
// Первый пример. Рабочий
var uu = "https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/53806f58-49a2-4aea-bae9-91ca570e4f4d/public/apis/18293074/versions/307251/files/examples/service_category_collection_example.json";
var uu2 = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";
$.ajaxSetup({
	url: uu,
	type: "GET",
});
$.ajax({
	success: function (data) {
		$(".givemeID").text(data[1].id);
		// console.log(data[1]);

		$(".givemeTitle").text(data[1].title);
		// console.log(data[1]);

		$(".givemeCount").text(data[1].count);
		// console.log(data[1]);

		$(".givemeIcon").css({
			"backgroundImage" : data[1].icon,
		}).text(data[1].icon);
		// console.log(data[1]);
	}
});

// Второй пример. Рабочий
$.ajaxSetup({
	url: uu2,
	type: "GET",
});

$.ajax({
	success: function (data) {
		$(".giveme1").text(data.ask);
		console.log(data);

		$(".giveme2").text(data.open.hour);
		
		
		$(function(){
			if (data.changes.price.day < 0) {
			$(".giveme3").css("color","red");
			}
			else {
				$(".giveme3").css("color","blue");
			}
		});

		$(".giveme3").text(data.changes.price.day);
	}



});

// 3 пример
$.ajaxSetup({
	url: uu2,
	type: "GET",
});

$.ajax({
	success: function (data) {
		$(".giveme11").text(data.changes.price["day"]);
		console.log(data.changes.price);
		

		// $(".giveme3").text(data.changes.price.day);
	}



});
// xml запрос
// window.onload = function () {
// 	$("#loader").hide();

// 	$("#btnLog").click(function () {
// 		$("loader").show();
// 		$.ajax({
// 			type: "GET",
// 			url: "https://www.w3schools.com/xml/note.php",
// 			crossDomain: true,
// 			dataType: "xml",
// 			success: function (data) {
// 				$("#loader").delay(2000).slideUp(600);
// 				$("#to").append($(data).find("to").text())

				
// 			}
// 		});
// 	});
// };

// weather запрос
window.onload = function () {

	$("#btnLog").click(function () {

		$.ajax({
			type: "GET",
			// url: "http://api.openweathermap.org/data/2.5/weather?id=703448&units=metric&APPID=001b0f58045147663b1ea518d34d88b4",
			success: function (data) {
				// $("#loader").show();
				$(".gifspan").show();
			 	// 
			 	if ( !$("#loader").hasClass("i") ) {

			 		// $("#loader").delay(800).slideUp();

			 		setTimeout(function () {
			 			$(".gifspan").slideUp();
			 			$("#loader").addClass("i");
			 			// $("#message").find("b").next().text(data.main.temp);
			 			$("#message").find("b").next().fadeIn().text("36.6");
			 			// console.log(data.main.temp);
			 			console.log("36.6");
			 		},2000);
			 		// $("#loader").delay(800).slideUp();
			 		
			 		
			 		// console.log(data.main.temp);
			 		
			 		// $("#loader").delay(800).slideUp("fast");
				 	
			 	}
			 		

				// console.log(data);

				
			}
		});
	});
};


