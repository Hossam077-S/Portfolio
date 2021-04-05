import React from 'react'
import Particles from 'react-particles-js'

export default function ParticleAbout() {
    return (
        <div className="Paricles">
            <Particles
    params={{
	    "particles": {
            "color":{
                "value": ["#f5b921"]
            },
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            },
	        },
	        "line_linked": {
	            "enable": false,
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0,
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
        </div>
    )
}
