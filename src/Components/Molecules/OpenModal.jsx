import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Organisms/Modal'
import {manageModal} from '../../Redux/actionsCreators'

const OpenModal = ({modal}) => {
  return (
    <>
      {
        !modal
          ? <></>
          : <Modal />
      }
    </>
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

export default connect(mapStateToProps,mapDispatchToprops)(OpenModal)
