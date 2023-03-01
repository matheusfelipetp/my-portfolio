interface IInput {
  label: string;
  textarea?: boolean;
}

export const Input = ({ label, textarea }: IInput) => {
  return textarea ? (
    <div className="input-group">
      <textarea required name={label} className="textarea" autoComplete="off" />
      <label className="user-label">{label}</label>
    </div>
  ) : (
    <div className="input-group">
      <input
        required
        type="text"
        name={label}
        className="input"
        autoComplete="off"
      />
      <label className="user-label">{label}</label>
    </div>
  );
};
