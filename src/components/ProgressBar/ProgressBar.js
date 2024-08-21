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

  const Progress = styled.div`
    width: 370px;
    padding: var(--padding);
    border-radius: var(--borderRadius);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `;

  const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: var(--borderRadius);
  `;

  return (
    <Progress
      role="progressbar"
      aria-valuenow={value}
      style={{
        "--padding": styles.padding,
        "--borderRadius": styles.borderRadius,
      }}
    >
      <Bar
        style={{
          "--width": value + "%",
          "--height": styles.height,
          "--borderRadius": styles.borderRadius,
        }}
      />
    </Progress>
  );
};

export default ProgressBar;
