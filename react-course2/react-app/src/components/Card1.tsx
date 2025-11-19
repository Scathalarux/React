import { CardBody } from "./CardBody";

export function Card1() {
    const title = 'Hola mundo';
    const text = 'Esto es un hola mundo realizado para aprender react combinado con typescript.'
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        <CardBody  title={title} text={text}/>
      </div>
    </div>
  );
}
