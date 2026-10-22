import EmailInput from "./components/EmailInput";
import Paswrd from "./components/Paswrd";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <main className="login">
      <section className="login-left">
        <img className="logo" src="/logo.png" alt="Pocket Med logo" width="137" height="81" />

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h1>Welcome Back To, <span className="brand">Pocket Med</span></h1>
          <p className="subtitle">Welcome back! Please enter your details.</p>

          <div className="field">
            <EmailInput />
          </div>
          <div className="field">
            <Paswrd />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <a className="forget" href="#">
              Forgot Password?
            </a>
          </div>

          <div style={{ maxWidth: '350px', margin: '0 auto', width: '100%' }}>
            <Button />
          </div>
        </form>
      </section>

      <section className="login-right">
        <img src="/doctor.jpg" alt="Doctor" />
      </section>
    </main>
  );
}

export default App;