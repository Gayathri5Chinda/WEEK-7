
import { RecoilRoot, useSetRecoilState } from 'recoil';
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'
import { useRecoilValue
 } from 'recoil';
function App() {
  

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationCount >= 100 ? 99 : networkNotificationCount;
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageAtomCount = useRecoilValue(messagingAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);

  const total = networkNotificationCount + finalValue + jobsAtomCount + messageAtomCount + notificationsAtomCount

  return (
    <>
      <button> Home </button>
      <button>My network ({finalValue})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messageAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      <button>Me({total})</button>
    </>
  )
}



export default App













// function ButtonUpdater(){
//   const setMessageAtomCount = useSetRecoilState(messagingAtom)
//   return <button onClick={() => {
//     setMessageAtomCount (c => c + 1)
//   }}>Me</button>
// }