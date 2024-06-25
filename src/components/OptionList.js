import "../styles/optionList.css"
export default function(){
    return(
        <div className="mt-4 ms-4 no-bullets">
            <ul className="d-flex p-2">
                <li className="selected text-primary">Overview</li>
                <li>Fundamentals</li>
                <li>News Insights</li>
                <li>Sentiments</li>
                <li>Team</li>
                <li>Technicals</li>
                <li>Tokenomics</li>
            </ul>
        </div>
    )
}