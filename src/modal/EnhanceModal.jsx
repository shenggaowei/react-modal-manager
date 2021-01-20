import React from 'react'
import { Modal } from 'antd'

export default (config = {}) => WrappedComponent => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleOpenModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      visible: false
    })
  }

  handleClickOk = () => {

  }

  handleClickCancel = () => {

  }

  componentDidMount() {
    this.props.getButtonFunction({
      handleClickOk: this.handleClickOk,
      handleClickCancel: this.handleClickCancel
    })
  }

  render() {
    const { title = '弹窗标题' } = config
    const { visible } = this.state
    return <Modal
      title={title}
      visible={visible}
      onOk={this.handleClickOk}
      onCancel={this.handleClickCancel}
      >
      <WrappedComponent
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
      />
    </Modal>
  }
}