import './index.module.scss'

export default function(props) {
  const { name, size, color, className, onClick } = props
  const classStyle = `iconfont icon-${ name } ${ className }`
  const style = {
    fontSize: size,
    color: color
  }
  return (
    <i className={classStyle} style={style} onClick={ onClick } />
  )
}
