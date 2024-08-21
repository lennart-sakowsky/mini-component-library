import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "24px",
    fontSize: "0.9rem",
    borderStroke: "1px",
    iconSize: "16",
  },
  large: {
    height: "36px",
    fontSize: "1.1rem",
    borderStroke: "2px",
    iconSize: "24",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <InputWrapper style={{ width: width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <InputElement
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height,
          "--font-size": styles.fontSize,
          "--border-stroke": styles.borderStroke,
        }}
      ></InputElement>
    </InputWrapper>
  );
};

const InputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const InputElement = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-stroke) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${InputWrapper}:hover &::placeholder {
    color: ${COLORS.gray700};
  }
`;

export default IconInput;
