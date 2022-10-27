/**
 * 插槽组件
 * @param {*} props 
 * @param {*} name 
 * @returns 
 */
export default function ({props, name}) {
  function render() {
    let { children } = props
    if (typeof children ==='object' && !Array.isArray(children)) {
      children = [children]
    }
    if (children) {
      for (let el of children){
        if (el.props.slot === name) {
          return el
        } else if (!el.props.slot && !name) {
          return el
        }
      } 
    }
    return null
  }

  const slot = render()
  return (
    <>
      {slot}
    </>
  )
}
