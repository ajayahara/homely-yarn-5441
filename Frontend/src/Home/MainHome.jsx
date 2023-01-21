import React from 'react'
//import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import "./MainHome.css"
const MainHome = () => {
    const Nav=useNavigate();
    const handelclick=()=>
    {
        Nav("/products");
    }
  return (
    <>
        <div className='nav'>

        </div>
      <div className="div1photoofnavbar">
      <NavLink to="/products">
      <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10334.jpg?w=1898.75&auto=format'
            alt='photo1'
        />
        </NavLink>
      </div>
      <div className='Topcategories'>
           <h1>Top categories</h1>
      </div>
      <div className='Topcategories-grid'>
        <div>
        <NavLink to="/products">
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10026.jpg?w=303.8&auto=format'
                alt='1'
            />
        </NavLink>
            
        </div>
        <div>

        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10027.jpg?w=303.8&auto=format'
                alt='2'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10028.jpg?w=303.8&auto=format'
                alt='3'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9682.jpg?w=303.8&auto=format'
                alt='4'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10029.jpg?w=303.8&auto=format'
                alt='5'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9683.jpg?w=303.8&auto=format'
                alt='6'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10030.jpg?w=303.8&auto=format'
                alt='7'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10103.jpg?w=303.8&auto=format'
                alt='8'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10032.ords?w=303.8&auto=format'
                alt='9'
            />
            </div>
        <div>
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9970.jpg?w=303.8&auto=format'
                alt='10'
            />
            </div>
      </div>
      <div className='photo'>
       <div className='photo3'>
       
        <div className='ph1'>
        <NavLink to="/products">
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10521.jpg?w=501.27000000000004&auto=format'
                alt='ph1'
            />
        </NavLink>
           
        </div>
        <div className='ph2'>
        <NavLink to="/products">
        <img src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10522.jpg?w=1002.5400000000001&auto=format'
                alt=''
            />
        </NavLink>
       
        </div>
       
       </div>
       </div>
       <div className='photo4'>
              <div className='ph11'>
                <div className='viewall'>
                    <h1>BEST BUY <br></br> STORE</h1>
                    <button onClick={handelclick}>VEIW ALL</button>
                </div>
              </div>
              <div className='ph12'>
                <div className='ph12-grid'>
                    <div>
                        <img 
                            src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9972.jpg?w=190&auto=format'
                            alt='1'
                        />
                    </div>
                    <div>
                    <img 
                            src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9974.jpg?w=190&auto=format'
                            alt='2'
                        />
                    </div>
                    <div>
                    <img 
                            src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9976.jpg?w=190&auto=format'
                            alt='3'
                        /></div>
                    <div>
                    <img 
                            src='https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9978.jpg?w=190&auto=format'
                            alt='4'
                        />
                    </div>
                </div>
              </div>
       </div>
       <div className='top'>
       <h1>Top Seller</h1>
       </div>
       <div className='topseller'>
        
        <div>
            <img src='https://cdn.staticans.com/image/tr:e-sharpen-01,h-300,w-225,cm-pad_resize/data/Killer/10-June-2022/1404-FS-DENALI-K071FSSLNDR-LME_1.jpg'
                alt='men'
            />
            <p>Men's Category</p>
            <p>Rs.500-5000</p>
        </div>
        <div>
        <img src='https://rukminim1.flixcart.com/image/612/612/k3670cw0/kurta/p/4/u/s-ss19anktgwk02-anmi-original-imafmczpmj6kmex9.jpeg?q=70'
                alt='Women'
            />
            <p>Women's Category</p>
            <p>Rs.400-80000</p>
        </div>
        <div>
        <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/kids-dress/v/1/f/1-2-years-girls-calf-length-dress-jhilikgarments-original-imagg8t5jycgagfb.jpeg?q=70'
                alt='gril child'
            />
            <p>Girl child Category</p>
            <p>Rs.100-100000</p>
        </div>
        <NavLink to="/products">
        <div>
        
        <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/v/x/f/2-3-years-digibc001-digimart-original-imag69ha2hensycf-bb.jpeg?q=70'
                alt='small child'
            />
            <p>Small Child Category</p>
            <p>Rs.100-8000</p>
        </div>
        </NavLink>
        
       </div>
    </>
  )
}

export default MainHome
