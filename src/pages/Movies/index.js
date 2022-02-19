import React, { useState } from "react";
import * as C from "./styles";
import Logo from "../../assets/img/Kenai.svg";
import Instagram from "../../assets/img/instagram.svg";
import Twitter from "../../assets/img/twitter.svg";
import Facebook from "../../assets/img/facebook.svg";
import Star from "../../assets/img/StarFill.svg";
import Shang from "../../assets/img/shang.svg";
import Wisa from "../../assets/img/wish.svg";
import Loki from "../../assets/img/loki.svg";
import Spider from "../../assets/img/spiderman.svg";
import Witcher from "../../assets/img/witcher.svg";
import Search from "../../assets/img/search.svg";
import Bell from "../../assets/img/bell.svg";
import GoldStar from "../../assets/img/Star.svg";
import Clock from "../../assets/img/clock.svg";
import Batman from "../../assets/img/batman.svg";

import Swal from "sweetalert2";
import Carousel from "react-elastic-carousel";

import { useNavigate } from "react-router-dom";
function Movies() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const initialValue = {
    background: Batman,
    category: "Action",
    name: "Batman",
  };
  const movies = [
    {
      background: Shang,
      category: "Action",
      name: "Shang-Chi",
    },
    {
      background: Wisa,
      category: "Animation",
      name: "Wisa Dragon",
    },
    {
      background: Loki,
      category: "Action",
      name: "Loki",
    },
    {
      background: Spider,
      category: "Action",
      name: "Spider-Man",
    },
    {
      background: Witcher,
      category: "Action",
      name: "The Witcher",
    },
  ];

  const [movie, setMovie] = useState([movies]);

  const changedMovie = (index) => {
    console.log(movies[index]);
    setMovie(movies[index]);
  };
  const logout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Efetuar logout?",
        text: "Você sera deslogado imediatamente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, deslogar",
        cancelButtonText: "Não cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire("Operação concluida");
          navigate("/");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Operação cancelada");
        }
      });
  };

  return (
    <C.Container photo={movie?.background || initialValue.background}>
      <C.Header>
        <img src={Logo} alt="logo" />
        <C.NavBar>
          <img src={Search} alt="search" />
          <a href="#">Inicio</a>
          <a href="#">Minha lista</a>
          <img src={Bell} alt="bell" />

          <C.Profile>
            <img src={user.photo} alt="search" />
            <button onClick={logout}>{user.name}</button>
          </C.Profile>
        </C.NavBar>
      </C.Header>

      <C.Info>
        <p className="action">{movie?.category || initialValue.category}</p>
        <div>
          <img src={GoldStar} alt="start" />
          <img src={GoldStar} alt="start" />
          <img src={GoldStar} alt="start" />
          <img src={GoldStar} alt="start" />
          <img src={GoldStar} alt="start" />

          <img src={Clock} alt="clock" />
          <p>1h 57m</p>
        </div>

        <div className="info">
          <p className="nameMovie">{movie?.name || initialValue.name}</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
            convallis turpis, nec rutrum quam vulputate viverra. Proin ornare
            dolor sit amet laoreet dignissim.{" "}
          </p>
        </div>

        <button>Assistir agora</button>
      </C.Info>

      <C.Movies>
        <p className="category">Populares</p>
        <div className="divider" />
        <C.ContainerMovies>
          <Carousel enableAutoPlay={false} autoPlaySpeed={1500} itemsToShow={3}>
            {movies.map((movie, index) => (
              <C.Movie
                key={index}
                onClick={() => changedMovie(index)}
                background={movie.background}
              >
                <div className="containerInfo">
                  <p className="categoryMovie">{movie.category}</p>
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <p className="name">{movie.name}</p>
                </div>
              </C.Movie>
            ))}
          </Carousel>
        </C.ContainerMovies>
      </C.Movies>

      <C.Footer>
        <a href="#">Kenai</a>
        <C.Redes>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
        </C.Redes>
      </C.Footer>
    </C.Container>
  );
}

export default Movies;
