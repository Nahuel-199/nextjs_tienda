import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Register.module.scss";

const register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state } = useContext(DataContext);
  const { auth } = state;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return toast.error(errMsg);

    toast.info("Cargando...");

    const res = await postData("auth/register", userData);
    console.log(res);

    if (res.err) return toast.error(res.err);

    toast.success(res.msg);
    router.push('/');
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Register in Page</title>
      </Head>
      <div className={styles.containerRegister}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Registrarse</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              placeholder="nombre completo"
              className={styles.inputField}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            <input
              placeholder="email"
              className={styles.inputField}
              type="email"
              id="exampleInputEmail1"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />

            <input
              placeholder="contraseña"
              className={styles.inputField}
              type="password"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />

            <input
              placeholder="confirmar contraseña"
              className={styles.inputField}
              type="password"
              id="exampleInputPassword2"
              name="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />

            <button className={styles.btn} type="submit">
              REGISTRARSE
            </button>
            <Link href="/signin">
              <span className={styles.link}>
                ¿YA TIENE CUENTA? Inicie Sesión
              </span>
            </Link>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default register;
