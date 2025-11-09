import React, { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to fetch a quote from API
  const getQuote = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.api-ninjas.com/v2/quotes?category=success",
        {
          headers: {
            "X-Api-Key": process.env.REACT_APP_API_NINJA_KEY,
          },
        }
      );

      const data = await res.json();

      if (data && data[0]) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);

        // Save quote in localStorage with today's date
        const today = new Date().toDateString();
        localStorage.setItem(
          "dailyQuote",
          JSON.stringify({ date: today, quote: data[0].quote, author: data[0].author })
        );
      }
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote("Sorry, something went wrong. Try again!");
      setAuthor("");
    }

    setLoading(false);
  };

  // Fetch only once per day
  useEffect(() => {
    const savedData = localStorage.getItem("dailyQuote");
    const today = new Date().toDateString();

    if (savedData) {
      const parsed = JSON.parse(savedData);

      // ✅ If saved quote is from today → use it
      if (parsed.date === today) {
        setQuote(parsed.quote);
        setAuthor(parsed.author);
        setLoading(false);
        return;
      }
    }

    // Otherwise, fetch a new quote
    getQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", borderRadius: "10px" }}>
      {loading ? (
        <p>Loading quote...</p>
      ) : (
        <>
          <p style={{ fontStyle: "italic", fontSize: "18px" }}>“{quote}”</p>
          <p className="subtitle theme-gradient" style={{ fontWeight: "bold" }}>— {author}</p>

          {/* <div className="tmp-button-here" onClick={getQuote}>
            <a
              className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
              href="#"
            >
              <div className="icon-reverse-wrapper">
                <span className="btn-text">New Quote</span>
                <div className="btn-hack"></div>
                <img
                  src="/images/button/btg-bg.svg"
                  alt=""
                  className="btn-bg"
                />
                <img
                  src="/images/button/btg-bg-2.svg"
                  alt=""
                  className="btn-bg-hover"
                />
                <span className="btn-icon">
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </div>
            </a>
          </div> */}
        </>
      )}
    </div>
  );
}

export default Quotes;
