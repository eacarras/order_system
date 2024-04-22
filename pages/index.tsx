import { TBeerExtended } from '@/types/TBeer'
import { TCheck } from '@/types/TCheck'
import React, { useState } from 'react'

const Home = () => {
  const [checkId, setCheckId] = useState<number>(0)
  const [check, setCheck] = useState<TCheck|null>(null)

  const [isPaying, setIsPaying] = useState<boolean>(false)
  const [friendsSelected, setFriendsSelected] = useState<string[]>([])


  const friends: string[] = [
    "Pepe", "Julio", "Mario"
  ]

  // Util functions
  const retrieveCheck = (e: any) => {
    if (e.key === 'Enter') {
      fetch("http://localhost:3000/api/check/1", { method: "POST" })
        .then((response) => response.json())
        .then((response) => setCheck(response.data))
        .catch((error) => {
          setCheck(null)
          console.error(error)
        })
    }
  }
  const updateSelectedFriends = (e: any) => {
    if (e.target.value && !friendsSelected.includes(e.target.value)) {
      setFriendsSelected([...friendsSelected, e.target.value])
    }
  }
  const pay = () => {
    fetch("http://localhost:3000/api/pay/1", { method: "POST" })
      .then((response) => response.json())
      .then((response) => setCheck(response.data))
      .catch((error) => {
        setCheck(null)
        // Add toast
      })
      .finally(() => {
        setTimeout(() => {
          setFriendsSelected([])
          alert("Payment completed")
        }, 1000)
      })
  }

  return (
    <aside className="p-40">
      <div className="rounded border-2 border-black px-4 py-2">
        <h1 className="text-lg text-center my-4 font-semibold">BAR: JUST BEER</h1>
        <input
          type="number"
          onKeyDown={retrieveCheck}
          onChange={(e) => setCheckId(Number(e.target.value))}
          className="rounded border-2 py-2"
          placeholder='Numero de Cuenta' />
        
        {check && (
          <div className='flex flex-col'>{/** Details of the order */}
            <table className="table-fixed mt-8 text-left border-2">
              <thead className='border-2'>
                <tr>
                  <th className='text-center'>Product Name</th>
                  <th className='text-center'>Unit</th>
                  <th className='text-center'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  check.details.map((product: TBeerExtended) => (
                    <tr key={product.id}>
                      <td >{product.name}</td>
                      <td className='border-2'>{product.amount}</td>
                      <td className='border-2'>{product.price * product.amount}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className='flex flex-row py-2'>
                <p className="font-semibold">Total: </p>
                <span>{check.details[0].currency || "$"} {check.total}</span>
            </div>
            {/** Payment Section */}
            <h3 className="text-g font-semibold mt-4">Payment Section</h3>
            <p className='mr-8'>
              <span className='font-semibold'>Total per friend selected:</span> {!friendsSelected.length ? "Please select a friend first" : `${check.total / friendsSelected.length}`}
            </p>
            <div className='flex flex-row py-2'>
              <select name="friend" id="friends" onChange={updateSelectedFriends} >
                {friends.map((friend: string, idx: number) => (
                  <option key={idx} value={friend}>{friend}</option>
                ))}
              </select>
              <div className='flex flex-row ml-4'>
                {friendsSelected.map((friend: string, idx: number) => (
                  <p className='px-2 py-0.5 rounded border-2 bg-slate-300' key={idx}>{friend}</p>)
                )}
              </div>
            </div>

            {/** Pay Button */}
            <button className="mt-12 rounded border-2 p-2" disabled={!friendsSelected.length} onClick={pay}>Pay</button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Home