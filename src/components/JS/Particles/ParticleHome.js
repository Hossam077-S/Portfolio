import React from 'react'
import Particles from 'react-particles-js'

export default function ParticleHome() {
    return (
        <div className="Paricles">
           <Particles
                params={{
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            "enable": true,
                            "value_area": 900
                        }
                    },
                    "size": {
                        "value": 3
                    },
                    "color": {
                        "value": ["#E86363"]
                    },
                    "lineLinked":{
                        "color": {
                            "value": ["#f5b921"]
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        </div>
    )
}
