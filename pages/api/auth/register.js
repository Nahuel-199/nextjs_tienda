import connectDB from "nahuel/utils/connectDB";
import Users from "../../../models/userModel";
import valid from "nahuel/utils/valid";
import bcrypt from "bcrypt";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({
      name,
      email,
      password: passwordHash,
      cf_password,
    });

    await newUser.save();

    res.json({ msg: "Se ha registrado correctamente" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
