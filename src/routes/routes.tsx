import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../error-page";
import App from "../App";
import { WikiMain } from "../Wiki/Wiki";
import { BattleMakerMain } from "../BattleMaker/BattleMaker";
import { CharacterCreationMain } from "../CharacterCreation/CharacterCreation";

const homepage = "/paths-of-legend-companion";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: `${homepage}`,
    element: <App />,
  },
  {
    path: `${homepage}/wiki`,
    element: <WikiMain />,
  },
  {
    path: `${homepage}/battle-maker`,
    element: <BattleMakerMain />,
  },
  {
    path: `${homepage}/character-creation`,
    element: <CharacterCreationMain />,
  },
]);