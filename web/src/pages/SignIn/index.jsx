import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn(event) {
    setIsLoading(true);
    event.preventDefault();
    await signIn({ email, password });
    setIsLoading(false);
  }

  return (
    <Container>
      <h1>DocKeeper</h1>

      <Form>
        <h2>Faça login</h2>
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
          title="Entrar"
          loading={isLoading}
          type="submit"
          onClick={handleSignIn}
        />
        <Link to="/register">
          Não possui uma conta? Crie aqui!
        </Link>
      </Form>
    </Container>
  )
}