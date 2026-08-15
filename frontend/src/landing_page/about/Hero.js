import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h2 className="fs-2 text-center text-muted" style={{fontSize:"1.25rem", lineHeight:"1.5"}}>
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row p-5 mt-5 border-top text-muted" style={{lineHeight:"1.8", fontSize:"1rem"}}>
        <div className="col-6 p-5">
          <p>
            We kick-started Tradeora with the goal of breaking the barriers that traders and investors face in India in terms of cost, accessibility, support, and technology.</p>
            <p>We named the company Tradeora, representing a new era of seamless and technology-driven trading. Our vision is to make investing simple, transparent, and accessible for everyone.</p>
            <p>Today, Tradeora aims to empower traders and investors through powerful technology, transparent pricing, and a user-friendly ecosystem, helping them make smarter financial decisions and participate confidently in the Indian stock market.</p>
        </div>
        <div className="col-6 p-5">
            <p>In addition, Tradeora aims to build a strong learning and community ecosystem to empower retail traders and investors. Through educational resources, market insights, and practical tools, we strive to help users understand the markets better and make more informed investment decisions.</p>
            <p>We also believe in supporting innovation across the financial technology ecosystem. Tradeora aims to collaborate with emerging fintech ideas and solutions that can contribute to the growth and accessibility of India's capital markets, while encouraging technology-driven financial inclusion.</p>
            <p>And yet, we are always working on something new every day. From improving our trading experience to introducing smarter tools and features, Tradeora continues to evolve with the needs of its users. Stay connected with Tradeora to discover our latest updates, products, ideas, and the vision behind our journey.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
