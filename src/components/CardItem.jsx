import React from 'react'

export const CardItem = () => {
  return (
    <div class="card">
        <div className="card-header">
            <img src="https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133" width={250} height={200} />
            <h2>Tourmaline & Eucalyptus Bar Soap</h2>
        </div>
        <div className="card-body">
            <div className="price">
                <h3>$12</h3>
                <input type="text" value={'2'}/>
            </div>
            <p>Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion</p>
        </div>

        <div className="card-footer">
            <button>Add to cart</button>
            <button className='btn-white'>Learn More</button>
        </div>
    </div>
  )
}
