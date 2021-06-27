import { ChangeEvent } from "react";
import { useSetRecoilState } from "recoil";

import { Container, Content, Label, Checkbox, Text } from "./filters.styles";
import { filters } from "fixtures/";
import { spotifyTypesAtom } from "recoilState/spotifyTypes/atoms";

function Filters() {
  const setTypes = useSetRecoilState(spotifyTypesAtom);

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked) {
      setTypes((prev) => [...prev, value]);
    } else {
      setTypes((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <Container>
      <Content>
        {filters.map(({ name, text }) => (
          <Label key={name}>
            <Text>{text}</Text>
            <Checkbox
              onChange={handleCheckChange}
              type="checkbox"
              name={name}
              value={name}
            />
          </Label>
        ))}
      </Content>
    </Container>
  );
}

export default Filters;
