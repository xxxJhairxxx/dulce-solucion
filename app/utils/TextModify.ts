export const limitText = (text: string, numberWords: number): string => {
  const palabras = text.split(" ");

  if (palabras.length <= numberWords) {
    return text;
  }

  const textoLimitado = palabras.slice(0, numberWords).join(" ");
  return textoLimitado;
};

export const FormatDate = (date: string): string => {
  const fecha = new Date(date);
  const fechaFormateada = fecha.toLocaleDateString("EN", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });
  return fechaFormateada;
};
