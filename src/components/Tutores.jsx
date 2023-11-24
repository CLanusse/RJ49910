import { Tutor } from "./Tutor"

export const Tutores = () => {

    return (
        <section className="tutores-container"> 
            <h2>Tutores</h2>
            <ul>
                <Tutor nombre="Conrado Lanusse" edad={16} rol="Profesor"/>
                <Tutor nombre="Santiago Denis" edad={24} rol="Tutor Adjunto"/>
                <Tutor nombre="Dario Pirozzo" edad={35} rol="Tutor Regular"/>
                <Tutor nombre="Agustin Ammazzagatti" edad={29} rol="Tutor Regular"/>
            </ul>
        </section>
    ) 
}

export default Tutores
