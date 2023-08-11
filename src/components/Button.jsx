import '../styled-components/Button.css'
import { Link } from 'react-router-dom';

const Button = ({content,children,to}) => { 
  return (
    <Link to={to} className='button-link'>
        <button className='button'>
            {children}
            {content}
        </button>
    </Link>
  )
}

export default Button