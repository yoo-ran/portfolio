import React from 'react';

function Weather() {
  return (
    <div>
        {/* Banner */}
        <section className="bg-[url('src/images/hobby-cycle.jpg')] h-96 bg-cover bg-center"></section>

        {/* Skills & Link */}
        <section>
            <article>
                <h2>Skills</h2>
                <div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>M</p>
                </div>
            </article>
            <article>
                <h2>Link</h2>
                <div>
                    <p>Github</p>
                    <p>Website</p>
                </div>
            </article>
        </section>

    </div>
  )
}

export default Weather