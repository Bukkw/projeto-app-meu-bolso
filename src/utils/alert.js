import { Alert, Platform } from 'react-native';

// Alert.alert não faz nada no navegador; no web usamos window.alert
export function showAlert(title, message = '') {
    if (Platform.OS === 'web') {
        window.alert(message ? `${title}\n${message}` : title);
    } else {
        Alert.alert(title, message);
    }
}
