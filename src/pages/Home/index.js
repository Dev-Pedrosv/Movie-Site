import React from "react";
import * as C from "./styles";
import Logo from "../../assets/img/Kenai.svg";
import { useNavigate } from "react-router-dom";
function Home() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const navigate = useNavigate();

  const horaFormated = hour > 9 ? hour : `0${hour}`;
  const minuteFormated = minute > 9 ? minute : `0${minute}`;
  const users = [
    {
      photo:
        "https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_f134.png",
      name: "Naruto Uzumaki",
    },
    {
      photo:
        "https://images2-mega.cdn.mdstrm.com/etcetera/2021/05/12/15220_1_609c1794b0095.jpg?d=500x500",
      name: "Tanjiro Kamado",
    },
    {
      photo:
        "https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-1024x576.jpg",
      name: "Roronoa Zoro",
    },
  ];

  const login = (index) => {
    const user = users[index];
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/movies");
  };
  return (
    <C.Container>
      <C.Header>
        <img src={Logo} alt="logo" />
        <p>{`${horaFormated}:${minuteFormated}${
          hour == 0 || hour < 12 ? " AM" : " PM"
        }`}</p>
      </C.Header>
      <C.ContainerItems>
        <h1>Bem-vindo de volta ao Kenai</h1>
        <p>Quem está usando?</p>

        <C.Users>
          {users.map((user, index) => (
            <C.User onClick={() => login(index)} key={index}>
              <C.UserPhoto src={user.photo} alt={user.name} />
              <p>{user.name}</p>
            </C.User>
          ))}
        </C.Users>
      </C.ContainerItems>
    </C.Container>
  );
}

export default Home;
