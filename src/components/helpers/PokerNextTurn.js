//loop through the state.days array and check if it matches the day
function nextIndex(pokerNumber, currentIndex, foldedIndex, bankruptIndex) {
  currentIndex = ((currentIndex+1)%pokerNumber);
  while (foldedIndex.includes(currentIndex) || bankruptIndex.includes(currentIndex)){
    currentIndex = ((currentIndex+1)%pokerNumber);
  }
}

function getInterviewersForDay(state, day) {
  let appoints = [];
  let results = [];
  for (let a of state.days) {
    if (a.name === day) {
      appoints = a.interviewers;
    }
  }
  for (let a of appoints) {
    results.push(state.interviewers[a]);
  }
  return results;
}
//if appointment has an interview, return a formatted interview object
function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  for (let interviewerID in state.interviewers) {
    if (Number(interviewerID) === Number(interview.interviewer)) {
      return {
        student: interview.student,
        interviewer: { ...state.interviewers[interviewerID] }
      };
    }
  }
}
export { nextIndex };