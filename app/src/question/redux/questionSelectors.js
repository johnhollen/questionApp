export const getRandomQuestion = (state) => state.randomQuestion.data;
export const randomQuestionIsLoading = (state) =>
    state.randomQuestion.loadingStatus.randomQuestionIsLoading;

export const addQuestionIsShowing = (state) => state.UI.addQuestion.visible;
