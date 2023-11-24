import React, {FC, SVGProps} from 'react';

interface ISVGSpriteProps {
  addClass?: string;
  width: number;
  height: number;
  path: string;
  name: string;
  handleClick?: () => void;
}

type SVG = SVGProps<SVGSVGElement>;

const SVGSprite: FC<ISVGSpriteProps & SVG> = ({
                                                className,
                                                width,
                                                height,
                                                path,
                                                name,
                                                handleClick,
                                                ...props
                                              }) => {
  return (
    <svg
      width={width.toString()}
      height={height.toString()}
      className={className || ''}
      onClick={handleClick}
      {...props}
    >
      <use xlinkHref={`${path}.svg#${name}`}/>
    </svg>
  );
};

export default SVGSprite;
