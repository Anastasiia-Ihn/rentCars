import Icons from '../sprite.svg';

export const Icon = ({
  className = '',
  fill = 'none',
  stroke = 'inherit',
  name,
  width = '18px',
  height = '18px',
}) => {
  return (
    <svg
      className={className}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${Icons}#icon-${name}`}></use>
    </svg>
  );
};
