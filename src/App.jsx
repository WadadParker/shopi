import { useState } from "react"


function App() {
  const [showApiKey,setShowApiKey] = useState(false);
  function generateApiKey() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <main className="flex flex-col -mt-60 w-96 gap-y-6">
        <h1 className=" text-text text-lg font-bold  tracking-[-0.64px] mb-10 text-center">NEW CONTRACT</h1>
        <aside className="flex flex-col gap-y-2">
          <h1 className="text-text">Enter your <span className="text-[#1E1E1E] font-bold">wBTC</span> wallet address </h1>
          <input placeholder="Wallet Address" className=" rounded-lg border border-border bg-white px-3 py-2" />

        </aside>
        <aside className="flex flex-col gap-y-2">
          <h1 className="text-text">Manufacturer Payout Amount </h1>
          <input placeholder="0.004wbtc or 10%" className=" rounded-lg border border-border bg-white px-3 py-2" />

        </aside>
        <button className="bg-bg-lightred text-white px-2 py-1 self-center rounded-lg border border-bg hover:bg-white hover:text-bg-lightred cursor-pointer transition-all ease-linear "
        onClick={()=>setShowApiKey(true)}
        >Create</button>
        <p className={`text-center text-text ${showApiKey?"visible":"invisible"} `}><span className="text-[#1E1E1E] font-bold">API KEY:</span> {generateApiKey()}</p>
      </main>
    </div>
  )
}

export default App
