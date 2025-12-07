// Modern Color Palette for Weather App

// Weather-based Gradients
export const WEATHER_GRADIENTS = {
    sunny: ['#FFD700', '#FFA500', '#FF6B35'],
    clear_night: ['#1a1a2e', '#16213e', '#0f3460'],
    cloudy: ['#757F9A', '#D7DDE8'],
    rainy: ['#4B79A1', '#283E51'],
    stormy: ['#2C3E50', '#4CA1AF', '#2C5364'],
    snowy: ['#E0EAFC', '#CFDEF3'],
    foggy: ['#606c88', '#3f4c6b'],
    default: ['#667eea', '#764ba2'],
} as const;

// Time-based Gradients
export const TIME_GRADIENTS = {
    sunrise: ['#FF6B6B', '#FFE66D', '#4ECDC4'],
    morning: ['#56CCF2', '#2F80ED'],
    afternoon: ['#667eea', '#764ba2'],
    sunset: ['#FA709A', '#FEE140'],
    night: ['#0F2027', '#203A43', '#2C5364'],
} as const;

// Primary Colors
export const COLORS = {
    // Brand Colors
    primary: '#667eea',
    primaryDark: '#5568d3',
    primaryLight: '#8b9ef7',

    secondary: '#764ba2',
    secondaryDark: '#5d3a81',
    secondaryLight: '#9066c4',

    accent: '#4ECDC4',
    accentDark: '#3db5ad',
    accentLight: '#7ed9d3',

    // Semantic Colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',

    // Neutral Colors - Light Theme
    light: {
        background: '#F8F9FA',
        surface: '#FFFFFF',
        surfaceVariant: '#F5F5F5',
        text: '#1A1A1A',
        textSecondary: '#666666',
        textTertiary: '#999999',
        border: '#E0E0E0',
        divider: '#EEEEEE',
        overlay: 'rgba(0, 0, 0, 0.5)',
    },

    // Neutral Colors - Dark Theme
    dark: {
        background: '#121212',
        surface: '#1E1E1E',
        surfaceVariant: '#2C2C2C',
        text: '#FFFFFF',
        textSecondary: '#B3B3B3',
        textTertiary: '#808080',
        border: '#333333',
        divider: '#2A2A2A',
        overlay: 'rgba(0, 0, 0, 0.7)',
    },

    // Weather Condition Colors
    weather: {
        sunny: '#FFD700',
        cloudy: '#9E9E9E',
        rainy: '#4B79A1',
        stormy: '#455A64',
        snowy: '#E1F5FE',
        foggy: '#78909C',
    },

    // Alert Severity Colors
    alert: {
        minor: '#4CAF50',
        moderate: '#FF9800',
        severe: '#F44336',
        extreme: '#9C27B0',
    },
};

// Opacity Values
export const OPACITY = {
    disabled: 0.38,
    inactive: 0.54,
    active: 0.87,
    full: 1,
};

// Shadow Presets
export const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
};

// Border Radius
export const RADIUS = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
};

// Spacing
export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};
