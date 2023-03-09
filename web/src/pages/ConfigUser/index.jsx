import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BackButton } from "../../components/BackButton";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitlePage } from "../../components/TitlePage";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ConfigUser() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdate() {
    setIsLoading(true);

    const updated = {
      name,
      email,
      password,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated);

    await updateUser({ user: userUpdated });

    setIsLoading(false);
  }

  return (
    <Container>
      <Header hideToggle={true} />
      <main>
        <TitlePage
          title="Configurações de usuário"
          subTitle="Altere os dados do seu usuário"
          icon={AiFillSetting}
        />

        <BackButton />

        <Form>
          <label htmlFor="name">Nome:</label>
          <Input
            id="name"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="email">E-mail:</label>
          <Input
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha:</label>
          <Input
            id="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor="oldPassword">Senha antiga:</label>
          <Input
            id="oldPassword"
            placeholder="Senha antiga"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />

          <Button
            title="Salvar"
            loading={isLoading}
            onClick={handleUpdate}
          />
        </Form>
      </main>
      <Footer />
    </Container>
  )
}