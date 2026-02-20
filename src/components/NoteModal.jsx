import React from 'react'

const NoteModal = ({title , handelTitleChange , value , handleCreateNote}) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="form-floating">
                                <input type="email" className="form-control" id="floatingInputValue" value={value} onChange={handelTitleChange}/>
                                <label htmlFor="floatingInputValue">Enter your notes</label>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleCreateNote}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteModal