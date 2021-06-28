import styled from 'styled-components/macro'

export const List = styled.ul`
  background-color: #eeeeee;
  padding: 2rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  list-style: none;
`

export const Container = styled.section`
  margin: 2rem 0;
  margin-bottom: 4rem;
`
