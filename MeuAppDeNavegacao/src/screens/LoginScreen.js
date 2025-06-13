import { View, TextInput, Button, StyleSheet, Text, Dimensions } from "react-native";
import { useState } from "react";

const windowWidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState(""); // estados são como caixinhas onde guardamos informações que podemos mudar
    const [senha, setSenha] = useState(""); // sempre que algo é alterado, essas caixinhas mudam e a tela reflete as mudancas
    const [error, setError] = useState(null); // novo estado para mensagens de erro

    const validar = () => {
        setError(""); // para uma validação mais completa

        if (!user || !senha) {
            setError("Ambos os campos são necessários!");
        }
        else if (user == "usuario123" && senha == "senha123") {
            navigation.navigate("Home");
        }
        else if (user != "usuario123" && senha != "senha123") {
            alert("Usuario e senha incorretos");
        }
        else if (user != "usuario123") {
            alert("Usuário incorreto!");
        }
        else if (senha != "senha123") {
            alert("Senha incorreta!");
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}> Login </Text>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                keyboardType="default" // padrao do sistema
                value={user}
                onChangeText = {setUser}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default" // teclado padrao
                value={senha}
                onChangeText = {setSenha}
                secureTextEntry={true} 
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
        justifyContent: 'center',
        alignContent: 'center'
    },

    title: {
        alignSelf: 'center',
        fontSize: 24,
        marginBottom: 20,
      },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 15,
        backgroundColor: "white", // Dá um contraste maior
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