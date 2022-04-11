// leaflet helper
if(L) {
	// deafult icon image path
	L.Icon.Default.imagePath = './img/leaflet-images/';
}


var ucsb_coord = L.latLng(34.416, -119.845);
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mymap = L.map('mapid').setView([35, 0], 2);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			maxNativeZoom: 19,
			maxZoom: 14,
			detectRetina: true,
		}).addTo(mymap);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mymap);


var whu_pt = L.marker([30.525411, 114.360382]).addTo(mymap);
whu_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2011/09 - 2015/09</b></p>
		<p class="col-md-5"><b>Wuhan Univ.</b></p>
	</div>
	<img class="popupImg" src="img/footprint/1-Student_Union.JPG" >
	
	`);

var ucsb_pt = L.marker(ucsb_coord).addTo(mymap);
ucsb_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2015/09 - present</b></p>
		<p class="col-md-5"><b>STKO Lab</b></p>
	</div>
	<img class="popupImg" src="img/footprint/3-UCSB.JPG" >
	
	`);

var aag2016_pt = L.marker([37.785292, -122.404377]).addTo(mymap);
aag2016_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2016/03/29 - 2016/04/02</b></p>
		<p class="col-md-5"><b>AAG 2016</b></p>
	</div>
	<img class="popupImg" src="img/footprint/4-AAG2016.jpg" >
	
	`);

var rw2016_pt = L.marker([57.165321, -2.101341]).addTo(mymap);
rw2016_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2016/09/05 - 2016/09/09</b></p>
		<p class="col-md-5"><b>RW 2016</b></p>
	</div>
	<img class="popupImg" src="img/footprint/5-Aberdeen.jpg" >
	
	`);

var gis2016_pt = L.marker([45.497892, -73.567622]).addTo(mymap);
gis2016_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2016/09/27 - 2016/09/30</b></p>
		<p class="col-md-5"><b>GIScience 2016</b></p>
	</div>
	<img class="popupImg" src="img/footprint/6-GIScience2016STKO.jpg" >
	
	`);

var acm2016_pt = L.marker([37.603085, -122.371003]).addTo(mymap);
acm2016_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2016/10/31 - 2016/11/03</b></p>
		<p class="col-md-5"><b>ACM SIGSPATIAL 2016</b></p>
	</div>
	<img class="popupImg" src="img/footprint/7-ACMGIS2016.jpeg" >
	
	`);

var aag2017_pt = L.marker([42.346959, -71.079178]).addTo(mymap);
aag2017_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2017/04/05 - 2017/04/09</b></p>
		<p class="col-md-5"><b>AAG 2017</b></p>
	</div>
	<img class="popupImg" src="img/footprint/8-AAG2017.jpeg" >
	
	`);

var esri2017_pt = L.marker([34.058698, -117.194745]).addTo(mymap);
esri2017_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>06/27/2017 - 09/15/2017</b></p>
		<p class="col-md-5"><b>Esri Intern</b></p>
	</div>
	<img class="popupImg" src="img/footprint/9-esri2017.jpeg" >
	
	`);

var acm2017_pt = L.marker([33.845683, -118.392426]).addTo(mymap);
acm2017_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2017/11/07 - 2017/11/10</b></p>
		<p class="col-md-5"><b>ACM SIGSPATIAL 2017</b></p>
	</div>
	<img class="popupImg" src="img/footprint/10-acm2017.jpeg" >
	
	`);

var us2ts2018_pt = L.marker([39.780309, -84.062931]).addTo(mymap);
us2ts2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/03/01 - 2018/03/02</b></p>
		<p class="col-md-5"><b>US2TS 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/11-US2TS2018.jpeg" >
	
	`);

var aag2018_pt = L.marker([29.952639, -90.067650]).addTo(mymap);
aag2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/04/10 - 2018/04/14</b></p>
		<p class="col-md-5"><b>AAG 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/12-AAG2018.jpeg" >
	
	`);

var agile2018_pt = L.marker([55.711882, 13.206667]).addTo(mymap);
agile2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/06/12 - 2017/06/15</b></p>
		<p class="col-md-5"><b>AGILE 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/13-AGILE2018.JPG" >
	
	`);


var giscience2018_pt = L.marker([-37.809195, 144.964034]).addTo(mymap);
giscience2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/08/27 - 2018/08/31</b></p>
		<p class="col-md-5"><b>GIScience 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/14-GIScience2018.JPG" >
	
	`);

var mosaix_pt = L.marker([37.431038, -122.101223]).addTo(mymap);
mosaix_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/06/18 - 2018/09/21</b></p>
		<p class="col-md-5"><b>Mosaix.ai Intern</b></p>
	</div>
	<img class="popupImg" src="img/footprint/15-Mosaix.ai.JPG" >
	
	`);

var iswc2018_pt = L.marker([36.619204, -121.937241]).addTo(mymap);
iswc2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/10/08 - 2018/10/12</b></p>
		<p class="col-md-5"><b>ISWC 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/16-ISWC2018_1.JPG" >
	<img class="popupImg" src="img/footprint/16-ISWC2018_2.JPG" >
	<img class="popupImg" src="img/footprint/16-ISWC2018_3.JPG" >
	<img class="popupImg" src="img/footprint/16-ISWC2018_4.JPG" >
	
	`);

var iot2018_pt = L.marker([34.420449, -119.702632]).addTo(mymap);
iot2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/10/15 - 2018/10/18</b></p>
		<p class="col-md-5"><b>IOT 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/17-IOT2018.JPG" >
	
	`);

var acm2018_pt = L.marker([47.610823, -122.347271]).addTo(mymap);
acm2018_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/10/15 - 2018/10/18</b></p>
		<p class="col-md-5"><b>ACM SIGSPATIAL 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/18-ACMSIGSPATIAL2018.JPG" >
	
	`);

var ekaw2018_1_pt = L.marker([48.665523, 6.157723]).addTo(mymap);
ekaw2018_1_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/11/12 - 2018/11/16</b></p>
		<p class="col-md-5"><b>EKAW 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/19-EKAW2018_1.JPG" >
	
	`);

var ekaw2018_2_pt = L.marker([48.858285, 2.294578]).addTo(mymap);
ekaw2018_2_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2018/11/12 - 2018/11/16</b></p>
		<p class="col-md-5"><b>EKAW 2018</b></p>
	</div>
	<img class="popupImg" src="img/footprint/19-EKAW2018_2.JPG" >
	
	`);

var aag2019_pt = L.marker([38.924792, -77.054621]).addTo(mymap);
aag2019_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2019/07/08 - 2019/07/13</b></p>
		<p class="col-md-5"><b>AAG 2019</b></p>
	</div>
	<img class="popupImg" src="img/footprint/20-AAG2019.JPG" >
	
	`);

var esriuc2019_pt = L.marker([32.707165, -117.162520]).addTo(mymap);
esriuc2019_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2019/04/03 - 2019/04/07</b></p>
		<p class="col-md-5"><b>Esri UC 2019</b></p>
	</div>
	<img class="popupImg" src="img/footprint/21-EsriUC2019.JPG" >
	
	`);

var kcap2019_pt = L.marker([33.982258, -118.459662]).addTo(mymap);
kcap2019_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2019/11/19 - 2019/11/21</b></p>
		<p class="col-md-5"><b>K-CAP 2019</b></p>
	</div>
	<img class="popupImg" src="img/footprint/22-KCAP2019.jpg" >
	
	`);

var sdss2019_pt = L.marker([34.423443, -119.709247]).addTo(mymap);
sdss2019_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2019/12/09 - 2019/12/11</b></p>
		<p class="col-md-5"><b>SDSS 2019</b></p>
	</div>
	<img class="popupImg" src="img/footprint/23-SDSS2019_1.JPG" >
	<img class="popupImg" src="img/footprint/23-SDSS2019_2.JPG" >
	
	`);


var phd2021_pt = L.marker([34.41, -119.845]).addTo(mymap);
phd2021_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-7"><b>2021/06/14</b></p>
		<p class="col-md-5"><b>Gengchen Mai's Final PhD Defense</b></p>
	</div>
	<img class="popupImg" src="img/footprint/24-PhD-Defense2021_1.png" >
	<img class="popupImg" src="img/footprint/24-PhD-Defense2021_2.png" >
	<img class="popupImg" src="img/footprint/24-PhD-Defense2021_3.png" >
	<img class="popupImg" src="img/footprint/24-PhD-Defense2021_4.JPG" >
	
	
	`);


var stanfordai2022_pt = L.marker([37.43, -122.173]).addTo(mymap);
stanfordai2022_pt.bindPopup(`
	<div class="row" style="margin-top:-20px">
		<p class="col-md-3"><b>2021/10/01</b></p>
		<p class="col-md-9"><b>Postdoc at Stanford AI Lab, Ermon's Group</b></p>
	</div>
	<img class="popupImg" src="img/footprint/25-Stanford-Gates.jpg" >
	
	`).openPopup(); 

// <div class="row" style="margin-top:-20px">
// 	<img class="popupImg col-md-5" style="height:150px;width:auto" src="img/footprint/25-Stanford-Gates.jpg" >
// 	<img class="popupImg col-md-5" style="height:250px;width:auto" src="img/footprint/25-Stanford-office.jpg" >
// <img class="popupImg col-md-5" style="height:250px;width:auto" src="img/footprint/25-Stanford-selfie.JPG" >
// 	</div>