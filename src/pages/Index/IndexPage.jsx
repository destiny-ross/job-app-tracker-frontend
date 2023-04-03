import StyledForm from "./IndexPage.styles";
const IndexPage = () => {
  return (
    <StyledForm>
      <div className="logo-large">
        <h1>A</h1>
      </div>
      <section>
        <h1>Welcome</h1>
        <p>Log in to track your job applications</p>
      </section>
      <section>
        <input />
        <input />
      </section>
      <section>
        <a href="/forgot-password">Forgot your Password?</a>
      </section>
      <section>
        <button>Submit</button>
      </section>
      <section>
        <p>
          Don't have an account? <a href="create-account">Create one now.</a>
        </p>
      </section>
    </StyledForm>
  );
};
export default IndexPage;
