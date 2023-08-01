import '../styled-components/Button.css'

const Button = ({content,icon}) => {
  return (
    <button className='button'>
        <img src={icon}/>
        {content}
    </button>
  )
}

export default Button