import React from "react";
import { DetailRickComponent } from "./detail-rick.component";
import { getCharacterDetail } from "./api/api";
import { useParams } from "react-router-dom";
import { mapDetailRickToVM } from "./detail-rick.mapper";
import { CharacterEntity } from "./detail-rick.vm";

export const DetailRickContainer: React.FC = () => {
  const [character, setCharacter] = React.useState<CharacterEntity>();
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      getCharacterDetail(id).then(mapDetailRickToVM).then(setCharacter);
    }
  }, [id]);

  return character && <DetailRickComponent character={character} />;
};
