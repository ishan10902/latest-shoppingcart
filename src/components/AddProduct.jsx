import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
  return (
    <div>
        <NavBar/>
        <h1 align="center">ADD PRODUCT</h1>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>ID</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>TITLE</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                            <label htmlFor="" className='form-label'>DESCRIPTION</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>CATEGORY</label>
                            <textarea name="decription" id="" className='form-control'></textarea>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>PRICE</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>DISCOUNT PERCENTAGE</label>
                            <input type="file" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>RATING</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>STOCK</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>BRAND</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>WEIGHT</label>
                            <input type="text" className='form-control' />
                        </div>
                        
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct