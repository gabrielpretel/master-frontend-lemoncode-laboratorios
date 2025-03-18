import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';
import { Character, createEmptyCharacter } from './character.vm';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (hotel: Character) => {
    const apiHotel = mapCharacterFromVmToApi(hotel);
    const success = await api.saveHotel(apiHotel);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
