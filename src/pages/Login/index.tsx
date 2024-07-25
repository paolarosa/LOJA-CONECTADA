import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { FormLogin } from "./styles"
import { LinkRegister } from "./styles";

export const Login = () => {
  const {signIn} = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema)
  })


  return (
    <FormLogin>
      <div className="divContainer">
        <form onSubmit={handleSubmit(signIn)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button className="buttonSubmit" type="submit">
            Entrar
          </button>
          <h4>Ainda não possui uma conta?</h4>
          <LinkRegister to={"/register"}>Cadastre-se</LinkRegister>
        </form>
      </div>
    </FormLogin>
  );
}