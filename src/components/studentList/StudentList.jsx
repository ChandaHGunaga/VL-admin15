import { useDispatch } from 'react-redux'
import { adminStudentlistThunk } from '../../redux/reducers/AdminStudentlist'
import EnhancedTable from '../studentListComponent/StudentListComponent'
import { useEffect } from 'react'
import './StudentList.css'

const StudentList = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(adminStudentlistThunk())
  }, [])
  return (
    <div className="studentList-container">
      <div className="studentlist-table-container">
        <EnhancedTable />
      </div>
      {/* <StudentListComponent /> */}
    </div>
  )
}

export default StudentList
