export default function MapWebView({ LOCATIONS }: any) {
    const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
        
        <!-- Leaflet.markercluster assets -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css" />
        <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>

        <style>
            body { margin: 0; padding: 0; height: 100vh; width: 100vw; }
            #map { height: 100%; width: 100%; }
            .leaflet-popup-content {
                text-align: center;
            }
            .btn-navigate {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 5px;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script>
            var map = L.map('map', {
                zoomControl: false,
                attributionControl: false
            }).setView([21.0285, 105.8542], 13);

            map.on('click', function() {
                 window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'mapClicked'
                 }));
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            var markers = [];
            var userMarker;
            
            // Initialize Marker Cluster Group
            var markersCluster = L.markerClusterGroup();

            // Load predefined locations
            var locations = ${JSON.stringify(LOCATIONS)};
            
            locations.forEach(loc => {
                var marker = L.marker([loc.lat, loc.lng]);
                marker.on('click', function(e) {
                    L.DomEvent.stopPropagation(e);
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                        type: 'locationSelected',
                        id: loc.id
                    }));
                });
                markersCluster.addLayer(marker);
                markers.push(marker);
            });
            
            // Add cluster group to map instead of individual markers
            map.addLayer(markersCluster);

            function openMaps(lat, lng) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'navigate',
                    lat: lat,
                    lng: lng
                }));
            }

            // Function to update user location
            window.updateUserLocation = function(lat, lng) {
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                
                // Different icon or color for user could be added here
                userMarker = L.circleMarker([lat, lng], {
                    radius: 8,
                    fillColor: "#3388ff",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);
                
                map.flyTo([lat, lng], 15, {
                    animate: true,
                    duration: 1.5
                });
            }
        </script>
    </body>
    </html>
    `;

    return mapHtml;
}