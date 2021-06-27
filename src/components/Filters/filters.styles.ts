import styled from "styled-components/macro";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 0.5rem 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  border: 1px solid gray;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: box-shadow ease 300ms;

  &:hover {
    box-shadow: 0px 4px 0.5rem -1px rgba(0, 0, 0, 0.1);
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const Text = styled.p`
  margin: 0;
`;
