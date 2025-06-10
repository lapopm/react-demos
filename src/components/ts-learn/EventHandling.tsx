import type React from "react"

const EventHandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget)
    }
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>EventHandling Example</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling 