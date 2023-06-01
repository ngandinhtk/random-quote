import React, {useState, useEffect} from 'react'
import twitterIcon from '../twitter.svg'
import tumblrIcon from '../tumblr.svg'

function Quote() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  useEffect(()=>{
    getQuote()
  },[])
  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url).then(res=> res.json()).then(datas => {
      let dataQuote = datas.quotes;
      let randomNum = Math.floor(Math.random() * dataQuote.length)
      let randomquote = dataQuote[randomNum]
      setQuote(randomquote.quote);
      setAuthor(randomquote.author);
    })
  }
  const handleClick = () => {
    getQuote();
  }
  return (
    <>
    <pre>
      <h1>Random Quote</h1>
    </pre>
      <div id="quote-box">
        <div className='quote-text'> 
        <div id="text">
          <p> "{quote}" </p>     
        </div>
        <div id="author">
          <p> {author} </p>
        </div>
        </div>
        <div id="buttons">
          <div className="social-media">
            <a href="#" id="tweet-quote">
              <span><img src={twitterIcon} alt="" /></span>
            </a>
            <a href="#" id="tumbr-quote">
              <span><img src={tumblrIcon} alt="" /></span>
            </a>
          </div>
          <button onClick={handleClick} id='new-quote'>New Quote</button>
        </div>
      </div>
    </>
  )
}

export default Quote
