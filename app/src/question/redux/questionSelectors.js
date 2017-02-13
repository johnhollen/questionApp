export const getRandomQuestion = (state) => state.randomQuestion.data;
export const randomQuestionIsLoading = (state) =>
    state.randomQuestion.loadingStatus.randomQuestionIsLoading;

export const getMyQuestions = (state) => state.myQuestions.data;
export const myQuestionsAreLoading = (state) =>
    state.myQuestions.loadingStatus.myQuestionsAreLoading;

export const addQuestionIsShowing = (state) => state.UI.addQuestion.visible;
export const getAddQuestionViewMode = (state) =>
    state.UI.addQuestion.viewMode;
