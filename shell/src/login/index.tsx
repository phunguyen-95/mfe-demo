

type LoginProps = {
  onSubmit?: (values: Record<string, string>) => void;
};

export default function Login({ onSubmit }: LoginProps) {

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    onSubmit?.(formValues as Record<string, string>)

  };
  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username" className="label">
          Username:
        </label>
        <input name="username" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="username" className="password">
          Password:
        </label>
        <input type="password" name="password" className="form-input" />
      </div>
      <div className="form-group">
        <button className="form-button" type="submit">
          Login
        </button>
      </div>
 
    </form>
  );
}
