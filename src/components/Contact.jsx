import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/Contact.css";

export const ContactUs = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mostrar errores

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();

    // Validar si los campos están vacíos
    if (!name || !email) {
      setErrorMessage("Complete all fields⚠️");
      return;
    };

    // Limpiar mensaje de error si los campos están completos
    setErrorMessage("");

    emailjs
      .sendForm("service_ih1gx1b", "template_vdiwx2j", form.current, {
        publicKey: "OxMjv23tj12pE_CVu",
      })
      .then(() => {
        console.log("Message sent");
        form.current.reset(); // Limpiar el formulario
        setIsModalOpen(true); // Mostrar el modal
        setTimeout(() => setIsModalOpen(false), 3000); // Ocultar después de 3 segundos
      })
      .catch((error) => {
        console.log("Message failed.", error.text);
      });
  };

  return (
    <section id="contact" className='contact-section'>
      <div className='container-section'>
        <header className='contact-header'>
          <h2 className='contact-title'>Contact Us</h2>
          <p className='contact-description'>
            Contact us and enter the world of technological transformation for your business.
          </p>
        </header>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>The form has been submitted successfully ✅ </p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;

