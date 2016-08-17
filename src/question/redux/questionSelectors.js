export const randomQuestionSelectors = {
    data: state => state.randomQuestion.data,
    loading: state => state.randomQuestion.loadingStatus.loading
};