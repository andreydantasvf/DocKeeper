import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";

import { Container } from "./styles";

export function Header({ hideToggle = false }) {
  const dispatch = useDispatch();
  const { isMenuVisible } = useSelector(state => state.menu)

  function handleToggleMenu() {
    dispatch(toggleMenu());
  }

  return (
    <Container>
      {!hideToggle &&
        <div onClick={handleToggleMenu}>
          {isMenuVisible ? <AiOutlineDown /> : <AiOutlineRight />}
        </div>
      }
      <h1>DocKeeper</h1>
    </Container>
  )
}