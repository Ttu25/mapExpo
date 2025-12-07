// Translation system for the app

export const translations = {
    vi: {
        // Authentication
        auth: {
            login: 'Đăng nhập',
            register: 'Đăng ký',
            email: 'Email',
            password: 'Mật khẩu',
            confirmPassword: 'Xác nhận mật khẩu',
            fullName: 'Họ và tên',
            forgotPassword: 'Quên mật khẩu?',
            noAccount: 'Chưa có tài khoản?',
            haveAccount: 'Đã có tài khoản?',
            signIn: 'Đăng nhập',
            signUp: 'Đăng ký',
            loginSuccess: 'Đăng nhập thành công!',
            registerSuccess: 'Đăng ký thành công!',
        },

        // Tabs
        tabs: {
            home: 'Trang chủ',
            hourly: 'Theo giờ',
            daily: 'Theo ngày',
            alerts: 'Cảnh báo',
            maps: 'Bản đồ',
        },

        // Home Screen
        home: {
            currentWeather: 'Thời tiết hiện tại',
            feelsLike: 'Cảm giác như',
            humidity: 'Độ ẩm',
            wind: 'Gió',
            windSpeed: 'Tốc độ gió',
            pressure: 'Áp suất',
            cloudCover: 'Độ che phủ mây',
            updated: 'Cập nhật',
            visibility: 'Tầm nhìn',
            uvIndex: 'Chỉ số UV',
            sunrise: 'Bình minh',
            sunset: 'Hoàng hôn',
            airQuality: 'Chất lượng không khí',
            good: 'Tốt',
            moderate: 'Trung bình',
            unhealthySensitive: 'Không tốt cho nhóm nhạy cảm',
            unhealthy: 'Không tốt',
            veryUnhealthy: 'Rất không tốt',
            hazardous: 'Nguy hại',
        },

        // Hourly Forecast
        hourly: {
            title: 'Dự báo theo giờ',
            subtitle: '24 giờ tới',
            now: 'Bây giờ',
            rainChance: 'Khả năng mưa',
        },

        // Daily Forecast
        daily: {
            title: 'Dự báo 7 ngày',
            subtitle: 'Dự báo thời tiết tuần tới',
            today: 'Hôm nay',
            tomorrow: 'Ngày mai',
            high: 'Cao',
            low: 'Thấp',
        },

        // Alerts
        alerts: {
            title: 'Cảnh báo thời tiết',
            active: 'cảnh báo đang hoạt động',
            noAlerts: 'Không có cảnh báo',
            noAlertsDesc: 'Bạn sẽ được thông báo khi có điều kiện thời tiết cần chú ý',
            severity: {
                extreme: 'Cực kỳ nghiêm trọng',
                severe: 'Nghiêm trọng',
                moderate: 'Trung bình',
                minor: 'Nhẹ',
            },
        },

        // Maps
        maps: {
            title: 'Bản đồ thời tiết',
            comingSoon: 'Tính năng bản đồ tương tác sắp ra mắt!',
            description: 'Xem độ che phủ mây, lượng mưa, nhiệt độ và gió trên bản đồ tương tác.',
        },

        // Settings
        settings: {
            title: 'Cài đặt',
            units: 'Đơn vị',
            temperature: 'Nhiệt độ',
            windSpeed: 'Tốc độ gió',
            pressure: 'Áp suất',
            language: 'Ngôn ngữ',
            selectLanguage: 'Chọn ngôn ngữ',
            theme: 'Giao diện',
            notifications: 'Thông báo',
            enableNotifications: 'Bật thông báo',
            alertTypes: 'Loại cảnh báo',
            storm: 'Bão',
            rain: 'Mưa',
            temperatureAlerts: 'Nhiệt độ',
            airQuality: 'Chất lượng không khí',
            account: 'Tài khoản',
            logout: 'Đăng xuất',
            celsius: 'Độ C',
            fahrenheit: 'Độ F',
            kmh: 'km/h',
            mph: 'mph',
            ms: 'm/s',
            hpa: 'hPa',
            inhg: 'inHg',
            vietnamese: 'Tiếng Việt',
            english: 'English',
            auto: 'Tự động',
            light: 'Sáng',
            dark: 'Tối',
        },

        // Location
        location: {
            currentLocation: 'Vị trí hiện tại',
            searchLocation: 'Tìm kiếm vị trí...',
            savedLocations: 'Vị trí đã lưu',
            addLocation: 'Thêm vị trí',
            useGPS: 'Sử dụng GPS',
            noLocations: 'Chưa có vị trí nào',
            noLocationsDesc: 'Thêm vị trí để theo dõi thời tiết',
        },

        // Weather Conditions
        weather: {
            sunny: 'Nắng',
            partlyCloudy: 'Có mây',
            cloudy: 'Nhiều mây',
            overcast: 'U ám',
            mist: 'Sương mù',
            rain: 'Mưa',
            lightRain: 'Mưa nhẹ',
            heavyRain: 'Mưa to',
            thunderstorm: 'Giông bão',
            snow: 'Tuyết',
            fog: 'Sương mù dày',
            clear: 'Quang đãng',
        },

        // Days of week
        days: {
            monday: 'Thứ 2',
            tuesday: 'Thứ 3',
            wednesday: 'Thứ 4',
            thursday: 'Thứ 5',
            friday: 'Thứ 6',
            saturday: 'Thứ 7',
            sunday: 'Chủ nhật',
        },

        // Common
        common: {
            loading: 'Đang tải...',
            error: 'Lỗi',
            retry: 'Thử lại',
            cancel: 'Hủy',
            save: 'Lưu',
            delete: 'Xóa',
            edit: 'Sửa',
            done: 'Xong',
            back: 'Quay lại',
            next: 'Tiếp theo',
            skip: 'Bỏ qua',
            refresh: 'Làm mới',
        },

        // Errors
        errors: {
            networkError: 'Lỗi kết nối mạng',
            invalidApiKey: 'API key không hợp lệ. Vui lòng cấu hình API key trong constants/config.ts',
            locationPermission: 'Cần quyền truy cập vị trí',
            fetchWeatherFailed: 'Không thể tải dữ liệu thời tiết',
            fetchForecastFailed: 'Không thể tải dự báo',
            fetchAirQualityFailed: 'Không thể tải chất lượng không khí',
        },
    },

    en: {
        // Authentication
        auth: {
            login: 'Login',
            register: 'Register',
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm Password',
            fullName: 'Full Name',
            forgotPassword: 'Forgot Password?',
            noAccount: "Don't have an account?",
            haveAccount: 'Already have an account?',
            signIn: 'Sign In',
            signUp: 'Sign Up',
            loginSuccess: 'Login successful!',
            registerSuccess: 'Registration successful!',
        },

        // Tabs
        tabs: {
            home: 'Home',
            hourly: 'Hourly',
            daily: 'Daily',
            alerts: 'Alerts',
            maps: 'Maps',
        },

        // Home Screen
        home: {
            currentWeather: 'Current Weather',
            feelsLike: 'Feels like',
            humidity: 'Humidity',
            wind: 'Wind',
            windSpeed: 'Wind Speed',
            pressure: 'Pressure',
            cloudCover: 'Cloud Cover',
            updated: 'Updated',
            visibility: 'Visibility',
            uvIndex: 'UV Index',
            sunrise: 'Sunrise',
            sunset: 'Sunset',
            airQuality: 'Air Quality',
            good: 'Good',
            moderate: 'Moderate',
            unhealthySensitive: 'Unhealthy for Sensitive',
            unhealthy: 'Unhealthy',
            veryUnhealthy: 'Very Unhealthy',
            hazardous: 'Hazardous',
        },

        // Hourly Forecast
        hourly: {
            title: 'Hourly Forecast',
            subtitle: 'Next 24 hours',
            now: 'Now',
            rainChance: 'Rain chance',
        },

        // Daily Forecast
        daily: {
            title: '7-Day Forecast',
            subtitle: 'Weather forecast for the week',
            today: 'Today',
            tomorrow: 'Tomorrow',
            high: 'High',
            low: 'Low',
        },

        // Alerts
        alerts: {
            title: 'Weather Alerts',
            active: 'active alerts',
            noAlerts: 'No active weather alerts',
            noAlertsDesc: "You'll be notified when weather conditions require attention",
            severity: {
                extreme: 'Extreme',
                severe: 'Severe',
                moderate: 'Moderate',
                minor: 'Minor',
            },
        },

        // Maps
        maps: {
            title: 'Weather Maps',
            comingSoon: 'Interactive weather maps feature coming soon!',
            description: 'View cloud coverage, precipitation, temperature, and wind patterns on interactive maps.',
        },

        // Settings
        settings: {
            title: 'Settings',
            units: 'Units',
            temperature: 'Temperature',
            windSpeed: 'Wind Speed',
            pressure: 'Pressure',
            language: 'Language',
            selectLanguage: 'Select Language',
            theme: 'Theme',
            notifications: 'Notifications',
            enableNotifications: 'Enable Notifications',
            alertTypes: 'Alert Types',
            storm: 'Storm',
            rain: 'Rain',
            temperatureAlerts: 'Temperature',
            airQuality: 'Air Quality',
            account: 'Account',
            logout: 'Logout',
            celsius: 'Celsius',
            fahrenheit: 'Fahrenheit',
            kmh: 'km/h',
            mph: 'mph',
            ms: 'm/s',
            hpa: 'hPa',
            inhg: 'inHg',
            vietnamese: 'Vietnamese',
            english: 'English',
            auto: 'Auto',
            light: 'Light',
            dark: 'Dark',
        },

        // Location
        location: {
            currentLocation: 'Current Location',
            searchLocation: 'Search location...',
            savedLocations: 'Saved Locations',
            addLocation: 'Add Location',
            useGPS: 'Use GPS',
            noLocations: 'No saved locations',
            noLocationsDesc: 'Add locations to track weather',
        },

        // Weather Conditions
        weather: {
            sunny: 'Sunny',
            partlyCloudy: 'Partly Cloudy',
            cloudy: 'Cloudy',
            overcast: 'Overcast',
            mist: 'Mist',
            rain: 'Rain',
            lightRain: 'Light Rain',
            heavyRain: 'Heavy Rain',
            thunderstorm: 'Thunderstorm',
            snow: 'Snow',
            fog: 'Fog',
            clear: 'Clear',
        },

        // Days of week
        days: {
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
        },

        // Common
        common: {
            loading: 'Loading...',
            error: 'Error',
            retry: 'Retry',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            edit: 'Edit',
            done: 'Done',
            back: 'Back',
            next: 'Next',
            skip: 'Skip',
            refresh: 'Refresh',
        },

        // Errors
        errors: {
            networkError: 'Network error',
            invalidApiKey: 'Invalid API key. Please set a valid WeatherAPI.com API key in constants/config.ts',
            locationPermission: 'Location permission required',
            fetchWeatherFailed: 'Failed to fetch weather data',
            fetchForecastFailed: 'Failed to fetch forecast',
            fetchAirQualityFailed: 'Failed to fetch air quality',
        },
    },
};

// Get translation by key
export const t = (key: string, lang: 'vi' | 'en' = 'vi'): string => {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
};

export type Language = 'vi' | 'en';
