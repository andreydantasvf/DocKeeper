import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigate()

  async function handleSignUP(event) {
    setIsLoading(true);
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigation("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar o usuário!")
        }
      }).finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <h1>DocKeeper</h1>

      <Form>
        <h2>Crie sua conta</h2>
        <Input
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Criar conta"
          loading={isLoading}
          type="submit"
          onClick={handleSignUP}
        />
        <Link to="/">
          Já possui uma conta? Faça seu login!
        </Link>
      </Form>
    </Container>
  )
}