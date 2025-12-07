import { COLORS, SPACING } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as Location from 'expo-location';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

// Sample locations
const LOCATIONS = [
    { id: 1, lat: 21.0285, lng: 105.8542, name: 'Hanoi Opera House', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
    { id: 2, lat: 21.0307, lng: 105.8524, name: 'Hoan Kiem Lake', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
    { id: 3, lat: 21.0333, lng: 105.8499, name: 'Thang Long Water Puppet Theatre', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
    { id: 4, lat: 21.0358, lng: 105.8364, name: 'Ho Chi Minh Mausoleum', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
    { id: 5, lat: 21.0234, lng: 105.8466, name: 'Hanoi Train Street', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
    { id: 6, lat: 20.9983623, lng: 105.8199796, name: 'Tô Viễn Diện', image: 'https://th.bing.com/th/id/R.2b65f875934d56c4e71baad6ff99bdaf?rik=xwTcULmpvopMZA&pid=ImgRaw&r=0' },
];

export default function Map() {
    const webViewRef = useRef<WebView>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLocating, setIsLocating] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<any>(null);

    const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
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

            // Load predefined locations
            var locations = ${JSON.stringify(LOCATIONS)};
            
            locations.forEach(loc => {
                var marker = L.marker([loc.lat, loc.lng]).addTo(map);
                marker.on('click', function(e) {
                    L.DomEvent.stopPropagation(e);
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                        type: 'locationSelected',
                        id: loc.id
                    }));
                });
                markers.push(marker);
            });

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

    const handleLocateMe = async () => {
        setIsLocating(true);
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            if (webViewRef.current) {
                webViewRef.current.injectJavaScript(`
                    window.updateUserLocation(${location.coords.latitude}, ${location.coords.longitude});
                    true;
                `);
            }
        } catch (error) {
            console.error('Error getting location:', error);
        } finally {
            setIsLocating(false);
        }
    };

    const handleMessage = (event: any) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.type === 'navigate') {
                const url = `https://www.google.com/maps/search/?api=1&query=${data.lat},${data.lng}`;
                Linking.openURL(url).catch(err => console.error('An error occurred', err));
            } else if (data.type === 'locationSelected') {
                const location = LOCATIONS.find(l => l.id === data.id);
                setSelectedLocation(location);
            } else if (data.type === 'mapClicked') {
                setSelectedLocation(null);
            }
        } catch (error) {
            console.log('Error parsing message from webview', error);
        }
    };

    const handleNavigateToLocation = () => {
        if (selectedLocation) {
            const url = `https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`;
            Linking.openURL(url).catch(err => console.error('An error occurred', err));
        }
    };

    return (
        <View style={styles.container}>

            {/* Map View */}
            <View style={styles.mapContainer}>
                <WebView
                    ref={webViewRef}
                    source={{ html: mapHtml }}
                    style={styles.webview}
                    onLoadEnd={() => setIsLoading(false)}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    onMessage={handleMessage}
                    renderLoading={() => (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color={COLORS.primary} />
                            <Text style={styles.loadingText}>loading</Text>
                        </View>
                    )}
                />

                {/* Overlay Controls */}
                <View style={styles.controls}>
                    <Pressable style={styles.controlButton} onPress={handleLocateMe} disabled={isLocating}>
                        {isLocating ? (
                            <ActivityIndicator size="small" color={COLORS.primary} />
                        ) : (
                            <Ionicons name="navigate" size={24} color={COLORS.primary} />
                        )}
                    </Pressable>
                </View>


            </View>

            {/* Location Detail Sheet */}
            {selectedLocation && (
                <View style={styles.sheetContainer}>
                    <View style={styles.sheetContent}>
                        <Image source={{ uri: selectedLocation.image }} style={styles.locationImage} contentFit="cover" />
                        <View style={styles.locationInfo}>
                            <Text style={styles.locationName}>{selectedLocation.name}</Text>
                            <Pressable style={styles.navigateButton} onPress={handleNavigateToLocation}>
                                <Ionicons name="map-outline" size={20} color="white" style={{ marginRight: 8 }} />
                                <Text style={styles.navigateButtonText}>Directions</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark.background,
    },
    mapContainer: {
        flex: 1,
        position: 'relative',
    },
    webview: {
        flex: 1,
        backgroundColor: COLORS.dark.background, // Match container bg
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.dark.background,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    loadingText: {
        marginTop: SPACING.md,
        color: COLORS.dark.text,
        fontSize: 16,
    },
    controls: {
        position: 'absolute',
        right: SPACING.lg,
        bottom: 60, // Above info card
        gap: SPACING.md,
    },
    controlButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.light.background,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sheetContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: SPACING.md,
        paddingBottom: SPACING.xl, // Safe area
        backgroundColor: 'transparent',
    },
    sheetContent: {
        backgroundColor: COLORS.light.background,
        borderRadius: 16,
        padding: SPACING.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
    },
    locationImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
    locationInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    locationName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.light.text, // Assuming dark text fits light background
        marginBottom: SPACING.sm,
    },
    navigateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    navigateButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
    },
});
