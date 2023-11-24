import cl from './styles.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react'
import classNames from 'classnames';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  SECONDARY = 'secondary',
  TOMATO = 'tomato',
  YELLOW = 'yellow',
  ORANGE = 'orange',
}

export enum SizeButton {
  BIG = 'big'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  size?: SizeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, theme='primary', size='', children, ...otherProps } = props;

  return (
    <button
      className={classNames(cl.button, cl[theme], cl[size], className)}
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
};