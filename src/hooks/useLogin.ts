import { useHistory } from "react-router";
import useUserState, { User } from "../stores/useUserStore";
import { MD5 } from "crypto-js";
import { FormField } from "../utils/utils";

export interface FormLogin {
  email: FormField;
  password: FormField;
  [key: string]: FormField;
}
export const useLogin = () => {
  const { setUser } = useUserState();
  const history = useHistory();

  const handleLogin = async (formData: FormLogin) => {
    try {
      const hashPassword: string = MD5(formData.password.value).toString();

      const auth = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg}",
        },
      });

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.value,
            password: hashPassword,
          }),
        }
      );
      if (!response.ok) throw new Error("Error en el inicio de sesión");
      const data: User = await response.json();
      setUser(data);
      history.push("/tab1");
    } catch (error) {}
  };
  return {
    handleLogin,
  };
};
