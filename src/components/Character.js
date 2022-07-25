// Write your Character component here
export default function Character(props) {
    const {char} = props

    return (
        <div className="charContainer">
            {char.name}
            <button >See More</button>
        </div>
    )
}