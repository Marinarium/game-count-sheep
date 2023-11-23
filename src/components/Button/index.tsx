import cl from './styles.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react'
import classNames from 'classnames';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, theme='primary', children, ...otherProps } = props;

  return (
    <button
      className={classNames(cl.button, cl[theme], className)}
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
};