import Galeria from "./GaleriaDaAtv03";
import { Link } from 'react-router-dom';

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Galeria />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    )
}
