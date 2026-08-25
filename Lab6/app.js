import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./style.css"


var map = new L.map("map", {
    center: [18.789368887867635, 98.98506795268068],
    zoom: 14
})

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var maker1 = new L.marker([18.789368887867635, 98.98506795268068]).bindPopup("คูเมืองเชียงใหม่")
var maker2 = new L.marker([18.797295534999886, 98.9565898235927]).bindPopup("สนามกลางมหาวิทยาลัยเชียงใหม่")
var roadGeom = [
    [18.80261433445879, 98.95150329620158],
    [18.803956147360335, 98.94904529579085],
    [18.808373529912714, 98.95473041883957],
    [18.795971861647047, 98.97829659475588],
    [18.795474577575884, 98.99381562846816]
];
var line = new L.polyline(roadGeom, { color: "#E87F24" }).addTo(map).bindPopup("ถนนสายหลัก")

var angGeom = [
    [18.807427649125515, 98.95133056151214],
    [18.806401890381178, 98.95130910384086],
    [18.805406593740276, 98.95046152582539],
    [18.804962194702238, 98.94922516169349],
    [18.805518311003517, 98.94833721636888],
    [18.806533919085084, 98.9480046224641],
    [18.806564387232815, 98.94870199678061],
    [18.80748858509174, 98.94891657349339],
    [18.808615896502804, 98.94945301528081],
    [18.808554960944914, 98.9500001858984],
    [18.807752640707438, 98.95017184726862],
    [18.808128411421634, 98.95042933932396],
    [18.807427649125515, 98.95133056151214]
]
var angkeaw = new L.polygon([angGeom], { color: "#B331F1", fillColor: "#FF84BA", fillOpacity: 0.5 }).addTo(map).bindPopup("อ่างแก้ว");

var amphoe = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_amphoe_4326",
    format: "image/png",
    transparent: true,
    bindPopup: function (layer) {
        var props = layer.feature.properties;
        var popupContent = "<b>อำเภอ: </b>" + props.amphoe_t + "<br>" +
            "<b>จังหวัด: </b>" + props.province_t + "<br>" +
            "<b>รหัสอำเภอ: </b>" + props.amphoe_c;
        layer.bindPopup(popupContent);
    }


})
var village = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_village_4326",
    format: "image/png",
    transparent: true,
})
var trans = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_trans_4326",
    format: "image/png",
    transparent: true,
})
var landuse = new L.tileLayer.wms("https://engrids.soc.cmu.ac.th/geoserver/cm_dwr/wms?", {
    layers: "cm_dwr:cm_dwr_landuse_4326",
    format: "image/png",
    transparent: true,
    opacity: 0.3
})


var baseMaps = {
    "Esri_WorldImagery": Esri_WorldImagery.addTo(map),
    "osm": osm
}
var overlay = {
    "Maker1": maker1.addTo(map),
    "ม๊ากเก้อร์2": maker2.addTo(map),
    "ถนน": line,
    "อ่างแก้ว": angkeaw.addTo(map),
    "ขอบเขตอำเภอ": amphoe.addTo(map),
    "การใช้ที่ดิน": landuse.addTo(map),
    "หมู่บ้าน": village.addTo(map),
    "ถนน": trans.addTo(map)
}

L.control.layers(baseMaps, overlay).addTo(map)

map.on("click", (e) => {
    console.log(e.latlng)
    document.getElementById("lat").innerHTML = e.latlng.lat
    document.getElementById("lng").innerHTML = e.latlng.lng
})