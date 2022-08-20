/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2021/9/2 15:22
 * @File: FadeEffect.js
 * @Description 有淡入淡出效果的组件
 */
import './index.scss'

const FadeEffect = (props) => {
  const {
    children,
    active,
    duration = 0.5  //
  } = props
  return (
    <div
      className={`layout-container ${active ? 'active' : ''}`}
      style={{
        transition: `opacity ${duration}s`
      }}
    >
      {children}
    </div>
  )
}

export default FadeEffect
 
