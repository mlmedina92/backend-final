// recorro los forms para ponerle el evento onsubmit (agregar, editar, eliminar...)
for(const form of document.forms) {
    form.onsubmit = async (e) => {
        e.preventDefault()

        // obtengo los datos a enviar del form
        let formData = new FormData();
        for(const field of e.currentTarget.elements) {
            if (field.type !== 'submit') {
                formData.append(field.name, field.value)
            }
        }

        debugger
        // lamada a la API de products
        const api = await fetch(e.currentTarget.action,
            {
                headers: {
                    "Access-Control-Allow-Methods": "*"
                },
                method: e.currentTarget.attributes['method'].value,
                body: formData
            })
        debugger
        const data = await api.json()
    }
}
