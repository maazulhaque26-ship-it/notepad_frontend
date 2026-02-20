import React from 'react'

const DeleteModal = ({handleDelete}) => {
  return (
    <>
    <div className="modal fade" id="deleteEmployeeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">delete notes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="form-floating">
                                <p>are you sure you want to delete the record ?</p>
                                <p className='text-warning'><small>This action cannot be repeated</small></p>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="cancel"/>
                            <input type="button" className="btn btn-danger" value="Delete" data-bs-dismiss="modal" onClick={handleDelete}/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default DeleteModal