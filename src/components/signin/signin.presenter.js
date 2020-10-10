export function SigninPresenter({ email, password, handleChangeEmail, handleChangePassword, onClickSignin, isDisabled }) {
  return (
    <section>
      <h2>signin</h2>
      <form>
        <label htmlFor="email">email</label>
        <input name="email" type="email" value={email} onChange={handleChangeEmail} />
        <label htmlFor="password">password</label>
        <input name="password" type="password" value={password} onChange={handleChangePassword} />
        <button type="button" disabled={isDisabled} onClick={onClickSignin}>signin</button>
      </form>
    </section>
  )
};
