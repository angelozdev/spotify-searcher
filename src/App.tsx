import { MutableSnapshot, RecoilRoot } from "recoil";

import Routes from "routes";
import { authAtom } from "recoilState/auth/atoms";

const initializeState = ({ set }: MutableSnapshot) => {
  const refreshToken = JSON.parse(
    localStorage.getItem("refreshToken") || "null"
  );
  set(authAtom, (prev) => ({ ...prev, refreshToken }));
};

function App() {
  return (
    <RecoilRoot initializeState={initializeState}>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
