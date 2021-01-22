import React from 'react'
import ModalA from './modal_child/child_a'
import ModalB from './modal_child/child_b'
import LayerManager from './modal/LayerManager'
import './App.css'
import 'antd/dist/antd.css'

const modals = [
  {
    Component: ModalA,
    key: 'modal_a'
  },
  {
    Component: ModalB,
    key: 'modal_b'
  }
]

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleOpenModal = key => {
    this.props.layers[key].handleOpenModal()
  }

  handleOkA = () => {
    console.log('===>弹窗A OK')
  }
  
  handleCancelA = () => {
    console.log('===>弹窗A cancel')
  }

  handleOkB = () => {
    console.log('===>弹窗B OK')
  }

  handleCancelB = () => {
    console.log('===>弹窗B cancel')
  }

  componentDidMount() {
    const props = [
      {
        key: 'modal_a',
        handleOk: this.handleOkA,
        handleCancel: this.handleCancelA
      },
      {
        key: 'modal_b',
        handleOk: this.handleOkB,
        handleCancel: this.handleCancelB
      }
    ]
    this.props.setModalEvent(props)
  }

  render() {
    return <div className="App">
      <button onClick={this.handleOpenModal.bind(this, 'modal_a')}>弹窗A</button>
      <button onClick={this.handleOpenModal.bind(this, 'modal_b')}>弹窗B</button>
    </div>
  }
}

export default LayerManager(modals)(App)
