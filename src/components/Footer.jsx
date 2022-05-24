function Footer() {
  return (
    <>
      <footer className="page-footer teal lighten-3">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
