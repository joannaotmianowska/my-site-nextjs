import React from 'react';

interface EpisodeProps {
  title: string;
  description: string;
  duration: number;
  date: string;
}

const EpisodeDetails: React.FC<EpisodeProps> = ({
  title,
  description,
  duration,
  date,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Duration: {duration} minutes</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default EpisodeDetails;
