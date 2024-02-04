export const EstadoInicial = {
  ValorIngresado: "0",
  operador: null,
  ValorAnterior: null,
};

export const AccionNumero = (value, state) => {
  if (state.ValorIngresado === "0") {
    return { ValorIngresado: `${value}` };
  }

  return {
    ValorIngresado: `${state.ValorIngresado}${value}`,
  };
};

const AccionIgual = (state) => {
  const { ValorIngresado, ValorAnterior, operador } = state;

  const Actual = parseFloat(ValorIngresado);
  const Anterior = parseFloat(ValorAnterior);
  const ResetearValores = { operador: null, ValorAnterior: null };

  switch (operador) {
    case "+":
      return {
        ValorIngresado: `${Anterior + Actual}`, ResetearValores,
      };
    case "-":
      return {
        ValorIngresado: `${Anterior - Actual}`, ResetearValores,
      };
    case "*":
      return {
        ValorIngresado: `${Anterior * Actual}`, ResetearValores,
      };
    case "/":
      return {
        ValorIngresado: `${Anterior / Actual}`, ResetearValores,
      };

    default:
      return state;
  }
};


const calculator = (type, value, state) => {
  switch (type) {
    case "numeros":
      return AccionNumero(value, state);
    case "Limpiar":
      return EstadoInicial;
    case "cambiarValor":
      return {
        ValorIngresado: `${parseFloat(state.ValorIngresado) * -1}`,
      };
    case "porcentaje":
      return {
        ValorIngresado: `${parseFloat(state.ValorIngresado) * 0.01}`,
      };
    case "operacion":
      return {
        operador: value,
        ValorAnterior: state.ValorIngresado,
        ValorIngresado: "0",
      };
    case "igual":
      return AccionIgual(state);
    default:
      return state;
  }
};

export default calculator;
