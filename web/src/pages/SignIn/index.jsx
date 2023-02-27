import { useState } from "react";
import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSignIn(event) {
    event.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <h1>DocKeeper</h1>

      <Form>
        <h2>Faça login</h2>
        <Input
          type="text"
          placeholder="Exemplo: teste@gmail.com"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Exemplo: teste123"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Entrar"
          loading={false}
          type="submit"
          onClick={handleSignIn}
        />
      </Form>
    </Container>
  )
}