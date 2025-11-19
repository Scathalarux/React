export function Titulo({ nombre }: { nombre: string }) {
  if (nombre != "") {
    return <h1>Hola {nombre}</h1>;
  }

  return <h1>Hola mundo</h1>;
}
