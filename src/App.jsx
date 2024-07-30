import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/HeaderDiv'
import Card from './assets/components/main/MainDiv'


let objArr = [
  {
    photo: "/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    action: " reacted to your recent post",
    on: "My first tournament today!",
    status: false,
    time: "1m ago",
    id: 1
  },
  {
    photo: "/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    action: " followed you",
    status: false,
    time: "5m ago",
    id: 2
  },
  {
    photo: "/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    action: " has joined your group",
    group: "Chess Club",
    status: false,
    time: "1 day ago",
    id: 3
  },
  {
    photo: "/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    action: " sent you a private message",
    status: true,
    time: "5 days ago",
    message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    id: 4
  },
  {
    photo: "/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    action: " commented on your picture",
    status: true,
    time: "1 week ago",
    id: 5
  },
  {
    photo: "/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    action: " reacted to your recent post",
    on: "5 end-game strategies to increase your win rate",
    status: true,
    time: "2 weeks ago",
    id: 6
  },
  {
    photo: "/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    action: " left the group",
    group: "Chess Club",
    status: true,
    time: "2 weeks ago",
    id: 7
  }
]



function App() {
  const [objArray, setObjArray] = useState(objArr);
  const [counter, setCounter] = useState(objArray.filter(item => !item.status).length);
  return (
    <>
      <Header counter={counter} setObjArray={setObjArray} objArray={objArray}/>
      <main>
        {objArray.map(obj => (
          <Card key={Math.random()} obj={obj} objArray={objArray} setObjArray={setObjArray} setCounter={setCounter}/>
        ))}
      </main>
    </>
  )
}

export default App