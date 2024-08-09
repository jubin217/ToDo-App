import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" style={{ color: 'black' }}>𝐓𝐎 𝐃𝐎 𝐀𝐏𝐏</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>𝐀𝐃𝐃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search" style={{ color: 'white' }}>𝐒𝐄𝐀𝐑𝐂𝐇</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view" style={{ color: 'white' }}>𝐕𝐈𝐄𝐖</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
