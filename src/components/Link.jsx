import '../styled-components/Link.css'


const Link = ({content,to}) => {
  return (
    <a className='link' href={to}>{content}</a>
  )
}

export default Link