import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import BackButton from '../../../Components/BackButton/BackButton'
import DragDrop from '../../../Components/NewsCreateModal/DragDrop'
import NewsCreateModal from '../../../Components/NewsCreateModal/NewsCreateModal'
import DashboardLayout from '../../../Layout/DashboardLayout/DashboardLayout'
import './add-lesson.css'

const AddLesson = () => {
  const [videoModal, setVideoModal] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const [textModal, setTextModal] = useState(false)
  return (
    <>
      {videoModal && <NewsCreateModal type='video' videoActive={videoModal} setVideoActive={setVideoModal} />}
      {imageModal && <NewsCreateModal type='image' imageActive={imageModal} setImageActive={setImageModal} />}
      {textModal && <NewsCreateModal type='text' textActive={textModal} setTextActive={setTextModal} />}
      <DashboardLayout title='Add new lesson'>
        <BackButton location='/admin/coursepage' />
        <div className='admin-lesson-create-container'>
          <input type='text' placeholder='Write title here' />
          <DropZone></DropZone>
          <div className='admin-lesson-create-btn-wrapper'>
            <button className='secondary-btn' onClick={() => setVideoModal(true)}><img src='/img/video-outline.svg' alt='video icon' /> <span>Add video</span></button>
            <button className='secondary-btn' onClick={() => setImageModal(true)}><img src='/img/image-outline.svg' alt='image icon' /> <span>Add image</span></button>
            <button className='secondary-btn' onClick={() => setTextModal(true)}><img src='/img/text-outline.svg' alt='text icon' /> <span>Add text</span></button>
            <button className='secondary-btn'><img src='/img/test-outline.svg' alt='test icon' /> <span>Add test</span></button>
          </div>
        </div>
        <LessonMaterial></LessonMaterial>
        <LessonSaveModal></LessonSaveModal>
      </DashboardLayout>
    </>
  )
}

const DropZone = () => {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })
  
  return (
    <div className="add-lesson-drag">
    <DragDrop getInputProps={getInputProps} getRootProps={getRootProps} files={files} setFiles={setFiles} />
    </div>
  )
}

const LessonMaterial = () => {
  return (
    <div className='admin-lesson-materials-container'>
      <h1>Materials</h1>
      <p>You dont have any materials in lesson
        Add it for your users.
      </p>
      <button className='secondary-btn'>Add materials</button>
    </div>
  )
}

const LessonSaveModal = () => {
  return (
    <div className='save-lesson-modal'>
      <h4>Do you want to save lesson?</h4>
      <div>
        <button className='secondary-btn'>Cancel</button>
        <button className='primary-btn secondary-btn'>Save lesson</button>
      </div>
    </div>
  )
}

export default AddLesson