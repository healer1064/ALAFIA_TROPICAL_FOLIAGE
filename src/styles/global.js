import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    html {
        font-size: 10px;
    }

    html, 
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    html, 
    body,
    #root,
    .App { 
        height: 100%;
    }
        

    *, ::before, ::after {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        line-height: 1;
        font-weight: 400;
        
    }

    h1 {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0 auto 2rem;
        font-size: 3.0rem;
        line-height: 3.2rem;
        color: #000000;
        text-align: left;
        font-weight: 400;
        text-transform: uppercase;
        border-bottom: #d3d3d3;
      }
      
      h2 {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0 auto 2rem;
        font-size: 2.5rem;
        line-height: 2.7rem;
        color: #000000;
        text-align: left;
        font-weight: 400;
        text-transform: uppercase;
        border-bottom: #d3d3d3;
      }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a, a:hover {
        transition: all .4s ease-in-out;
    }

    .main {
        width: 100%;
        height: calc(100% - 6.5rem);
        max-width: 1450px;
        padding: 0 10px;
        margin 0 auto;
    }

    .controlPanel {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 3rem 0 0 25.0rem;
        border-bottom: 1px solid #d3d3d3;
      
        .sidebar {
          position: absolute;
          top: 0; left: 0;
          width: 25.0rem;
          height: 100%;
          z-index: 1;
          border-right: 1px solid #d3d3d3;
        }
      
        .content {
          padding: 0 10px;
        }
      }
      
      .adminLayout {
        height: calc(100% - 6.5rem - 5.8rem - 3.6rem);
      }
      
      .dashboardLayout {
        height: calc(100% - 6.5rem - 5.8rem);
      } 
`