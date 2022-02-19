import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #0c0c0c;
`;

export const Header = styled.div`
  width: 100%;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 49px;
    color: #f9f9f9;
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 87px;

    color: #f9f9f9;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 54px;
    margin-bottom: 50px;
    color: #f9f9f9;
  }
`;

export const Users = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 136px;
`;

export const User = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transform: scale(0.9);
  transition: 0.3s;
  opacity: 0.6;
  background-color: transparent;
  outline: none;
  border: none;
  :hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1);
    background: -webkit-linear-gradient(#ff267a, #ffa634);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  :active {
    opacity: 1;
  }

  p {
    font-weight: normal;
    font-size: 32px;
    line-height: 44px;
    color: #a8a8a8;
  }
`;

export const UserPhoto = styled.img`
  width: 176px;
  border-radius: 50%;
  height: 176px;
`;
