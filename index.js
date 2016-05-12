console.log('loaded!')

function promptUser (alarm) {
  console.log('in function')
  if (alarm.name !== 'DuolingoPrompter') return
  alert('You need to practice!')
}
chrome.alarms.onAlarm.addListener(promptUser)

chrome.alarms.create('DuolingoPrompter', {
  periodInMinutes: 0.1
})
console.log('finished')
