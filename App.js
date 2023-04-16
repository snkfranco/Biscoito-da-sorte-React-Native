
import React, {useState}from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Audio, ImageBackground} from 'react-native';

function App(){

    const backgroundImage = require('./src/image.jpg');
    const [img, setImg] = useState(require('./src/biscoito.png'));
    const[textoFrase, setTextoFrase] = useState('');
    const [botaoDesativado, setBotaoDesativado] = useState(false);
    const [tempoRestante, setTempoRestante] = useState(0);

    let frases = [
        "Acredite em si mesmo e tudo será possível.",
        "A vida é cheia de possibilidades infinitas.",
        "Aprenda com o passado, viva o presente, sonhe com o futuro.",
        "O sucesso vem para aqueles que perseveram.",
        "A cada novo dia, uma nova oportunidade se apresenta.",
        "Você é mais forte do que imagina.",
        "A paciência é a chave para a conquista.",
        "O conhecimento é poder, a sabedoria é conquista.",
        "Acredite em seus sonhos e trabalhe duro para alcançá-los.",
        "A felicidade está em suas próprias mãos.",
        "Nunca é tarde para recomeçar e alcançar seus objetivos.",
        "A generosidade é a verdadeira riqueza da alma.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Mantenha o foco e o mundo será seu.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        "Acredite no impossível e torne-o possível.",
        "A gratidão é a chave para a felicidade duradoura.",
        "Seja a mudança que você deseja ver no mundo.",
        "A jornada é tão importante quanto o destino.",
        "Pequenos passos levam a grandes conquistas.",
        "Nunca subestime seu próprio potencial.",
        "Cada dia é uma nova oportunidade para ser melhor.",
        "Acredite na magia dos seus sonhos e faça acontecer.",
        "A vida é uma aventura, aproveite cada momento dela.",
        "As dificuldades são oportunidades disfarçadas.",
        "Aja com gentileza e o mundo responderá com amor.",
        "A mudança começa de dentro para fora.",
        "A perseverança é a chave para superar desafios.",
        "Você é capaz de coisas incríveis.",
        "A vida é curta, aproveite cada segundo dela.",
        "O otimismo é a chave para uma vida plena.",
        "A felicidade está nas coisas simples da vida.",
        "Acredite no seu potencial ilimitado.",
        "A compaixão é a linguagem do coração.",
        "A imaginação é o começo de todas as grandes realizações.",
        "Aprender com os erros é parte do caminho para o sucesso.",
        "Nunca deixe de sonhar, mesmo quando as coisas parecerem impossíveis.",
        "O amor é a força mais poderosa do universo.",
        "Você é único e especial, celebre sua individualidade.",
        "O sorriso é o idioma universal da felicidade."
    ];

    function quebraBiscoito() {
        if (!botaoDesativado) {
          let numeroAleatorio = Math.floor(Math.random() * frases.length)
          setTextoFrase('"' + frases[numeroAleatorio] + '"');
          setImg(require('./src/biscoitoAberto.png'))
          setBotaoDesativado(true);
      
          // Defina o tempo de timeout em milissegundos (por exemplo, 5 segundos)
          const tempoTimeout = 60000;
      
          // Inicie o timer e atualize o tempo restante a cada segundo
          let tempoRestante = tempoTimeout;
          setTempoRestante(tempoTimeout);
          const timer = setInterval(() => {
            tempoRestante -= 1000;
            setTempoRestante(tempoRestante);
      
            // Verifique se o tempo restante chegou a zero e, se sim, reinicie o estado e o timer
            if (tempoRestante === 0) {
              clearInterval(timer);
              setBotaoDesativado(false);
              setTempoRestante(0);
            }
          }, 1000);
        }
      }

    function reinicia(){
        setImg(require('./src/biscoito.png'))
        setTextoFrase('');
    }

    return(
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View style={styles.container}>

                <Text style={styles.titulo}>Biscoito da Sorte</Text>

                <Image 
                source={img}
                style={styles.img}
                />

                <Text style={styles.textofrase}>{textoFrase}</Text>
            
                <TouchableOpacity style={styles.botao1} onPress={quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto1}>Quebrar Biscoito</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao2, {marginTop: 15, borderColor: 'white'}]} onPress={reinicia}>
                    <View style={styles.btnArea}>
                        <Text style={[styles.btnTexto2, {color:'white'}]}>Reiniciar Biscoito</Text>
                    </View>
                </TouchableOpacity>

                {tempoRestante > 0 && (
                 <Text style={styles.tempoRestante}>
                  Tempo restante: {Math.ceil(tempoRestante / 1000)} segundos
                 </Text>
)}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    tempoRestante:{
        marginTop:20,
        color:'white'
    },
    titulo:{
        fontSize: 40,
        color:'white',
        fontWeight:'bold',
        fontStyle: 'italic',
        fontFamily: 'Helvetica',
        paddingBottom: 20,
        textShadowColor:'white',
        textShadowOffset:{width:2, height:2},
        shadowRadius:1,
        shadowOpacity:0.9
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    img:{
        width:230,
        height:230,
    },
    textofrase:{
        fontSize:20,
        color: 'white',
        margin:30,
        fontStyle: 'italic',
        textAlign: 'center',
        textShadowColor:'black',
        textShadowRadius: 2,
        textShadowOffset:{width:0, height:0},
        backgroundColor: "#00000099",
        borderRadius:25,
        paddingTop: 2,
        paddingHorizontal: 10
   },
    botao1: {
        width: 250,
        height: 50,
        borderColor: '#ff6961',
        borderWidth: 2,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1, // Altere esse valor para ajustar a opacidade da sombra
        shadowRadius: 0,
        elevation: 1,
        backgroundColor:"#00000050" 
    },
    botao2: {
        width: 170,
        height: 50,
        borderColor: '#ff6961',
        borderWidth: 2,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1, // Altere esse valor para ajustar a opacidade da sombra
        shadowRadius: 0,
        elevation: 1,
        backgroundColor:"#00000050" 
    },
    btnArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowRadius:10,
        shadowOpacity: 80
    },
    btnTexto1:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ff6961'
    },
    btnTexto2:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ff6961'
    }

})
export default App;
