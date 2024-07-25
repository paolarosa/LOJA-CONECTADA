import { useState } from "react";
import { api } from "../../services/api";
import { FormRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import { schema } from "./validatorRegister";
import { LinkLogin } from "./styles";
import { z } from "zod";

export const Register = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const schema = z.object({
    name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
    email: z.string().nonempty("Email obrigatório").email("Email inválido"),
    password: z
      .string()
      .nonempty("Senha obrigatória com no mínimo 4 caracteres"),
    phone: z.string().refine((value) => /^[0-9]{10,12}$/.test(value), {
      message:
        "O número de celular deve conter apenas números e ter até 12 dígitos.",
    }),
  });

  const fieldErrorMessages = {
    name: "Nome",
    email: "Email",
    password: "Senha",
    phone: "Telefone",
  };

  const register = async () => {
    try {
      const values = {
        name: nome,
        email,
        password: senha,
        phone: telefone,
      };

      schema.parse(values);
      const response = await api.post("/clients", values);
      console.log(response.data);

      setNome("");
      setEmail("");
      setSenha("");
      setTelefone("");
      setErrors({});
      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = error as z.ZodError;
        const errorMessages = zodError.issues.reduce((acc, issue) => {
          const field = issue.path[0];
          const errorMessage = issue.message;
          return {
            ...acc,
            [field]: errorMessage,
          };
        }, {});
        setErrors(errorMessages);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <FormRegister>
      <div className="divContainer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            register();
          }}
        >
          <h2>Cadastro</h2>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            placeholder="Digite aqui seu nome"
            onChange={(event) => setNome(event.target.value)}
          />
          {errors.name && <span className="errorSpan">{errors.name}</span>}
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Digite aqui seu email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span className="errorSpan">{errors.email}</span>}
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            placeholder="Digite aqui sua senha"
            onChange={(event) => setSenha(event.target.value)}
          />
          {errors.password && (
            <span className="errorSpan">{errors.password}</span>
          )}
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            placeholder="Digite aqui seu telefone"
            onChange={(event) => setTelefone(event.target.value)}
          />
          {errors.phone && <span className="errorSpan">{errors.phone}</span>}
          <button className="buttonSubmit" type="submit">
            Cadastrar
          </button>
          <LinkLogin to={"/"}>Ir para Login</LinkLogin>
        </form>
      </div>
    </FormRegister>
  );
};

export default Register;
