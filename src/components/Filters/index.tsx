import { ChangeEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

import { Container, Content, Label, Checkbox, Text } from "./filters.styles";
import { filters } from "fixtures/";
import { spotifyTypesAtom } from "recoilState/spotifyTypes";

function Filters() {
  const setTypes = useSetRecoilState(spotifyTypesAtom);
  const [checks, setChecks] = useState<string[]>([]);

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked) {
      setChecks((prev) => [...prev, value]);
    } else {
      setChecks((prev) => prev.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    setTypes(checks.join(","));
  }, [checks]);
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
