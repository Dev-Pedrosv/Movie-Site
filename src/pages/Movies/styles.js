import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to bottom, transparent, #000),
    url(${(props) => props.photo});
  background-position: center;
  background-size: 110%;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  padding: 0px 30px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  gap: 20px;

  img {
    width: 20px;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }

    :active {
      opacity: 0.6;
    }
  }

  button,
  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 33px;
    background-color: transparent;
    outline: none;
    border: none;

    color: #f9f9f9;
    text-decoration: none;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }

    :active {
      opacity: 0.6;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  .action {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;

    color: #ffa634;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 125.19%;
      color: #f9f9f9;
    }
  }

  .info {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 536px;
  }

  .nameMovie {
    font-weight: 600;
    font-size: 42px;
    line-height: 64px;
    color: #f9f9f9;
  }

  .description {
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 30px;
    color: #f9f9f9;
  }

  button {
    width: 286px;
    height: 56px;

    background: #ffa634;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    color: #181818;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }
`;

export const Movies = styled.div`
  width: 100%;

  .category {
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;

    color: #f9f9f9;
  }

  .divider {
    width: 61px;
    height: 0px;
    background-color: #ffa634;
    border: 1.5px solid #ffa634;
    margin-bottom: 30px;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  .rec.rec-arrow {
    background-color: #000;
    opacity: 0.7;
    transition: 0.3s;
  }
  .rec.rec-arrow:hover {
    background-color: #000;
    opacity: 1;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`;

export const Movie = styled.div`
  background: linear-gradient(to bottom, transparent, #000),
    url(${(props) => props.background});
  background-position: center;
  background-size: 110%;

  display: flex;
  align-items: flex-end;

  width: 300px;
  height: 360px;
  transition: 0.3s;
  transform: scale(0.9);

  :hover {
    transform: scale(1);
    cursor: pointer;
  }

  .containerInfo {
    padding: 20px;

    .name {
      font-weight: 600;
      font-size: 24px;
      line-height: 33px;

      color: #f9f9f9;
    }
  }
  .categoryMovie {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #ffa634;
  }

  img {
    margin-top: 20px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  a {
    font-weight: bold;
    font-size: 40px;
    line-height: 66px;
    opacity: 0.6;
    text-decoration: none;

    color: #f9f9f9;

    cursor: pointer;

    :hover {
      opacity: 1;
    }
  }
`;

export const Redes = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  a {
    transition: 0.3s;
    :hover {
      margin-top: -20px;
    }
  }
`;
