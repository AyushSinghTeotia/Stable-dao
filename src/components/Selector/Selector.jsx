import React, { useState } from "react";
import styled from "styled-components";
const Selector = ({ menus }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      {menus.map((item, index) => {
        return (
          <Item
            selected={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item.label}
          </Item>
        );
      })}
    </Container>
  );
};

export default Selector;

const Container = styled.div`
  background-color: #32373e;
  display: inline-flex;
  padding: 5px 8px;
  align-items: center;
`;

const Item = styled.div`
  background-color: ${({ selected }) => (selected ? "#2be79a" : "transparent")};
  margin: 0 5px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? "#121418" : "#9ea0a4")};
  cursor: pointer;
`;
