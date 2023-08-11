import '../styled-components/Linker.css'

import { Link } from 'react-router-dom';

const Linker = ({content,children,to}) => { 
  return (
    <Link to={to} className='link'>
        <button>
            {children}
            {content}
        </button>
    </Link>
  )
}

export default Linker