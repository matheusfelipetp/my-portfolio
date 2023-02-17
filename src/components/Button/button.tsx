interface IButton {
  children: JSX.Element | string;
  className: string;
}

const Button = ({ children, className }: IButton) => {
  return <button className={className}>{children}</button>;
};

export default Button;
