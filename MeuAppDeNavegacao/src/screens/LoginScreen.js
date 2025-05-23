
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useState } from "react";

const LoginScreen = () => {
    const [user, setUser] = useState(""); // estados são como caixinhas onde guardamos informações que podemos mudar
    const [senha, setSenha] = useState(""); // sempre que algo é alterado, essas caixinhas mudam e a tela reflete as mudancas
    const [error, setError] = useState(null); // novo estado para mensagens de erro

    const validar = () => {
        setError(""); // para uma validação mais completa

        if (!user && !senha) {
            setError("Ambos os campos são necessários!");
        }

        else if (isNaN(senha))// isNan - verificar se o valor digitado é um número valido
        {
            setError("Por favor, insira uma senha com números e letras!"); // para informar o erro
            setSenha(null); // limpa o estado em caso de erro
            return;
        }
        else {
            if(user == "usuario123" && senha == "senha123")
            {
                navigation.navigated(!"Home");
            }
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="default" // padrao do sistema
                value={user}
                onChanceText = {setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default" // teclado padrao
                value={senha}
                onChanceText = {setSenha}
            />
            <Button title="Entrar" onPress={validar} color="black" />
            {/* mostra a mensagem de erro se a validacao falhar */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View >
    );
};

const styles = StyleSheet.create({
    // StyleSheet para estilizar cada componente de forma consistente
    formContainer: {
        flex: 1, // melhor adaptacao a diferentes tamanhos de tela
        backgroundColor: '#B0E0E6',
        padding: 16,
        maxHeight: 300,
        borderRadius: 20,
    },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 15,
        backgroundColor: "white", // Dá um contraste maior
        justifyContent: 'center',
    },

    errorText: {
        color: "white",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: "red",
    },
});


export default LoginScreen;