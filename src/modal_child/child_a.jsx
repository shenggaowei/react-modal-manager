import React from 'react'
import EnhanceModal from '../modal/EnhanceModal'

class ContentA extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <p>我是弹窗A的内容</p>
    </div>
  }
}

export default EnhanceModal({
  title: '弹窗A'
})(ContentA)