import { Text, View } from 'react-native';
import Button from './componentes/Button.js';
import Row from '../Calculadora/componentes/Row.js';
import calculator, { EstadoInicial } from '../Calculadora/componentes/calculadora.js';
import { Component } from 'react';
import { styles } from './Estilos/contenedor.js'


export default class App extends Component {
  state = EstadoInicial;


  ClicButton = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };


  render() {
    return (
      <View style={styles.container}>
        
        {/* Titulo  */}
        <Text style={styles.textcentrado}> Calculadora Basica </Text>

        {/* area de resultado */}
        <Text style={[styles.value, styles.border]}>
          {parseFloat(this.state.ValorIngresado).toLocaleString()}
        </Text>

        {/* operaciones basicas limpiar, cambiar valor, % y /   */}
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.ClicButton("Limpiar")}
          />

          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.ClicButton("cambiarValor")}
          />

          <Button
            text="%"
            theme="secondary"
            onPress={() => this.ClicButton("porcentaje")}
          />

          <Button
            text="/"
            theme="accent"
            onPress={() => this.ClicButton("operacion", "/")}
          />
        </Row>
        {/* Fin opereciones basicas limpiar, cambiar valor, % y / */}

        {/* Botones (7,8,9 y *) */}
        <Row>
          <Button text="7" onPress={() => this.ClicButton("numeros", 7)} />
          <Button text="8" onPress={() => this.ClicButton("numeros", 8)} />
          <Button text="9" onPress={() => this.ClicButton("numeros", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => this.ClicButton("operacion", "*")}
          />
        </Row>
        {/* Fin Botones (7,8,9 y *) */}

        {/* Botones (4,5,6 y -) */}
        <Row>
          <Button text="4" onPress={() => this.ClicButton("numeros", 4)} />
          <Button text="5" onPress={() => this.ClicButton("numeros", 5)} />
          <Button text="6" onPress={() => this.ClicButton("numeros", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.ClicButton("operacion", "-")}
          />
        </Row>
        {/* Fin Botones (4,5,6 y -) */}

        {/* Botones (1,2,3 y +) */}
        <Row>
          <Button text="1" onPress={() => this.ClicButton("numeros", 1)} />
          <Button text="2" onPress={() => this.ClicButton("numeros", 2)} />
          <Button text="3" onPress={() => this.ClicButton("numeros", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.ClicButton("operacion", "+")}
          />
        </Row>
        {/* Fin Botones (1,2,3 y +) */}

        {/* Botones (0 y .) */}
        <Row>
          <Button text="0" onPress={() => this.ClicButton("numeros", 0)} />
          <Button text="." onPress={() => this.ClicButton("numeros", ".")} />
          <Button
            text="="
            theme="primary"
            onPress={() => this.ClicButton("igual", "=")}
          />
        </Row>
        {/* Fin Botones (0 y .) */}
      </View>
    );
  }
}

