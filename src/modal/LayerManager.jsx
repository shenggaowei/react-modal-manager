import React from 'react'

export default modals => WrappedComponent => class LayerManager extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      events: {},
    }
    this.layers = {}
  }

  setModalRef = (key, modal) => {
    this.layers[key] = modal
  }

  componentDidMount() {
  }

  setModalEvent = events => {
    const data = {}
    events.forEach(ele => {
      const { key, ...props } = ele
      console.log(props)
      data[key] = props
    })
    this.setState({
      events: data
    })
  }

  render() {
    const { events } = this.state
    return <React.Fragment>
      <WrappedComponent
        layers={this.layers}
        setModalEvent={this.setModalEvent}
      />
      {
        modals.map(ele => {
          const { key, Component } = ele
          return <Component
            key={key}
            ref={this.setModalRef.bind(this, key)}
            {...events[key]}
          />
        })
      }
    </React.Fragment>
  }
}