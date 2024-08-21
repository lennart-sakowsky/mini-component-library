/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: "8px",
    padding: "0",
    borderRadius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0",
    borderRadius: "4px",
  },
  large: {
    height: "16px",
    padding: "4px",
    borderRadius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding,
        "--borderRadius": styles.borderRadius,
      }}
    >
      <VisuallyHidden>{value + "%"}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height,
          }}
        />
      </BarWrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  // Cut of edges from the Bar when reaching close to 100%
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
