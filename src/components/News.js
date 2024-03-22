import React from 'react'

export const News=(props)=> 
   {
    let {title,description,imageUrl,url,date,author}=props//in react class based components the props directly return the passed props no need of writing props.variable name
    const Redirect=()=>
    {
      return this.$router.push(url)
    }
      
    return (
      <div className='my-3'>
        
     <div className="card" style={{width:"18rem"}}>
  <img  className="card-img-top" src={imageUrl} alt="..."/>
  <div className="card-body" onClick={Redirect}>
    <a href={url}className="card-title">{title}</a>
    <p className="card-text"><small className="text-body-secondary">Date:{new Date(date).toString()}</small></p>
    <p className="card-text"><small className="text-body-secondary"><strong>Author:{author?author:'unknown'}</strong></small></p>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More...</a>

  </div>
</div>
      </div>
    )
  
}

export default News
