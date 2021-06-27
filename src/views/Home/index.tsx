import {
  Container,
  Header,
  Search,
  SearchInput,
  SearchInputContainer,
} from "./home.styles";
import { Wrapper, Button } from "components";
import { FormEvent } from "react";

function Home() {
  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Header
        theme={{
          src: "https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        }}
      ></Header>
      <Wrapper>
        <Search onSubmit={handleSearchSubmit}>
          <SearchInputContainer>
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputContainer>
          <Button size="small">Search...</Button>
        </Search>
      </Wrapper>
    </Container>
  );
}

export default Home;
