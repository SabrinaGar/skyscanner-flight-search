import React from 'react';
import girlImg from '../assets/img/laptop-girl.PNG'

const FormSubscribe = () => {


    return (
        <div className="container">
            <div className="body">
                <div className="row">
                <div className="title-container">
                <h2 className="medium-font">¡Subscríbete ahora!</h2>
                <p className="smoll-font">Disfruta de este beneficio exclusivo</p>
                </div>
                <div className="form-wrapper">
                <form >
                        <input className= "text-input" type="text" id="fname" name="fname" value="Nombre"></input>
                                <input  className= "text-input"  type="text" id="lname" name="lname" value="Apellido"></input>
                                    < br></br>
                                    <input  className= "text-input" type="email" id="email" name="email" placeholder="email"></input>
                                    <input  className= "text-input"  type="tel" id="phone" name="phone" placeholder="Teléfono"
                                     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                                         <br></br>
                                         
                                     <p className= "smoll-font" > <input type="radio" id="agree" name="agree" value="agree"></input>
                                     <label for="agree">Acepto los <b>Términos y condicioness</b></label></p>
                                    <input className= "button" type="submit" value="Submit"></input>
                                  
                </form>
                <img className="form-img" src={girlImg}></img>
                </div>
                </div>

            </div>
        </div>


    )
}

export default FormSubscribe;