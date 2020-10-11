import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: '#3a3a3a';
  font-size: 43px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 48px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    transition: transform 0.2s;

    &:hover {
      transform: translateX(-10px);
    }

    & + a {
      margin-top: 10px;
    }

    align-items: center;
    display: block;
    display: flex;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
