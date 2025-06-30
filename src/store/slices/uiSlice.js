import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAssignment: false,
  currentAssignment: null,
  showFinalAssessment: false,
  showCertificate: false,
  sidebarExpanded: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowAssignment: (state, action) => {
      state.showAssignment = action.payload;
    },
    setCurrentAssignment: (state, action) => {
      state.currentAssignment = action.payload;
    },
    setShowFinalAssessment: (state, action) => {
      state.showFinalAssessment = action.payload;
    },
    setShowCertificate: (state, action) => {
      state.showCertificate = action.payload;
    },
    setSidebarExpanded: (state, action) => {
      state.sidebarExpanded = action.payload;
    },
    closeAllModals: (state) => {
      state.showAssignment = false;
      state.currentAssignment = null;
      state.showFinalAssessment = false;
      state.showCertificate = false;
    },
  },
});

export const {
  setShowAssignment,
  setCurrentAssignment,
  setShowFinalAssessment,
  setShowCertificate,
  setSidebarExpanded,
  closeAllModals,
} = uiSlice.actions;

export default uiSlice.reducer;