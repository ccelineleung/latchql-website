import React from 'react';

const HomePage = () => {
  const svgSize = '24';

  return (
    <div id="landing-container">
      <section id="latch">
        <figure className="latch-img">
          <img id="latchql-logo" src="public/logo.png" alt="" />
        </figure>
        <main className="div-main">
          <h1>Welcome to LatchQL</h1>
          <p className="latch-subheading">
            Open-source developer tool to address GraphQL's inherent security issues.
          </p>
          <ul className="latch-ul">
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              <div>
                <li className="latch-li-1">Open Source</li>
                <li className="latch-li-2">
                  Free-to-use lightweight middleware package
                </li>
              </div>
            </div>
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              <div>
                <li className="latch-li-1">Security</li>
                <li className="latch-li-2">
                  LatchQL adds additional layers of security
                </li>
              </div>
            </div>
            <div className="latch-li-div">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />

              <div>
                <li className="latch-li-1">Authentication and Authorization</li>
                <li className="latch-li-2">
                Provide permissions for users to have different levels of access to a database through graphQL queries.
                </li>
              </div>
            </div>
          </ul>
          <a href="https://github.com/oslabs-beta/LatchQL" target="_blank">
            <button className="latch-btn">Launch</button>
          </a>
        </main>
      </section>

      {/* -------------------- FEATURES -------------------- */}

      <section id="features">
        <main className="div-main">
          <p className="features-heading">
          Security Layer Middleware Package
          </p>
          <p className="features-subheading">
            Incorporates various technologies to account for extra layers of security for 
            developers writing GrapgQL queries. Contains wrapper methods that addresses the key aspects 
            that GraphQL fails to address out of the box. With the ability to assign access controls, 
            users are able to see and interact with the data in their API.
          </p>

          <a href="/docs">
            <button className="feature-btn">See the Docs</button>
          </a>
        </main>
        {/* -------------------- FEATURES -------------------- */}
        <figure className="feature-right-side">
          {/* GUI */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                className="bi bi-window-split"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z"/>
              </svg>
            </div>
            <p className="features-right-heading">Sandbox Web App</p>
            <p className="features-text">
              Graphical user interface (GUI) to be able to connect to a running instance and view query's key metrics
            </p>
          </div>
          {/* Max Depth Limit */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                className="bi bi-server"
                viewBox="0 0 16 16"
              >
                <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
                <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
              </svg>
            </div>
            <p className="features-right-heading">Max Depth Limit</p>
            <p className="features-text">
            Limiting the complexity of GraphQL queries by their depth protects the server against malicious query attacks that can put the resolvers in a never-ending request loop.
            </p>
          </div>
          {/* Cost Limit */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                className="bi bi-recycle"
                viewBox="0 0 16 16"
              >
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
              </svg>
            </div>

            <p className="features-right-heading">
            Cost Limit
            </p>
            <p className="features-text">
            Analyze the queries and applies cost analysis algorithm to prevent resource overload by blocking excessively expensive requests
            </p>
          </div>
          {/* Rate Limiter */}

          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                className="bi-shield-shaded"
                viewBox="0 0 16 16"
              >
                <path 
                fill-rule="evenodd" 
                d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
              </svg>
            </div>
            <p className="features-right-heading">
              Rate Limit
            </p>
            <p className="features-text">
            Mitigate attacks from brute force attacks, DoS and DDoS attacks, and web scraping attacks all while reducing strain on the server.
            </p>
          </div>
          {/* Authorization Limiter */}

          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                className="bi bi-person-badge"
                viewBox="0 0 16 16"
              >
                 <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
              </svg>
            </div>
            <p className="features-right-heading">
              Authorization Limiter
            </p>
            <p className="features-text">
            Contain identity and permission that tells the server whether the client is authorized for the requested resource using JWT authentication.
            </p>
          </div>
        </figure>
      </section>
      
      

      {/* -------------------- DEMO -------------------- */}
      <section id="demo">
        <h1 className="demo">Middleware Demo</h1>
        <main className="div-main"></main>
        <img className="gif" src="public/banner.jpg" alt="" />
        <img className="gif" src="public/banner.jpg" alt="" />
        <figure className="div-side"></figure>
        <figure className="div-side"></figure>
      </section>

      <section id="demo">
        <h1 className="demo">GUI Demo</h1>
        <main className="div-main"></main>
        <img className="gif" src="public/banner.jpg" alt="" />
        <img className="gif" src="public/banner.jpg" alt="" />
        <figure className="div-side"></figure>
        <figure className="div-side"></figure>
      </section>

      {/* -------------------- TEAM BIO -------------------- */}

      <section id="contact">
        <h1 className="team">The Team</h1>
        <div className="team2">
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/hannah.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">Hannah Bernstein</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/hbernie" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/bernstein-hannah"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/ray.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">
              Raymond Kim
            </div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/reykeem" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/raymondhkim/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/celine.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">Celine Leung</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/ccelineleung" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/celineleung412/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/ben.png"
                alt=""
              />
            </div>
            <div className="team2-member-name">Alex McPhail</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/mcphail-alex" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/mcphail-alex"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="team2-member">
            <div className="team2-member-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/johnjered.jpeg"
                alt=""
              />
            </div>
            <div className="team2-member-name">Johnjered Tolentino</div>
            <div className="team2-member-title">Software Engineer</div>
            <div className="team2-member-links">
              <div className="team2-member-github">
                <a href="https://github.com/Johnjeredivant" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="team2-member-linkedin">
                <a
                  href="https://www.linkedin.com/in/johnjered-tolentino/"
                  target="_blank"
                >
                  <img
                    src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
