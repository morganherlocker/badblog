geojson2kml & geojson2shape
===

I released a couple new modules a few days ago and wanted to mention them. The purpose of both of these modules is to convert geojson files out to other formats. Although [turf](/turf) has been my go to "utility belt" module for adding gis functionality, I want to keep in line with the *nix philosophy of small modules. With that in mind, interoperability is not the focus of turf, so these sorts of functions will be offloaded to modules like geojson2kml and geojson2shape.

[geojson2shape](https://github.com/morganherlocker/geojson2shape) takes a geojson file and outputs a collection of files that make up a shape file, or it can output a single zipped archive of all of the files. While shapefiles are pretty clunky (header length limits, for example), shapefiles are nearly universal in the traditional gis community as the lingua franca.

[geojson2kml](https://github.com/morganherlocker/geojson2kml) takes a geojson file and outputs a kml file. KML is the default filetype for google earth, making it a great way to share spatial data with people not as familiar with heavy duty gis.

Both libraries are very simple to use. For example, install geojson2kml like this:

```bash
npm install geojson2kml
```

Then perform the conversion in node.js:

```javascript
var geojson2kml = require('geojson2kml')

geojson2kml('/path/to/polygons.geojson', '/path/to/polygons.kml', function(err){
  if(err) throw err
})
```

---

*11-26-13*