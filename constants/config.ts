// API Configuration
// Get your API key from https://www.weatherapi.com/
// NOTE: Weather alerts require a paid subscription plan (not available on free tier)
// Free tier includes: current weather, forecast, air quality, and location search
// TEMPORARY: Hardcoded for testing - move back to .env after confirming it works
export const WEATHER_API_KEY = '627b3e776d9c46bd93035813250712';
export const WEATHER_API_BASE_URL = 'https://api.weatherapi.com/v1';

// Map Configuration
export const MAPBOX_API_KEY = 'YOUR_MAPBOX_KEY_HERE'; // Get from https://www.mapbox.com/

// App Configuration
export const APP_NAME = 'Weather Pro';
export const DEFAULT_LOCATION = {
    name: 'Hanoi',
    latitude: 21.0285,
    longitude: 105.8542,
};

// Cache Configuration
export const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds
export const MAX_SAVED_LOCATIONS = 10;

// Weather Condition Mappings
export const WEATHER_CONDITIONS: { [key: string]: string } = {
    1000: 'Sunny',
    1003: 'Partly cloudy',
    1006: 'Cloudy',
    1009: 'Overcast',
    1030: 'Mist',
    1063: 'Patchy rain possible',
    1066: 'Patchy snow possible',
    1069: 'Patchy sleet possible',
    1072: 'Patchy freezing drizzle possible',
    1087: 'Thundery outbreaks possible',
    1114: 'Blowing snow',
    1117: 'Blizzard',
    1135: 'Fog',
    1147: 'Freezing fog',
    1150: 'Patchy light drizzle',
    1153: 'Light drizzle',
    1168: 'Freezing drizzle',
    1171: 'Heavy freezing drizzle',
    1180: 'Patchy light rain',
    1183: 'Light rain',
    1186: 'Moderate rain at times',
    1189: 'Moderate rain',
    1192: 'Heavy rain at times',
    1195: 'Heavy rain',
    1198: 'Light freezing rain',
    1201: 'Moderate or heavy freezing rain',
    1204: 'Light sleet',
    1207: 'Moderate or heavy sleet',
    1210: 'Patchy light snow',
    1213: 'Light snow',
    1216: 'Patchy moderate snow',
    1219: 'Moderate snow',
    1222: 'Patchy heavy snow',
    1225: 'Heavy snow',
    1237: 'Ice pellets',
    1240: 'Light rain shower',
    1243: 'Moderate or heavy rain shower',
    1246: 'Torrential rain shower',
    1249: 'Light sleet showers',
    1252: 'Moderate or heavy sleet showers',
    1255: 'Light snow showers',
    1258: 'Moderate or heavy snow showers',
    1261: 'Light showers of ice pellets',
    1264: 'Moderate or heavy showers of ice pellets',
    1273: 'Patchy light rain with thunder',
    1276: 'Moderate or heavy rain with thunder',
    1279: 'Patchy light snow with thunder',
    1282: 'Moderate or heavy snow with thunder',
};

// UV Index Levels
export const UV_LEVELS = {
    LOW: { max: 2, color: '#4CAF50', label: 'Low' },
    MODERATE: { max: 5, color: '#FFEB3B', label: 'Moderate' },
    HIGH: { max: 7, color: '#FF9800', label: 'High' },
    VERY_HIGH: { max: 10, color: '#F44336', label: 'Very High' },
    EXTREME: { max: 15, color: '#9C27B0', label: 'Extreme' },
};

// Air Quality Index Levels
export const AQI_LEVELS = {
    GOOD: { max: 50, color: '#4CAF50', label: 'Good' },
    MODERATE: { max: 100, color: '#FFEB3B', label: 'Moderate' },
    UNHEALTHY_SENSITIVE: { max: 150, color: '#FF9800', label: 'Unhealthy for Sensitive' },
    UNHEALTHY: { max: 200, color: '#F44336', label: 'Unhealthy' },
    VERY_UNHEALTHY: { max: 300, color: '#9C27B0', label: 'Very Unhealthy' },
    HAZARDOUS: { max: 500, color: '#7B1FA2', label: 'Hazardous' },
};

// Default Settings
export const DEFAULT_SETTINGS = {
    temperatureUnit: 'celsius' as const,
    windSpeedUnit: 'kmh' as const,
    pressureUnit: 'hpa' as const,
    language: 'vi' as const,
    theme: 'auto' as const,
    notificationsEnabled: true,
    alertTypes: {
        storm: true,
        rain: true,
        temperature: true,
        airQuality: true,
    },
};
