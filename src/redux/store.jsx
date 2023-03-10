import { configureStore } from '@reduxjs/toolkit'
import { adminStudentlist } from './reducers/AdminStudentlist'

import EmailSlice from './reducers/EmailSlice'
import LoginSlice from './reducers/LoginSlice'
import regDetailsSlice from './reducers/regDetailSlice'
import superAdminInfo from './reducers/superAdminInfo'

import showProfileSlice from './showProfile'

export const store = configureStore({
  reducer: {
    showProfile: showProfileSlice.reducer,
    Login: LoginSlice.reducer,
    emailSend: EmailSlice.reducer,
    regDetails: regDetailsSlice.reducer,
    superAdmin: superAdminInfo.reducer,
    adminStudentlist: adminStudentlist.reducer,
  },
})
