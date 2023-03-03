import { useNavigate, Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";

import { useAuth } from "../../hooks/auth";

import { Container, UserMenu, DropDown } from "./styles";

export function Header({ hideToggle = false }) {
  const { user, signOut } = useAuth();
  const dispatch = useDispatch();
  const { isMenuVisible } = useSelector(state => state.menu)

  const navigation = useNavigate();

  function handleToggleMenu() {
    dispatch(toggleMenu());
  }

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      {!hideToggle &&
        <div className="toggle-menu" onClick={handleToggleMenu}>
          {isMenuVisible ? <AiOutlineDown /> : <AiOutlineRight />}
        </div>
      }

      <h1><Link to="/">DocKeeper</Link></h1>

      <UserMenu>
        <span>{user.name}</span>
        <FaUserCircle />

        <DropDown>
          <a href="#">Configurações</a>
          <a onClick={handleSignOut}>Sair</a>
        </DropDown>
      </UserMenu>
    </Container>
  )
}