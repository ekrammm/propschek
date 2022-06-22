import React from 'react'
import Image from './Image'
import PropTypes from 'prop-types';


function Profile({fullName,bio,profession, handleAlert}) {
  return (
    <div>
        <h1>{fullName}</h1>
        <h1>{bio}</h1>
        <h1>{profession}</h1>
        <br/>
      <Image><img src="https://www.flaticon.com/fr/icone-gratuite/utilisateur_219969"  style={{backgroundColor:"red",borderRadius:"50%"}}/>
      </Image>
      <button onClick={()=>handleAlert(fullName)}>click </button>



        
    </div>
  )
}
Profile.defaultProps = {
  fullName: "ekram",
  Bio: "selmi",
  profession: "etudiante",
}

Profile.propTypes = {
  fullName: PropTypes.string,
  Bio:PropTypes.string,
  profession:PropTypes.string
};
export default Profile