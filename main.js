const darr = ["images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"]
const marr = ["images/mobile-image-hero-1.jpg", "images/mobile-image-hero-2.jpg", "images/mobile-image-hero-3.jpg"]
var i = 0;

var isMobile = (window.getComputedStyle(document.getElementById("menu")).display === "block");
document.getElementById("img-change").setAttribute("src", isMobile ? marr[i] : darr[i]);
document.getElementById("right").onclick = () => {
	i+=(i < 2);
	document.getElementById("img-change").setAttribute("src", isMobile ? marr[i] : darr[i]);
}
document.getElementById("left").onclick = () => {
	i-=(i >= 1);
	document.getElementById("img-change").setAttribute("src", isMobile ? marr[i] : darr[i]);
}
document.getElementById("menu").addEventListener("click", () => {
	document.getElementById("mo-nav").style.display = "block";
});
document.getElementById("close").addEventListener("click", () => {
	document.getElementById("mo-nav").style.display = "none";
});