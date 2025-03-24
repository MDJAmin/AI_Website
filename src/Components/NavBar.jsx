import "./NavBar.css";
import github from "../../public/github-outline.svg";
export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <ul className='nav-list'>
          <li>
            <a
              href='https://github.com/MDJAmin'
              className='nav-link'
            >
              <img
                src={github}
                alt='Github'
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
