var lat = 21.422487;
var lng = 39.826206;

function onMapClick(e) {
	popup.setLatLng(e.latlng)
	.setContent("Current position: " + e.latlng.toString())
	.openOn(mymap);
}

var mymap = L.map('mapid').setView([lat, lng], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
	{
		attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 14,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYWRuYW5iYXl1YWppIiwiYSI6ImNqbjJ4YXZicjUwYXIzeHFjbjVjOWdqbGEifQ.jxm0221UsEPeiOJPEh6lQw'
	}).addTo(mymap);
mymap.on('click', onMapClick);

var marker = L.marker([lat, lng]).addTo(mymap);
marker.bindPopup("<b>Ka'bah</b><br>World's Most Powerful Du'a!").openPopup();

var circle = L.circle([lat, lng], {
	color: '#add8e6',
	fillColor: '#add8e6',
	fillOpacity: 0.5,
	radius: 100
}).addTo(mymap);

var popup = L.popup();