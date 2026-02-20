import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notes from './Notes'
import NoteModal from '../components/NoteModal'
import { useEffect } from 'react'
import { get , post ,put , dele } from '../../services/ApiEndPoint'
import { useState } from 'react'
import  UpdateModal  from "../components/UpdateModal";
import toast from 'react-hot-toast';
import DeleteModal from '../components/DeleteModal'


const Home = () => {

const [note, setNote] = useState([])
const [title, setTitle] = useState("")
const [refresh, setRefresh] = useState(false)
const [updatenotes, setUpdatenotes] = useState("")
const [noteId, setNoteId] = useState("")

if(note){
console.log("note:",note)
}

useEffect(()=>{
const getNotes = async ()=>{
  try{
  const request = await get('/notes/getnotes')
  const response = request.data 
  console.log(response)
  setNote(response.notes)
  }catch(err){
  console.log(err)
  }
}
getNotes();
} ,[refresh])

const formatDate = (datestring) =>{
  const options = {year:"numeric" ,month:"long" ,day:"numeric"  }
  return new Date(datestring).toLocaleDateString(undefined , options)
}

const handleCreateNote= async ()=>{
  try{
  const request = await post("/notes/createnotes" ,{title})
  const response = request.data
  if(response.success){
    toast.success(response.message)
    setRefresh(prev => !prev)
    setTitle("");
  }
}catch(err){
  console.log(err)
  }
}


const handleUpdateNote = async ()=>{
  try {
    console.log("note ID:",noteId)
    const request = await put(`/notes/update/${noteId}` ,{title:updatenotes})
    const response = request.data
    if(response.success){
      toast.success(response.message)
      setRefresh(prev => !prev);
    }
  } catch (err) {
    if(err.response){
      toast.error(err.response.data.message)
      console.log(err)
    }
  }
}

const handleDelete = async ()=>{
  try {
    const request = await dele(`/notes/delete/${noteId}`)
    const response = request.data
    if(response.success){
      toast.success(response.message)
    setRefresh(prev => !prev);
    }
  } catch (error) {
    if(response.error){
      toast.error(error.response.data.message)
    }
    console.log(error)
  }
}

  return (
    <>
    <UpdateModal title={"Update Notes"}  value={updatenotes} handelTitleChange={(e)=>setUpdatenotes(e.target.value)} handleUpdateNote={handleUpdateNote}></UpdateModal>
    <NoteModal 
    title={"New Note"} 
    value={title} 
    
    // Yahan setTitle call karna hi asli chabi hai lala!


    handelTitleChange={(e) => setTitle(e.target.value)} 
    handleCreateNote={handleCreateNote} 
/>
  <DeleteModal handleDelete={handleDelete}/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
              <Sidebar/>
            </div>
            <div className='col-lg-10 col-md-10'>
              <Navbar/>
            <div className='mt-3 mx-5'>
               <h1 className='fs-2 fw-bold'>NOTES</h1>
            </div>
            <div className='row mt-4 mx-5'>
              {note && note.map((elem)=>{
                return(
                  <div key={elem._id} className='col-md-4 col-lg-4 mb-5 '>
                  <Notes date={formatDate(elem.createdAt)}  title={elem.title} handleUpdate={()=>setNoteId(elem._id)}/>
               </div>
                )
              })}
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home