import styled from "styled-components/macro";

export const Container = styled.section``;

export const Header = styled.div`
  background: url(${({ theme }) => theme.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: min(40vh, 300px);
`;

export const SearchForm = styled.form`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const SearchInputContainer = styled.div`
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: #e3e3e3;
  position: relative;

  &:focus-within::before {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    transition: opacity ease 300ms;
    opacity: 0;
    visibility: hidden;
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 2rem;
    border: 1px solid #e3e3e3;
  }
`;

export const SearchInput = styled.input`
  border: none;
  color: gray;
  outline: none;
  background: transparent;
  position: relative;
  z-index: 10;

  &::placeholder {
    color: #acabab;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
