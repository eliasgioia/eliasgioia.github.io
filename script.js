document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const msg = document.getElementById("responseMsg");

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            form.reset();
            msg.classList.add("show");
            setTimeout(() => msg.classList.remove("show"), 5000);
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }
    } catch (error) {
        alert("Error de conexión o servidor.");
    }
});