import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  const [tempo, setTempo] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let interval;
    if (status == true){
      interval = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
      }
      else{
        clearInterval(interval);
      }

      return () => clearInterval(interval);

    }, [status]);

    const ativarDesativar = () => {
      setStatus(!status);
    }

    const resetar = () => {
      setTempo(0);
      setStatus(false);
    }

    const formatarTempo = (tempo) => {
      const minutos = Math.floor(tempo /60);
      const segundos = tempo % 60;
      return minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
    };
    return(
      <View style={styles.corpo}>
        <Text style={styles.cronometro}>{formatarTempo(tempo)}</Text>
        <View style={styles.containerbotoes}>
          <TouchableOpacity style={styles.botao} onPress={ativarDesativar}>
            <Text style={styles.textobotao}>{status ? 'PARAR' : 'COMEÇAR'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={resetar}>
            <Text style={styles.textobotao}>ZERAR</Text>
          </TouchableOpacity>
        </View>   
      </View>
    )
}

  const styles = StyleSheet.create({
    corpo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5'
    },
    cronometro: {
      fontSize: 60,
      fontWeight: 'bold',
      marginBottom: 20
    },
    containerbotoes: {
      flexDirection: 'row'
    },
    botao: {
      backgroundColor: '#007bff',
      padding: 15,
      marginHorizontal:10,
      borderRadius: 5
    },
    textobotao: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold'
    },
  });
  export default App;