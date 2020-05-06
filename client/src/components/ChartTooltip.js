import React from 'react';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import PropTypes from 'prop-types';

const TooltipContainer = styled.div`
  border-radius: 7px;
  padding: 5px;
  background-color: ${colors.backgroundSecondary};
  color: ${colors.fontPrimary};
`;

export default function ChartTooltip({ active, payload, label }) {
  if (active && payload && label) {
    return (
      <TooltipContainer>
        <div>{`${label} :`}</div>
        <div>{`${payload[0].value} $`}</div>
      </TooltipContainer>
    );
  }

  return null;
}

ChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.any,
};
