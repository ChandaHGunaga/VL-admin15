import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    message: '',
    data: [],
    headers: [],
    isSuccess: false,
    isRejected: false,
    loading: false,
}

export const adminStudentlistThunk = createAsyncThunk(
    'AdminStudentlist/adminStudentlistThunk',
    async () => {
        try {
            const fetchedData = await axios.request({
                method: 'get',
                url: `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/studentList?pageNumber=1&limit=3`,
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
            })

            return fetchedData
        } catch (err) {
            console.log('error', err)

        }
    },
)

export const adminStudentlist = createSlice({
    name: 'adminStudentlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(adminStudentlistThunk.pending, (state, action) => {

            state.loading = true
        })
        builder.addCase(adminStudentlistThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.headers = action
            state.isSuccess = true
        })
        builder.addCase(adminStudentlistThunk.rejected, (state, action) => {
            console.log('bbbbbbbbrej', action)
            state.message = action.payload
            state.loading = false
            state.isRejected = true
        })
    },
})

export default adminStudentlist;
