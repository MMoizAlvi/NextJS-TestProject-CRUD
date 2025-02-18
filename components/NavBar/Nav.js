import Link from 'next/link'

import navStyles from '../../styles/nav.module.css'

const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
      <li><Link href='/segregate/next'>Nested</Link></li>
    </ul>
  </nav>
)

export default Nav
