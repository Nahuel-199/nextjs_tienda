import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "nahuel/store/GlobalState";
import { postData } from "nahuel/utils/fetchData";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Signing.module.scss";

const Signin = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postData("auth/login", userData);

    if (res.err) return toast.error(res.err);

    toast.success(res.msg);

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookies.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
    router.push('/');
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <div className={styles.containerLogin}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Iniciar Sesión</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              placeholder="email"
              className={styles.inputField}
              id="exampleInputEmail"
              type="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <input
              placeholder="Password"
              className={styles.inputField}
              id="exampleInputPassword1"
              type="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <button className={styles.btn} type="submit">LOGIN</button>
            <span className={styles.link}>¿NO RECUERDAS LA CONTRASEÑA?</span>
            <Link href="/register">
              <span className={styles.link}>CREA UNA CUENTA NUEVA</span>
            </Link>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Signin;
