import Sale from 'assets/img/money.png'

const  NavBar= () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">  
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={Sale} alt="" width="60" />
        </nav>
      </div>
  );
}

export default NavBar;
