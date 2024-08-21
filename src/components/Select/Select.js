import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectIcon id="chevron-down" size={24} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: min-content;
`;

const SelectElement = styled.select`
  padding: 12px 40px 12px 16px;
  font-size: 1rem;
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 9px;
  right: 4px;
  color: ${COLORS.gray700};
  pointer-events: none;

  ${SelectElement}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
