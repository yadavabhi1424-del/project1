{/*import Navbar from "./Navbar";*/}

function Layout({ children, isLoggedIn, setIsLoggedIn, role }) {
  return (

      <div>
        {children}
      </div>
  );
}

export default Layout;
