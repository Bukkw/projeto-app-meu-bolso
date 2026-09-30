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
import { router } from 'expo-router'
import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';
import { signUp } from '../src/services/authService'

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleRegister(){
        
        if(!email.trim() || !password.trim() || !confirm.trim() )
            return alert('Atenção \nPreencha todos os campos.');
        if(password.length<6)
        return alert('Atenção \nA senha deve ter no mínimo 6 caracteres.')
        if(password!==confirm)
            return alert ('Atenção \nAs senhas não conferem.');

        try{
            setLoading(true);
            const {error} = await signUp(email.trim(), password);
            if(error){alert('Erro no cadastro', error.message)
            return
            } else {
                alert('Sucesso! \nConta criada com sucesso, faça login para continuar.')
                router.replace('/');
            }
        }finally{
            setLoading(false);
        }
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View>
                <Text style={styles.title}>
                    Criar nova conta
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
                    value={confirm}
                    onChangeText={setConfirm}
                />

                <View style={{ marginTop: 15 }}>
                <AppButton
                title="Criar conta"
                loading={loading}
                onPress={handleRegister}/>
                </View>

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

    link: {
        color: '#008f72',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700',
    },
});