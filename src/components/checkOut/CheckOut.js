import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../index";
import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';

const defaultForm = { name: "", email: "", emailDos: "", phone: "" };

const ContactForm = () => {
const [form, setForm] = useState(defaultForm);
const [id, setId] = useState('');
const{cart,total,cleanCart}= UseCartContext()

const toastConfig = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  }

const submitHandler = (ev) => {
    ev.preventDefault();
    if (form.name && form.phone && form.email && form.email === form.emailDos) {
        
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection,{
            form,
            items: cart,
            total: total(),
            date: serverTimestamp()
        }).then((snapshot) => {
        setId(snapshot.id);
        cleanCart()
        });
    } else {
      !form.name && toast.error('Debe ingresar su nombre completo', toastConfig)
      !form.phone && toast.error('Debe ingresar su telefono', toastConfig)
      !form.email && toast.error('Debe ingresar un email', toastConfig)
      form.email !== form.emailDos && toast.error('Los Emails deben coincidir', toastConfig)
    }
};

const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
};

return (
    <div>
    {id ? (

        <div>
             <h1>  Muchas gracias por su compra, su id de compra es: {id}</h1>
             <Link to="/products"><Button>Volver a realizar otra compra</Button></Link>
        </div>

    ) : (
        <div className="form">
        <h1 className="title">Formulario de compra</h1>
        <p className="subtitle">Completa el siguiente formulario para poder finalizar la compra:</p>
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="name">Nombre</label>
            <br/>
            <input
            name="name"
            placeholder="Nombre completo"
            id="name"
            value={form.name}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="phone">Telefono</label>
            <br/>
            <input
            name="phone"
            type="number"
            placeholder="Número de telefono"
            id="phone"
            value={form.phone}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <br/>
            <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={form.email}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="emailDos">Repetir Email</label>
            <br/>
            <input
            type="email"
            name="emailDos"
            placeholder="Repetir email"
            id="emailDos"
            value={form.emailDos}
            onChange={changeHandler}
            />
        </div>
        <br/>
        <Button variant="dark"><button>Finalizar compra</button></Button>
        <br/>
        <br/>
        <Button variant="dark"><Link to="/products"><button>Seguir comprando</button></Link></Button>
        </form>
        </div>
        
    )}
     <ToastContainer />
    </div>
    
)};


export default ContactForm;