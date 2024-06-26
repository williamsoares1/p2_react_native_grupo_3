import React, { useState, useCallback } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';
import inumaki from "../../assets/image/3.png";
import { apiClientes } from "../../services/api-clientes/api";
import { useFonts } from 'expo-font';
import image from "../../assets/image/2.png";

interface NavigationProps {
    navigation: NavigationProp<any, any>;
}

const Cadastro = ({ navigation }: NavigationProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email || !password) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        setError(null);
        setIsLoading(true);

        try {
            // Verificar se o e-mail já existe
            const response = await apiClientes.get('/users');
            const users = response.data;
            const emailExists = users.some(user => user.email === email);

            if (emailExists) {
                alert('Email já cadastrado');
                setName("");
                setEmail("");
                setPassword("");
                return;
            }

            const createUserResponse = await apiClientes.post("/users", {
                nome: name,
                email: email,
                senha: password,
            });

            setName("");
            setEmail("");
            setPassword("");
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');

            if (createUserResponse.status === 201) {
                navigation.navigate('login');
            }
        } catch (error) {
            setError("Erro ao cadastrar usuário");
            console.log("Erro ao cadastrar usuário: ", error.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    const [fontsLoaded, fontError] = useFonts({
        'Knewave': require('../../assets/fonts/Knewave-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ImageBackground source={image} style={styles.fundo}>
            <View style={styles.container}>
                <View>
                    {/* Input 1 */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>NOME DE USUÁRIO</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome de usuário"
                            placeholderTextColor="#FFFFFF"
                            autoCapitalize="none"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>

                    {/* Input 2 */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>EMAIL</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            autoCapitalize="none"
                            placeholderTextColor="#FFFFFF"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    {/* Input 3 */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>SENHA</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            autoCapitalize="none"
                            placeholderTextColor="#FFFFFF"
                            // secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                </View>

                {/* Erro */}
                {error && <Text style={styles.error}>{error}</Text>}

                <View style={styles.containerinumaki}>
                    <Image style={styles.inumaki} source={inumaki} />
                    {isLoading ? (
                        <ActivityIndicator style={styles.cadastrodoinumaki} size="large" color="#964F7B" />
                    ) : (
                        <Text style={styles.cadastrodoinumaki} onPress={handleSubmit}>CADASTRAR!</Text>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
}

export default Cadastro;
