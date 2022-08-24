import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Accordion className="pb-[241px]">
            <Accordion.Item eventKey="0">
                <Accordion.Header className="font-bold">Los productos son originales?</Accordion.Header>
                <Accordion.Body>
                Si! Los productos son 100% originales e importados de afuera.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="font-bold">Hacen envíos a todo el pais?</Accordion.Header>
                <Accordion.Body>
                No. Actualmente hacemos solo envíos por <span style={{fontWeight: 'bold'}}>Córdoba capital</span>.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className="font-bold">Cuáles son los métodos de pago?</Accordion.Header>
                <Accordion.Body>
                Aceptamos transferencia bancaria, efectivo y crypto. Cualquier consulta contactenos por <a className="font-bold" href="#" target="_blank">Whatsapp</a>.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className="font-bold">¿Que hago después de realizar mi compra web?</Accordion.Header>
                <Accordion.Body>
                En cuanto finalices el proceso de compra, te enviaremos un mail o mensaje, en el cual estará detallado tu pedido y se confirmará el mismo. Es muy importante que completes todos los datos que se solicitan en el formulario, especialmente el mail y tu número de teléfono para que podamos contactarnos con vos mediante WhatsApp y así tener una comunicación más fluida.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header className="font-bold">Tengo una consulta, por donde puedo contactarlos?</Accordion.Header>
                <Accordion.Body>
                Puede contactarnos por <a className="font-bold" href="#" target="_blank">Whatsapp</a> o por <a className="font-bold" href="https://www.instagram.com/vapeclub_cba/" target="_blank" rel="noreferrer">Instagram</a> haciendo click y le responderemos lo antes posible!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Faq