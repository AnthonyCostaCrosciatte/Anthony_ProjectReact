import './ContadorGenero.css';
import { useState } from 'react';

export default function ContadorGenero() {
    const [contadorTotal, setContadorTotal] = useState(0);
    const [contadorHomem, setContadorHomem] = useState(0);
    const [contadorMulher, setContadorMulher] = useState(0);

    const somarHomem = () => {
        setContadorHomem(contadorHomem + 1);
        setContadorTotal(contadorTotal + 1);
    };

    const subtrairHomem = () => {
        if (contadorHomem > 0) {
            setContadorHomem(contadorHomem - 1);
            setContadorTotal(contadorTotal - 1); 
        }
    };

    const somarMulher = () => {
        setContadorMulher(contadorMulher + 1);
        setContadorTotal(contadorTotal + 1);
    };

    const subtrairMulher = () => {
        if (contadorMulher > 0) {
            setContadorMulher(contadorMulher - 1);
            setContadorTotal(contadorTotal - 1);
        }
    };

    const zerar = () => {
        setContadorTotal(0);
        setContadorHomem(0);
        setContadorMulher(0);
    };

    return (
        <div className="contador-container">
            <h1>Total</h1>
            <img onClick={zerar} src="https://www.me-elecmetal.com/wp-content/uploads/2021/09/recuperacion-de-scrap.png" alt="" className='reload' />
            <span className="contadorTotal">{contadorTotal}</span>

            <div className='containerHomemMulher'>
                <div className="containerHomem">
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145843.png" alt="Homem"/>
                    <div className='container-btns'>
                        <button className="btn-somar" onClick={somarHomem}>+</button>
                        <button className="btn-subtrair" onClick={subtrairHomem}>-</button>
                    </div>
                    <h2>Homem</h2>
                    <span className="contadorHomem">{contadorHomem}</span>
                </div>

                <div className="containerMulher">
                    <img src="https://gtisd.net/wp-content/uploads/2020/10/mujer-de-negocios.png" alt="Mulher" />
                    <div className='container-btns'>
                        <button className="btn-somar" onClick={somarMulher}>+</button>
                        <button className="btn-subtrair" onClick={subtrairMulher}>-</button>
                    </div>
                    <h2>Mulher</h2>
                    <span className="contadorMulher">{contadorMulher}</span>
                </div>
            </div>
        </div>
    );
}
