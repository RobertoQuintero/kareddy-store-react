import React from 'react'
import { connect } from 'react-redux'
import { manageModal } from '../../Redux/actionsCreators'

const Button = ({openModal,modal}) => {
  console.log(modal)
  return (
    <div>
      <button onClick={()=>openModal()}>click me</button>
    </div>
  )
}

const mapStateToProps = state =>({
  modal: state.modalReducer.modal
})
const mapDispatchToprops = dispatch =>({
  openModal(){
    dispatch(manageModal())
  }
})

export default connect(mapStateToProps,mapDispatchToprops)(Button)
