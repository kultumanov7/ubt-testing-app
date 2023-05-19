import { createSlice, current } from "@reduxjs/toolkit";
import {
  fetchExams,
  fetchEnrollments,
  startEnrollment,
  fetchEnrollment,
  getQuestions,
  completeEnrollment,
  saveResponses,
} from "@store/actions/examsAction";

const initialState = {
  exams: null,
  exam: null,
  enrollments: null,
  enrollment: null,
  questions: null,
  isLoading: false,
  error: null,
};

export const examsSlice = createSlice({
  name: "exams",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchExams.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchExams.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.exams = action.payload.results;
    },
    [fetchExams.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchEnrollments.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchEnrollments.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.enrollments = action.payload;
    },
    [fetchEnrollments.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [startEnrollment.pending.type]: (state) => {
      state.isLoading = true;
    },
    [startEnrollment.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [startEnrollment.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getQuestions.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getQuestions.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.questions = action.payload;
    },
    [getQuestions.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [completeEnrollment.pending.type]: (state) => {
      state.isLoading = true;
    },
    [completeEnrollment.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [completeEnrollment.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [saveResponses.pending.type]: (state) => {
      state.isLoading = true;
    },
    [saveResponses.fulfilled.type]: (state, action) => {
      const copyQuestions = JSON.parse(JSON.stringify(current(state.questions)));
      for (let i = 0; i < copyQuestions.exam_questions.length; i++) {
        for (let j = 0; j < copyQuestions.exam_questions[i].questions.length; j++) {
          if (copyQuestions.exam_questions[i].questions[j].id === action.payload.question_id) {
            copyQuestions.exam_questions[i].questions[j].responses = [{ choices: action.payload.choice_ids }];
            break;
          }
        }
      }
      state.questions = { ...copyQuestions };
      state.isLoading = false;
      state.error = null;
    },
    [saveResponses.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchEnrollment.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchEnrollment.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.enrollment = action.payload;
    },
    [fetchEnrollment.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default examsSlice.reducer;
