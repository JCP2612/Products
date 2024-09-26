import useUserState, { User } from "../stores/useUserStore";
import { useHistory } from "react-router";
import { MD5 } from "crypto-js";
import { FormField } from "../utils/utils";

export interface FormRegister {
  username: FormField;
  fullname: FormField;
  password: FormField;
  [key: string]: FormField;
}

export const useRegister = () => {
  const { setUser } = useUserState();
  const history = useHistory();

  const handleRegister = async (formData: FormRegister) => {
    try {
      const hashPassword: string = MD5(formData.password.value).toString();
      const response = await fetch("http://localhost:5077/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.fullname.value,
          password: hashPassword,
          fullname: formData.fullname.value,
        }),
      });
      if (!response.ok) throw new Error("Error al crear");
      const data: User = await response.json();
      setUser(data);
      history.push("/products");
    } catch (error) {}
  };
  return {
    handleRegister,
  };
};
