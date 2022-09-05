import React from 'react';

const Donation = () => {
  return (
    
       <section className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-55">
                <h3>Make a Donation</h3>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="donation-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="amount">
                      <div className="input-field">
                        <div className="input-group">
                          <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                          </div>
                          <input 
                          type="text" 
                          className="form-control"
                          placeholder="10,000"
                          aria-label="Username" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-8">
                    <div className="amount">
                      <div className="need d-flex align-items-center
                      justify-content-between">
                      <div className="select">
                        <h5>Select Amount</h5>
                      </div>
                      <div className="funds">
                        <input type="radio" name="radio-group" />
                        <label for="fund-1">$50</label>
                      </div>
                      <div className="funds">
                        <input type="radio" name="radio-group"/>
                        <label for="fund-2">$100</label>
                      </div>
                      <div className="funds">
                        <input type="radio" name="radio-group"/>
                        <label for="fund-2">$200</label>
                      </div>
                      <div className="funds">
                        <input type="radio" name="radio-group" />
                        <label for="Other">Others</label>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="donation-btn text-center">
                <a href="" className="btn btn-don">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
       </section>
      
  )
}

export default Donation;