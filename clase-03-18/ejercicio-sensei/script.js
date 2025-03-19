let contactos = [
    {Nombre:"Juan Perez", Puesto:"Desarrollador", Empresa:"Empresa ABC", Correo:"juan@ejemplo.com", Telefono:"810-000-0000"},
    {Nombre:"Maria Rios", Puesto:"Diseñadora", Empresa:"Empresa XYZ", Correo:"maria@ejemplo.com", Telefono:"810-000-0001"},
    {Nombre:"Jose Ibarra", Puesto:"Analista", Empresa:"Empresa 123", Correo:"jose@ejemplo.com", Telefono:"810-000-0002"}
]

const generarTarjeta = (contacto) => {
    return `----------
    ${contacto.Nombre}
    ${contacto.Puesto}
    ${contacto.Empresa}
    ${contacto.Correo}
    ${contacto.Telefono}`
}

contactos.forEach(contacto => {
    console.log(generarTarjeta(contacto))
})