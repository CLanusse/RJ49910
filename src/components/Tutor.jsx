

export const Tutor = ( {nombre, edad, rol} ) => {

    return (
        <li>
            <h3>{ nombre }</h3>
            <p>Edad: { edad }</p>
            <p>Rol: { rol }</p>
        </li>
    )
}


// export const Tutor = ( props ) => {
//     const { nombre, edad, rol } = props

//     return (
//         <li>
//             <h3>{ nombre }</h3>
//             <p>Edad: { edad }</p>
//             <p>Rol: { rol }</p>
//         </li>
//     )
// }


// export const Tutor = ( props ) => {
    
//     console.log( props )

//     return (
//         <li>
//             <h3>{ props.nombre }</h3>
//             <p>Edad: { props.edad }</p>
//             <p>Rol: { props.rol }</p>
//         </li>
//     )
// }