import React from 'react'; 
import Button from "./aula5teste";
import { Link } from "react-router-dom";

export default function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <Button />
            <br />
            <Link to="/">Retornar a página Inicial</Link>
        </>
    );
}
