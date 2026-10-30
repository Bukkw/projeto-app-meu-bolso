import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import AppButton from '../../src/components/AppButton'
import BalanceCard from "../../src/components/BalanceCard";
import SummaryCard from "../../src/components/SummaryCard";

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Meu bolso</Text>
                    <Text style={styles.subtitle}>Resumo financeiro</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.profile}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <BalanceCard balance={50000}/>

            <View style={styles.row}>
                <SummaryCard title="Receitas" value={10000} type="receita"/>
                <SummaryCard title="Despesas" value={5000} type="despesa"/>
            </View>

            <AppButton title="Gerar relatório PDF"/>

            <Text style={styles.section}>Últimas transações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f8f9fa',
        padding: 24,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        color: '#2f3640',
    },
    subtitle: {
        color: '#7f8c8d',
    },
    profile: {
        color:'#008f72',
        fontWeight: '700',
    },
    row: {
        flexDirection:'row',
        marginHorizontal:-4
    },
    section:{
        fontSize:18,
        fontWeight:'800',
        marginVertical:10,
        marginTop: 20,
    }
})
