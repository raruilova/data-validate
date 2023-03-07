import { ChangeEvent, FormEvent, useState } from "react";
import { UserForm } from "../interfaces/userForm";
import swal from "sweetalert";
import "../styles/Form.css";

export const Form = () => {
  const [userData, setUserData] = useState<UserForm>({
    name: "",
    lastName: "",
    ci: "",
    age: 0,
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const { ci } = userData;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ced = ci;

    let [suma, mul, chars] = [0, 1, ced.length];
    for (let index = 0; index < chars; index += 1) {
      let num = Number(ced[index]) * mul;
      suma += num - Number(num > 9) * 9;
      mul = 1 << index % 2;
    }

    if (suma % 10 === 0 && suma > 0) {
      swal("Buen trabajo!", "Usuario registrado!", "success");
      setUserData({
        name: "",
        lastName: "",
        ci: "",
        age: 0,
        email: "",
        phone: "",
      });
    } else {
      swal("Algo salio mal!", "Ingresa correctamente tu número de cédula!", "warning");
      return;
    }
  };

  const handleCancel = () => {
    console.log("data");
    setUserData({
      name: "",
      lastName: "",
      ci: "",
      age: 0,
      email: "",
      phone: "",
    });
  }

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                name="name"
                placeholder="Nombre"
                value={userData.name}
                required
                minLength={3}
                maxLength={60}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="text"
                className="login__input"
                name="lastName"
                placeholder="Apellido"
                value={userData.lastName}
                required
                minLength={3}
                maxLength={60}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="text"
                className="login__input"
                name="ci"
                value={userData.ci}
                required
                placeholder="Cédula"
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="number"
                className="login__input"
                name="age"
                placeholder="Edad"
                value={userData.age}
                required
                min={1}
                max={100}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="email"
                className="login__input"
                name="email"
                value={userData.email}
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="tel"
                className="login__input"
                name="phone"
                placeholder="Teléfono"
                value={userData.phone}
                required
                minLength={10}
                onChange={handleChange}
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Registrar</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
           
          </form>
          <button className="button login__submit" type="button" onClick={handleCancel}>
              <span className="button__text">Cancelar</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};
