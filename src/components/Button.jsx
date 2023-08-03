import '../styled-components/Button.css'


const Button = ({content,children}) => { 
  return (
    <button className='button'>
        {children}
        {content}
    </button>
  )
}

export default Button