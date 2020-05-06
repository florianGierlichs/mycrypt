import React, { useEffect, useState } from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ChartContainer = styled.div`
  width: 254px;
  height: 100px;
  position: relative;
  right: 54px;
`;

export default function CardLineChart({ id }) {
  const [coinHistory, setCoinHistory] = useState(null);

  useEffect(() => {
    getCoinHistory();
    // eslint-disable-next-line
  }, [id]);

  const getCoinHistory = async () => {
    try {
      const response = await fetch(`/api/coins/history/${id}`);
      const result = await response.json();

      const fixedResult = result.data.map((coin) => {
        const { priceUsd, date } = coin;

        const formattedDate = new Date(date);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const fixedPrice = Number(priceUsd).toFixed(2);
        return {
          priceUsd: Number(fixedPrice),
          date: formattedDate.toLocaleDateString('de-DE', options),
        };
      });

      setCoinHistory(fixedResult);
    } catch (error) {
      console.log(error);
    }
  };

  if (!coinHistory) return null; // replace with loading animation

  return (
    <ChartContainer>
      <LineChart width={300} height={150} data={coinHistory}>
        <YAxis tick={false} stroke="#F5F5F5" />
        <XAxis tick={false} stroke="#F5F5F5" dataKey="date" />
        <Tooltip content={<ChartTooltip />} />
        <Line
          type="monotone"
          dataKey="priceUsd"
          stroke="#F5F5F5"
          activeDot={{ r: 3 }}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}

CardLineChart.propTypes = {
  id: PropTypes.string,
};
