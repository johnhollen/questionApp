export const randomQuestionSelectors = {
    data: state => state.randomQuestion.data,
    randomQuestionIsLoading: state => state.randomQuestion.loadingStatus.randomQuestionIsLoading
};
