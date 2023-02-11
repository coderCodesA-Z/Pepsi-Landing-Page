const pepsi = [
	{
		name: "Pepsi Diet",
		amount: "350cl",
		amount_per: "8.6%",
		fat: "1g",
		fat_per: "0.3%",
		sodium: "310mg",
		sodium_per: "1%",
		carbohydrate: "48g",
		carbohydrate_per: "15.3%",
		protein: "0g",
		protein_per: "0%",
		ml: "250ml",
		poster1: "img/1 Pespi white.png",
		poster2: "img/1 Pespi blue.png",
		main_poster: "img/pepsi diet.png",
	},
	{
		name: "Pepsi Classic",
		amount: "330cl",
		amount_per: "7.5%",
		fat: "3g",
		fat_per: "0.7%",
		sodium: "30mg",
		sodium_per: "1%",
		carbohydrate: "41g",
		carbohydrate_per: "14%",
		protein: "0g",
		protein_per: "0%",
		ml: "330 ml",
		poster1: "img/2 can white.png",
		poster2: "img/2 can blue.png",
		main_poster: "img/can.png",
	},
	{
		name: "Pepsi 500 ML",
		amount: "350cl",
		amount_per: "12.9%",
		fat: "4g",
		fat_per: "0.9%",
		sodium: "40mg",
		sodium_per: "2%",
		carbohydrate: "52g",
		carbohydrate_per: "21.7%",
		protein: "0g",
		protein_per: "0%",
		ml: "500 ml",
		poster1: "img/3 Pepsi white.png",
		poster2: "img/3 Pepsi blue.png",
		main_poster: "img/pepsi .5ltr.png",
	},
	{
		name: "Pepsi 1 LTR",
		amount: "510cl",
		amount_per: "16.3%",
		fat: "4g",
		fat_per: "0.9%",
		sodium: "49mg",
		sodium_per: "2%",
		carbohydrate: "61g",
		carbohydrate_per: "27.4%",
		protein: "0g",
		protein_per: "0%",
		ml: "1 LTR",
		poster1: "img/4 Pepsi white.png",
		poster2: "img/4 Pepsi blue.png",
		main_poster: "img/pepsi 1ltr.png",
	},
	{
		name: "Pepsi 1.5 LTR",
		amount: " 625cl",
		amount_per: "19.4%",
		fat: "5g",
		fat_per: "1.2%",
		sodium: "50mg",
		sodium_per: "3%",
		carbohydrate: "66g",
		carbohydrate_per: "30.8%",
		protein: "0g",
		protein_per: "0%",
		ml: "1.5 LTR",
		poster1: "img/5 Pepsi white.png",
		poster2: "img/5 Pepsi blue.png",
		main_poster: "img/pepsi 1.5ltr.png",
	},
	{
		name: "Pepsi 2 LTR",
		amount: "729cl",
		amount_per: "37.2%",
		fat: "7g",
		fat_per: "1.7%",
		sodium: "60mg",
		sodium_per: "4%",
		carbohydrate: "69g",
		carbohydrate_per: "33.2%",
		protein: "0g",
		protein_per: "0%",
		ml: "2 LTR",
		poster1: "img/6 Pepsi white.png",
		poster2: "img/6 Pepsi blue.png",
		main_poster: "img/pepsi 2ltr.png",
	},
];

let idx2 = 1;
document.getElementsByClassName("pepsi-hover-img")[idx2].src =
	pepsi[idx2].poster1;

document.getElementsByClassName("pepsi-hover-title")[idx2].style.color = "#fff";

Array.from(document.getElementsByClassName("card_pepsi")).forEach((el, idx) => {
	el.addEventListener("mouseover", () => {
		document.getElementsByClassName("pepsi-hover-img")[idx].src =
			pepsi[idx].poster1;

		document.getElementsByClassName("pepsi-hover-title")[idx].style.color =
			"#fff";
	});
	el.addEventListener("mouseout", () => {
		if (idx === idx2) return;
		document.getElementsByClassName("pepsi-hover-img")[idx].src =
			pepsi[idx].poster2;
		document.getElementsByClassName("pepsi-hover-title")[idx].style.color =
			"#2c6cbb";
	});
});

Array.from(document.getElementsByClassName("card_pepsi")).forEach((el, idx) => {
	el.addEventListener("click", () => {
		idx2 = idx;
		Array.from(document.getElementsByClassName("card_pepsi")).forEach(el => {
            
        })

		document.getElementsByClassName("pepsi-hover-img")[idx].src =
			pepsi[idx].poster1;

		document.getElementsByClassName("pepsi-hover-title")[idx].style.color =
			"#fff";

		// console.log(document.getElementsByClassName("pepsi-hover-img")[idx]);
		// console.log(document.getElementsByClassName("pepsi-hover-title")[idx]);

		document.getElementById("main-bottle").src = pepsi[idx].main_poster;

		document.getElementById("main-title").innerText = pepsi[idx].name;

		document.getElementById("ml-title").innerText = pepsi[idx].ml;

		document.getElementById("cl").innerText = pepsi[idx].amount;
		document.getElementById("cl-per").innerText = pepsi[idx].amount_per;

		document.getElementById("fat").innerText = pepsi[idx].fat;
		document.getElementById("fat-per").innerText = pepsi[idx].fat_per;

		document.getElementById("sodium").innerText = pepsi[idx].sodium;
		document.getElementById("sodium-per").innerText = pepsi[idx].sodium_per;

		document.getElementById("carb").innerText = pepsi[idx].carbohydrate;
		document.getElementById("carb-per").innerText =
			pepsi[idx].carbohydrate_per;

		document.getElementById("protein").innerText = pepsi[idx].protein;
		document.getElementById("protein-per").innerText =
			pepsi[idx].protein_per;
	});
});

document.getElementById("left-cont-btn").addEventListener("click", () => {
	document.getElementsByClassName("pepsi-hover-img")[idx2].src =
		pepsi[idx2].poster2;
	document.getElementsByClassName("pepsi-hover-title")[idx2].style.color =
		"#2c6cbb";
	idx2--;
	if (idx2 < 0) idx2 = pepsi.length - 1;

	document.getElementsByClassName("pepsi-hover-img")[idx2].src =
		pepsi[idx2].poster1;
	document.getElementsByClassName("pepsi-hover-title")[idx2].style.color =
		"#fff";

	document.getElementById("main-bottle").src = pepsi[idx2].main_poster;

	document.getElementById("main-title").innerText = pepsi[idx2].name;

	document.getElementById("ml-title").innerText = pepsi[idx2].ml;

	document.getElementById("cl").innerText = pepsi[idx2].amount;
	document.getElementById("cl-per").innerText = pepsi[idx2].amount_per;

	document.getElementById("fat").innerText = pepsi[idx2].fat;
	document.getElementById("fat-per").innerText = pepsi[idx2].fat_per;

	document.getElementById("sodium").innerText = pepsi[idx2].sodium;
	document.getElementById("sodium-per").innerText = pepsi[idx2].sodium_per;

	document.getElementById("carb").innerText = pepsi[idx2].carbohydrate;
	document.getElementById("carb-per").innerText =
		pepsi[idx2].carbohydrate_per;

	document.getElementById("protein").innerText = pepsi[idx2].protein;
	document.getElementById("protein-per").innerText = pepsi[idx2].protein_per;
});

document.getElementById("right-cont-btn").addEventListener("click", () => {
	document.getElementsByClassName("pepsi-hover-img")[idx2].src =
		pepsi[idx2].poster2;
	document.getElementsByClassName("pepsi-hover-title")[idx2].style.color =
		"#2c6cbb";

	idx2 = ++idx2 % pepsi.length;

	document.getElementsByClassName("pepsi-hover-img")[idx2].src =
		pepsi[idx2].poster1;
	document.getElementsByClassName("pepsi-hover-title")[idx2].style.color =
		"#fff";

	document.getElementById("main-bottle").src = pepsi[idx2].main_poster;

	document.getElementById("main-title").innerText = pepsi[idx2].name;

	document.getElementById("ml-title").innerText = pepsi[idx2].ml;

	document.getElementById("cl").innerText = pepsi[idx2].amount;
	document.getElementById("cl-per").innerText = pepsi[idx2].amount_per;

	document.getElementById("fat").innerText = pepsi[idx2].fat;
	document.getElementById("fat-per").innerText = pepsi[idx2].fat_per;

	document.getElementById("sodium").innerText = pepsi[idx2].sodium;
	document.getElementById("sodium-per").innerText = pepsi[idx2].sodium_per;

	document.getElementById("carb").innerText = pepsi[idx2].carbohydrate;
	document.getElementById("carb-per").innerText =
		pepsi[idx2].carbohydrate_per;

	document.getElementById("protein").innerText = pepsi[idx2].protein;
	document.getElementById("protein-per").innerText = pepsi[idx2].protein_per;
});
