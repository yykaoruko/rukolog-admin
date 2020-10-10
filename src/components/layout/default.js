export const DefaultLayout = (props) => (
  <div>
    <header>
      <h1>rukolog-admin</h1>
    </header>
    <main>{props.children}</main>
  </div>
)