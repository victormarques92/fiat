import React, { useCallback, useState } from 'react';
import { Container, Controller, Details, Item, Main } from './styles';

const Tabs = ({ list }) => {
  const [selected, setSelected] = useState(list[0]);

  const handleChangeTabs = useCallback(version => {
    setSelected(version);
  }, []);

  return (
    <Container>
      <Details>
        <h3>{selected.name}</h3>

        <ul>
          {selected.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Details>

      <Main>
        <img src={selected.image.main} alt={selected.name} />
      </Main>

      <Controller>
        {list?.map(version => (
          <Item
            key={version.id}
            isActive={selected.id === version.id}
            onClick={() => handleChangeTabs(version)}
          >
            <div>
              <img src={version.image.mini} alt={version.name} />
            </div>

            <span>{version.name}</span>
          </Item>
        ))}
      </Controller>
    </Container>
  );
};

export default Tabs;
