import React , {useState} from 'react'

const SocialMedia = () => {
    
    const [social, setSocials] = useState([
        {_id : 1, className:'btn-social fab fa-instagram fa-2x mr-2' , href:'#'},
        {_id : 2, className:'btn-social fab fa-telegram fa-2x mr-2' , href:'#'},
        {_id : 3, className:'btn-social fab fa-facebook fa-2x mr-2' , href:'#'},
        {_id : 4, className:'btn-social fab fa-youtube fa-2x mr-2' , href:'#'},
    ])

    console.log(social);


    return (
        <div className="social-media d-flex">
         {social.map(s=><a key={s._id} href={s.href}><i className={s.className}></i></a>)}
      
    
        </div>
    )
}

export default SocialMedia
