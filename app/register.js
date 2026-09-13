import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';

import { useRouter } from 'expo-router';

import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View>
                <Text style={styles.title}>
                    Criar nova conta
                </Text>

                <Text style={styles.subtitle}>
                    Preencha os dados para começar
                </Text>

                <AppInput
                    label="Email"
                    placeholder="seu@email.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <AppInput
                    label="Senha"
                    secureTextEntry
                    placeholder="******"
                    value={password}
                    onChangeText={setPassword}
                />

                <AppInput
                    label="Confirmar senha"
                    secureTextEntry
                    placeholder="******"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <AppButton
                    title="Cadastrar"
                    loading={loading}
                />

                <TouchableOpacity onPress={()=>router.push('/')}>
                    <Text style={styles.link}>Voltar para o login</Text>            
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f8f9fa',
    },

    title: {
        fontSize: 34,
        fontWeight: '900',
        color: '#2f3640',
        textAlign: 'center',
    },

    subtitle: {
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 32,
    },

    link: {
        color: '#008f72',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700',
    },
});
