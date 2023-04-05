import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from './Scard';
import './index.css';
import './media.css';
import Sdata from './Sdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
  <div className='card_style'>
{Sdata.map((val, i) =>{
  return(
    <Cards key={i} imgsrc={val.imgsrc} 
    title={val.title}
    sname={val.sname} />
    );

})
}
</div>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
