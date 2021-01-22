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
    this.setState({
      visible: false
    }, () => {
      this.props.handleOk()
    })
  }

  handleClickCancel = () => {
    this.setState({
      visible: false
    }, () => {
        this.props.handleCancel()
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
        isVisible={this.state.isVisible}
        {...this.props}
      />
    </Modal>
  }
}