interface IButton {
  children: JSX.Element[] | string;
  className?: string;
}

export const Button = ({ children, className }: IButton) => {
  return <button className={className}>{children}</button>;
};

